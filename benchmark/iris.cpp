#include "../js-interfaces.h"
#include <fstream>
#include <iostream>
#include <time.h>
#include <chrono>
#include <math.h>
#include <stdio.h>

#define NB_SAMPLES 150
#define NB_FEATURES 4
#define COST_GRID_SIZE 10
#define GAMMA_GRID_SIZE 10
#define COST_MIN -3
#define COST_MAX 3
#define GAMMA_MIN -3
#define GAMMA_MAX 3


int main() {
    using namespace std::chrono;
    double data[NB_SAMPLES][NB_FEATURES];
    double labels[NB_SAMPLES];
    double cost[COST_GRID_SIZE];
    double gamma[GAMMA_GRID_SIZE];


    for(int i=0; i<COST_GRID_SIZE; i++) {
        cost[i] = pow(10, COST_MIN + (double)i / (COST_GRID_SIZE - 1) * (COST_MAX - COST_MIN));
    }

    for(int i=0; i<GAMMA_GRID_SIZE; i++) {
        gamma[i] = pow(10, GAMMA_MIN + (double)i / (GAMMA_GRID_SIZE - 1) * (GAMMA_MAX - GAMMA_MIN));
    }

    std::ifstream ifstr("iris.txt", std::ifstream::in);
    int count = 0;
    while(ifstr.good()) {
        std::string str;
        ifstr >> labels[count];
        for(int i = 0; i < NB_FEATURES; i++) {
            ifstr >> data[count][i];
        }
        count++;
    }


    auto t1 = steady_clock::now();

    for(int i=0; i<COST_GRID_SIZE; i++) {
        for(int j = 0; j<GAMMA_GRID_SIZE; j++) {
            svm_problem* problem = create_svm_nodes(NB_SAMPLES, NB_FEATURES);
            for(int k=0; k<NB_SAMPLES; k++) {
                add_instance(problem, data[k], NB_FEATURES, labels[k], k);
            }

            char cmd[128];
            sprintf(cmd, "-q 1 -c %f -g %f", cost[i], gamma[j]);
            svm_model * model = libsvm_train_problem(problem, cmd);
            svm_free_model(model);
        }

    }
    auto t2 = steady_clock::now();

    duration<double> time_span = duration_cast<duration<double>>(t2 - t1);
    std::cout << time_span.count()*100 << " ms\n";

}
