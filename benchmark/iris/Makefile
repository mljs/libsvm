CXX ?= g++
CFLAGS = -Wall -Wconversion -O3 -fPIC

all: mkdir bin/cross-validation bin/grid-search

mkdir:
	mkdir -p bin

bin/svm.o: ../../libsvm/svm.cpp ../../libsvm/svm.h
	$(CXX) $(CFLAGS) -c ../../libsvm/svm.cpp -o bin/svm.o


bin/util.o: util.h util.cpp
	$(CXX) $(CFLAGS) -c util.cpp -o bin/util.o

bin/js-interfaces.o: ../../js-interfaces.c
	$(CXX) $(CFLAGS) -c ../../js-interfaces.c -o bin/js-interfaces.o

bin/grid-search: bin/js-interfaces.o grid-search.cpp bin/util.o bin/svm.o
	$(CXX) $(CFLAGS) grid-search.cpp bin/util.o bin/svm.o bin/js-interfaces.o -o bin/grid-search -lm
	
bin/cross-validation: bin/js-interfaces.o cross-validation.cpp bin/util.o bin/svm.o
	$(CXX) $(CFLAGS) cross-validation.cpp bin/util.o bin/svm.o bin/js-interfaces.o -o bin/cross-validation -lm

clean:
	rm -r bin/*
