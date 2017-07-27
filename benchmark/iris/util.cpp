#include "./util.h"
#include <fstream>
#include <iostream>

bool load_iris(double* data, double* labels, int nb_samples, int nb_features, const char* filename) {
    std::ifstream ifstr(filename, std::ifstream::in);
    int count = 0;
    if(!ifstr.good()) {
        return false;
    }
    while(ifstr.good()) {
        if(count >= nb_samples) {
            std::cout << "Stop reading data because reached size limit" << std::endl;
            break;
        }
        for(int i = 0; i < nb_features; i++) {
            ifstr >> data[count * nb_features + i];
        }
        ifstr >> labels[count];

        count++;
    }
    return true;
}
