#ifndef JS_INTERFACES
#define JS_INTERFACES

#include "libsvm/svm.h"

#ifdef __cplusplus
extern "C" {
#endif

void print_null(const char *s);
void exit_with_help();
void parse_command_line(const char* input_command, struct svm_parameter* param);
void add_instance(struct svm_problem* prob, double* features, int nb_dimensions, double y, int i);
char* serialize_model(struct svm_model* model);
struct svm_model* deserialize_model(const char* serialized);
struct svm_problem* create_svm_nodes(int nb_features, int nb_dimensions);
void svm_free_model(struct svm_model *model);
struct svm_model* libsvm_train_problem(struct svm_problem* prob, const char* command);
double libsvm_predict_one(struct svm_model* model, double* data, int size);
struct svm_model* libsvm_train(double *data, double *labels, int nb_features, int nb_dimensions, const char* command);
double get_svr_epsilon(struct svm_model* model);
void free_problem(struct svm_problem* prob);
void libsvm_cross_validation(struct svm_problem* problem, const char* command, int kFold, double* target);

#ifdef __cplusplus
}
#endif

#endif
