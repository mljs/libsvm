CC = emcc
CXX = em++

CFLAGS = -Wall -Wconversion -O3 -fPIC --memory-init-file 0
BUILD_DIR=out/emscripten
EXPORTED_FUNCTIONS="['_parse_command_line', '_create_svm_nodes', '_add_instance', '_libsvm_train_problem', '_libsvm_train', '_libsvm_predict_one', '_libsvm_predict_one_probability', '_get_svr_epsilon', '_svm_free_model', '_svm_get_svm_type', '_svm_get_nr_sv', '_svm_get_nr_class', '_svm_get_sv_indices', '_svm_get_labels', '_libsvm_cross_validation', '_free_problem', '_serialize_model', '_deserialize_model']"

all: wasm asm

svm.o: libsvm/svm.cpp libsvm/svm.h
	$(CXX) $(CFLAGS) -c libsvm/svm.cpp -o svm.o

wasm: js-interfaces.c svm.o libsvm/svm.h
	mkdir -p $(BUILD_DIR)/wasm; $(CC) $(CFLAGS) js-interfaces.c svm.o -o $(BUILD_DIR)/wasm/libsvm.js -s DISABLE_EXCEPTION_CATCHING=0 -s NODEJS_CATCH_EXIT=0 -s "EXPORT_NAME=\"SVM\"" -s MODULARIZE=1 -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 -s EXPORTED_FUNCTIONS=$(EXPORTED_FUNCTIONS)  -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap", "Pointer_stringify"]'

asm: js-interfaces.c svm.o libsvm/svm.h
	mkdir -p $(BUILD_DIR)/asm; $(CC) $(CFLAGS) js-interfaces.c svm.o -o $(BUILD_DIR)/asm/libsvm.js -s NODEJS_CATCH_EXIT=0 -s "EXPORT_NAME=\"SVM\"" -s MODULARIZE=1 -s ALLOW_MEMORY_GROWTH=1 -s EXPORTED_FUNCTIONS=$(EXPORTED_FUNCTIONS)   -s EXTRA_EXPORTED_RUNTIME_METHODS='["cwrap", "Pointer_stringify"]'

clean:
	rm -f *~ js-interfaces.o ./svm.o
