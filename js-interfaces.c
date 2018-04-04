#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
#include <string.h>
#include <ctype.h>
#include "js-interfaces.h"
#include "libsvm/svm.h"
#define Malloc(type, n) (type *)malloc((n) * sizeof(type))

void print_null(const char *s) {}

void exit_with_help() { exit(1); }

#ifdef __cplusplus
extern "C" {
#endif

void parse_command_line(const char *input_command, struct svm_parameter *param)
{
	void (*print_func)(const char *) = NULL; // default printing to stdout
	char command[256];
	char *curr = NULL;
	char *prev = NULL;

	strcpy(command, input_command);
	curr = strtok(command, " \t\n"); // label

	// default values
	param->svm_type = C_SVC;
	param->kernel_type = RBF;
	param->degree = 3;
	param->gamma = 0; // 1/num_features
	param->coef0 = 0;
	param->nu = 0.5;
	param->cache_size = 100;
	param->C = 1;
	param->eps = 1e-3;
	param->p = 0.1;
	param->shrinking = 1;
	param->probability = 0;
	param->nr_weight = 0;
	param->weight_label = NULL;
	param->weight = NULL;

	if (curr == NULL)
		return;

	do
	{
		if (curr[0] != '-')
			break;

		prev = curr;
		if ((curr = strtok(NULL, " \t\n")) == NULL)
			exit_with_help();

		switch (prev[1])
		{
		case 's':
			param->svm_type = atoi(curr);
			break;
		case 't':
			param->kernel_type = atoi(curr);
			break;
		case 'd':
			param->degree = atoi(curr);
			break;
		case 'g':
			param->gamma = atof(curr);
			break;
		case 'r':
			param->coef0 = atof(curr);
			break;
		case 'n':
			param->nu = atof(curr);
			break;
		case 'm':
			param->cache_size = atof(curr);
			break;
		case 'c':
			param->C = atof(curr);
			break;
		case 'e':
			param->eps = atof(curr);
			break;
		case 'q':
			print_func = &print_null;
			break;
		case 'p':
			param->p = atof(curr);
			break;
		case 'h':
			param->shrinking = atoi(curr);
			break;
		case 'b':
			param->probability = atoi(curr);
			break;
		case 'w':
			++param->nr_weight;
			param->weight_label = (int *)realloc(param->weight_label, sizeof(int) * param->nr_weight);
			param->weight = (double *)realloc(param->weight, sizeof(double) * param->nr_weight);
			param->weight_label[param->nr_weight - 1] = atoi(&prev[2]);
			param->weight[param->nr_weight - 1] = atof(curr);
			break;
		default:
			fprintf(stderr, "Unknown option: -%c\n", prev[1]);
			exit_with_help();
		}
	} while ((curr = strtok(NULL, " \t\n")) != NULL);

	svm_set_print_string_function(print_func);
}

void add_instance(struct svm_problem *prob, double *features, int nb_dimensions, double y, int i)
{
	for (int j = 0; j < nb_dimensions; j++)
	{
		prob->x[i][j].index = j + 1;
		prob->x[i][j].value = features[j];
	}
	prob->x[i][nb_dimensions].index = -1;
	prob->y[i] = y;
}

char *serialize_model(struct svm_model *model)
{
	int success = svm_save_model("testfile.txt", model);
	if (success < 0)
		return NULL;
	FILE *f = fopen("testfile.txt", "rb");
	fseek(f, 0, SEEK_END);
	long fsize = ftell(f);
	fseek(f, 0, SEEK_SET); //same as rewind(f);

	char *string = Malloc(char, fsize + 1);
	fread(string, fsize, 1, f);
	fclose(f);

	string[fsize] = 0;
	return string;
}

struct svm_model *deserialize_model(const char *serialized)
{
	FILE *f = fopen("testfile.txt", "w");
	fprintf(f, "%s", serialized);
	fclose(f);
	return svm_load_model("testfile.txt");
}

struct svm_problem *create_svm_nodes(int nb_features, int nb_dimensions)
{
	struct svm_problem *prob = Malloc(struct svm_problem, 1);
	prob->l = nb_features;
	prob->y = Malloc(double, prob->l);
	prob->x = Malloc(struct svm_node *, prob->l);
	struct svm_node *x_space = Malloc(struct svm_node, prob->l * (nb_dimensions + 1));

	for (int i = 0; i < prob->l; ++i)
		prob->x[i] = x_space + i * (nb_dimensions + 1);

	return prob;
}

void svm_free_model(struct svm_model *model)
{
	svm_free_and_destroy_model(&model);
}

struct svm_model *libsvm_train_problem(struct svm_problem *prob, const char *command)
{
	struct svm_parameter param;
	parse_command_line(command, &param);

	if (param.svm_type == EPSILON_SVR || param.svm_type == NU_SVR)
	{
		if (param.gamma == 0)
			param.gamma = .1;
	}
	else
	{
		if (param.gamma == 0)
			param.gamma = .5;
	}

	struct svm_model *model = svm_train(prob, &param);

	svm_destroy_param(&param);
	return model;
}

void libsvm_cross_validation(struct svm_problem *prob, const char *command, int kFold, double *target)
{
	struct svm_parameter param;
	parse_command_line(command, &param);
	svm_cross_validation(prob, &param, kFold, target);
	svm_destroy_param(&param);
}

void free_problem(struct svm_problem *prob)
{
	free(prob->y);
	if (prob->l > 0)
	{
		free(prob->x[0]);
	}
	free(prob->x);
	free(prob);
}

struct svm_node *init_node(double *data, int size)
{
	struct svm_node *node = Malloc(struct svm_node, size + 1);
	for (int i = 0; i < size; i++)
	{
		node[i].index = i + 1;
		node[i].value = data[i];
	}
	node[size].index = -1;
	return node;
}

double libsvm_predict_one(struct svm_model *model, double *data, int size)
{
	struct svm_node *node = init_node(data, size);
	double pred = svm_predict(model, node);
	free(node);
	return pred;
}

double libsvm_predict_one_probability(struct svm_model *model, double *data, int size, double *prob_estimates)
{
	struct svm_node *node = init_node(data, size);
	double pred = svm_predict_probability(model, node, prob_estimates);
	return pred;
}

struct svm_model *libsvm_train(double *data, double *labels, int nb_features, int nb_dimensions, const char *command)
{
	struct svm_problem *prob = create_svm_nodes(nb_features, nb_dimensions);
	for (int i = 0; i < nb_features; i++)
	{
		for (int j = 0; j < nb_dimensions; j++)
		{
			prob->x[i][j].index = j + 1;
			prob->x[i][j].value = data[i * nb_dimensions + j];
		}
		prob->x[i][nb_dimensions].index = -1;
		prob->y[i] = labels[i];
	}

	return libsvm_train_problem(prob, command);
}

double get_svr_epsilon(struct svm_model *model)
{
	return model->param.p;
}

#ifdef __cplusplus
}
#endif
