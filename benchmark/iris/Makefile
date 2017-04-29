CXX ?= g++
CFLAGS = -Wall -Wconversion -O3 -fPIC

all: iris

svm.o: ../../libsvm/svm.cpp ../../libsvm/svm.h
	$(CXX) $(CFLAGS) -c ../../libsvm/svm.cpp

all: iris iris-cv

util.o: util.h util.cpp
	$(CXX) $(CFLAGS) -c util.cpp -o util.o

js-interfaces.o: ../../js-interfaces.c
	$(CXX) $(CFLAGS) -c ../../js-interfaces.c -o js-interfaces.o

iris: js-interfaces.o iris.cpp util.o svm.o
	$(CXX) $(CFLAGS) iris.cpp util.o svm.o js-interfaces.o -o iris -lm
	
iris-cv: js-interfaces.o iris-cv.cpp util.o svm.o
	$(CXX) $(CFLAGS) iris-cv.cpp util.o svm.o js-interfaces.o -o iris-cv -lm

clean:
	rm *.o
