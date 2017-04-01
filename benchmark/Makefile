CXX ?= g++
CFLAGS = -Wall -Wconversion -O3 -fPIC

all: iris

svm.o: ../libsvm/svm.cpp ../libsvm/svm.h
	$(CXX) $(CFLAGS) -c ../libsvm/svm.cpp

all: iris

js-interfaces.o: ../js-interfaces.c
	$(CXX) $(CFLAGS) -c ../js-interfaces.c -o js-interfaces.o

iris: js-interfaces.o iris.cpp svm.o
	$(CXX) $(CFLAGS) iris.cpp svm.o js-interfaces.o -o iris -lm

clean:
	rm *.o iris
