CC = emcc
CXX = em++

CFLAGS = -Wall -Wconversion -O3 -fPIC --memory-init-file 0
WASM?=0
ENVIRONMENT?=NODE

all: libsvm-js-interfaces.js

svm.o: libsvm/svm.cpp libsvm/svm.h
	$(CXX) $(CFLAGS) -c libsvm/svm.cpp -o ./svm.o

libsvm-js-interfaces.js: js-interfaces.c svm.o libsvm/svm.h
	mkdir -p lib; $(CC) $(CFLAGS) js-interfaces.c ./svm.o -o lib/libsvm-js-interfaces.js --pre-js preJs.js -s NO_FILESYSTEM=1 -s WASM=$(WASM) -s ASSERTIONS=1 -s EXPORTED_FUNCTIONS="['_parse_command_line', '_create_svm_nodes', '_add_instance', '_libsvm_train_problem', '_libsvm_train', '_libsvm_predict_one', '_get_svr_epsilon', '_svm_free_model_content', '_svm_get_svm_type', '_svm_get_nr_sv', '_svm_get_nr_class', '_svm_get_sv_indices', '_svm_get_labels']"

clean:
	rm -f *~ js-interfaces.o ./svm.o
