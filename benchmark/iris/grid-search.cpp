#include "../../js-interfaces.h"
#include "./util.h"
#include <iostream>
#include <time.h>
#include <chrono>
#include <math.h>
#include <stdio.h>

#define COST_GRID_SIZE 6
#define GAMMA_GRID_SIZE 6
#define COST_MIN -3
#define COST_MAX 3
#define GAMMA_MIN -3
#define GAMMA_MAX 3


int main(int argc, char** argv) {
    using namespace std::chrono;
    char* filename = argv[1];
    double time = atof(argv[2]);

    double data[NB_SAMPLES * NB_FEATURES];
    double labels[NB_SAMPLES];

    if(!load_iris(data, labels, NB_SAMPLES, NB_FEATURES, filename)) {
        std::cout << "Could not load data file" << std::endl;
        return 1;
    }


    double cost[COST_GRID_SIZE];
    double gamma[GAMMA_GRID_SIZE];


    for(int i=0; i<COST_GRID_SIZE; i++) {
        cost[i] = pow(10, COST_MIN + (double)i / (COST_GRID_SIZE - 1) * (COST_MAX - COST_MIN));
    }

    for(int i=0; i<GAMMA_GRID_SIZE; i++) {
        gamma[i] = pow(10, GAMMA_MIN + (double)i / (GAMMA_GRID_SIZE - 1) * (GAMMA_MAX - GAMMA_MIN));
    }


    duration<double> time_span;
    auto t1 = steady_clock::now();
    auto t2 = t1;
    int count = 0;
    do {
        for(int i=0; i<COST_GRID_SIZE; i++) {
            for(int j = 0; j<GAMMA_GRID_SIZE; j++) {
                svm_problem* problem = create_svm_nodes(NB_SAMPLES, NB_FEATURES);
                for(int k=0; k<NB_SAMPLES; k++) {
                    add_instance(problem, data + k * NB_FEATURES, NB_FEATURES, labels[k], k);
                }

                char cmd[128];
                sprintf(cmd, "-q 1 -c %f -g %f", cost[i], gamma[j]);
                svm_model * model = libsvm_train_problem(problem, cmd);
                svm_free_model(model);
            }

        }
        t2 = steady_clock::now();
        time_span = duration_cast<duration<double> >(t2 - t1);
        count++;
    } while(time_span.count() < time);

    std::cout << count << " iterations in " << time << " seconds." << std::endl;
}
