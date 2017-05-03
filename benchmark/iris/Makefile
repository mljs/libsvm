CXX ?= g++
CFLAGS = -Wall -Wconversion -O3 -fPIC

all: cross-validation grid-search

svm.o: ../../libsvm/svm.cpp ../../libsvm/svm.h
	$(CXX) $(CFLAGS) -c ../../libsvm/svm.cpp


util.o: util.h util.cpp
	$(CXX) $(CFLAGS) -c util.cpp -o util.o

js-interfaces.o: ../../js-interfaces.c
	$(CXX) $(CFLAGS) -c ../../js-interfaces.c -o js-interfaces.o

grid-search: js-interfaces.o grid-search.cpp util.o svm.o
	$(CXX) $(CFLAGS) grid-search.cpp util.o svm.o js-interfaces.o -o grid-search -lm
	
cross-validation: js-interfaces.o cross-validation.cpp util.o svm.o
	$(CXX) $(CFLAGS) cross-validation.cpp util.o svm.o js-interfaces.o -o cross-validation -lm

clean:
	rm *.o grid-search cross-validation
