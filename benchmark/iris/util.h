#ifndef IRIS_UTIL_H
#define IRIS_UTIL_H

#define NB_SAMPLES 150
#define NB_FEATURES 4

bool load_iris(double[NB_SAMPLES][NB_FEATURES], double[NB_SAMPLES], const char* filename);

#endif