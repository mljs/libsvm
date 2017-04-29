CC = emcc
CXX = em++

CFLAGS = -Wall -Wconversion -O3 -fPIC --memory-init-file 0
BUILD_DIR=dist
EXPORTED_FUNCTIONS="['_parse_command_line', '_create_svm_nodes', '_add_instance', '_libsvm_train_problem', '_libsvm_train', '_libsvm_predict_one', '_get_svr_epsilon', '_svm_free_model', '_svm_get_svm_type', '_svm_get_nr_sv', '_svm_get_nr_class', '_svm_get_sv_indices', '_svm_get_labels', '_libsvm_cross_validation', '_free_problem']"

all: wasm asm

svm.o: libsvm/svm.cpp libsvm/svm.h
	$(CXX) $(CFLAGS) -c libsvm/svm.cpp -o svm.o

wasm: js-interfaces.c svm.o libsvm/svm.h
	mkdir -p $(BUILD_DIR)/wasm; $(CC) $(CFLAGS) js-interfaces.c svm.o -o $(BUILD_DIR)/wasm/libsvm.js --pre-js src/wasmPreJS.js -s -s BINARYEN_ASYNC_COMPILATION=1 -s "BINARYEN_TRAP_MODE='allow'" -s NO_FILESYSTEM=1 -s BINARYEN=1 -s "BINARYEN_METHOD='native-wasm'" -s EXPORTED_FUNCTIONS=$(EXPORTED_FUNCTIONS)

asm: js-interfaces.c svm.o libsvm/svm.h
	mkdir -p $(BUILD_DIR)/asm; $(CC) $(CFLAGS) js-interfaces.c svm.o -o $(BUILD_DIR)/asm/libsvm.js --pre-js src/asmPreJS.js -s -s NO_FILESYSTEM=1 -s EXPORTED_FUNCTIONS=$(EXPORTED_FUNCTIONS)

clean:
	rm -f *~ js-interfaces.o ./svm.o
