#include "../../js-interfaces.h"
#include "./util.h"
#include <fstream>
#include <iostream>
#include <time.h>
#include <chrono>
#include <math.h>
#include <stdio.h>

#define NB_SAMPLES 150
#define NB_FEATURES 4
#define COST 1.0
#define GAMMA 0.2
#define SECONDS 10


int main(int argc, char** argv) {
    char* filename = argv[1];
    using namespace std::chrono;

    double data[NB_SAMPLES][NB_FEATURES];
    double labels[NB_SAMPLES];
    if(!load_iris(data, labels, filename)) {
        std::cout << "Could not load data file" << std::endl;
        return 1;
    }

    duration<double> time_span;
    auto t1 = steady_clock::now();
    double target[NB_SAMPLES];
    int count = 0;
    do {
        svm_problem* problem = create_svm_nodes(NB_SAMPLES, NB_FEATURES);
        for(int k=0; k<NB_SAMPLES; k++) {
            add_instance(problem, data[k], NB_FEATURES, labels[k], k);
        }


        char cmd[128];
        sprintf(cmd, "-q 1 -c %f -g %f", COST, GAMMA);

        libsvm_cross_validation(problem, cmd, NB_SAMPLES, target); // loo cv
        free_problem(problem);
        auto t2 = steady_clock::now();

        time_span = duration_cast<duration<double>>(t2 - t1);
        count++;
    } while(time_span.count() < SECONDS);


//    int correct = 0;
//    for(int i=0; i<NB_SAMPLES; i++) {
//        if(target[i] == labels[i]) correct++;
//    }
//
//    std::cout << "correct: " << correct << std::endl;

    std::cout << "iris-cv cpp: " << count << " iterations in " << SECONDS << " seconds\n";
    return 0;
}
