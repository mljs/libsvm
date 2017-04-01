#include "../js-interfaces.h"
#include <fstream>
#include <iostream>
#include <time.h>
#include <chrono>

#define NB_SAMPLES 150
#define NB_FEATURES 4


int main() {
    using namespace std::chrono;
    double data[NB_SAMPLES][NB_FEATURES];
    double labels[NB_SAMPLES];

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

    for(int i=0; i<1000; i++) {
        svm_problem* problem = create_svm_nodes(NB_SAMPLES, NB_FEATURES);
        for(int i=0; i<NB_SAMPLES; i++) {
            add_instance(problem, data[i], NB_FEATURES, labels[i], i);
        }

        svm_model * model = libsvm_train_problem(problem, "-q 1");
        svm_free_model(model);
    }
    auto t2 = steady_clock::now();

    duration<double> time_span = duration_cast<duration<double>>(t2 - t1);
    std::cout << time_span.count() << '\n';

}
