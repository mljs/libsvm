#include "./util.h"
#include <fstream>
#include <iostream>

void load_iris(double data[NB_SAMPLES][NB_FEATURES], double labels[NB_SAMPLES]) {
    std::ifstream ifstr("iris.txt", std::ifstream::in);
    int count = 0;
    while(ifstr.good()) {
        if(count >= NB_SAMPLES) {
            std::cout << "Stop reading data because reached size limit" << std::endl;
            break;
        }
        for(int i = 0; i < NB_FEATURES; i++) {
            ifstr >> data[count][i];
        }
        ifstr >> labels[count];

        count++;
    }
}
