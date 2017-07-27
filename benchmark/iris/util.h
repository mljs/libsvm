#ifndef IRIS_UTIL_H
#define IRIS_UTIL_H

#define NB_SAMPLES 150
#define NB_FEATURES 4

bool load_iris(double*, double[NB_SAMPLES], int nb_samples, int nb_features, const char* filename);

#endif