
module.exports = function (libsvm) {
    const util = require('./util');

    /* eslint-disable camelcase */
    const predict_one = libsvm.cwrap('libsvm_predict_one', 'number', ['number', 'array', 'number']);
    const add_instance = libsvm.cwrap('add_instance', null, ['number', 'array', 'number', 'number', 'number']);
    const create_svm_nodes = libsvm.cwrap('create_svm_nodes', 'number', ['number', 'number']);
    const train_problem = libsvm.cwrap('libsvm_train_problem', 'number', ['number', 'string']);
    const svm_get_nr_sv = libsvm.cwrap('svm_get_nr_sv', 'number', ['number']);
    const svm_free_model = libsvm.cwrap('svm_free_model_content', null, ['number']);
    const svm_get_nr_class = libsvm.cwrap('svm_get_nr_class', 'number', ['number']);
    const svm_get_sv_indices = libsvm.cwrap('svm_get_sv_indices', null, ['number', 'number']);
    const svm_get_labels = libsvm.cwrap('svm_get_labels', null, ['number', 'number']);
    /* eslint-enable camelcase */

    const SVM_TYPES = {
        C_SVC: '0',         // C support vector classification
        NU_SVC: '1',        // NU support vector classification
        ONE_CLASS: '2',     // ONE CLASS classification
        EPSILON_SVR: '3',   // Epsilon support vector regression
        NU_SVR: '4'         // Nu suuport vector regression
    };

    const KERNEL_TYPES = {
        LINEAR: '0',
        POLYNOMIAL: '1',
        RBF: '2',         // Radial basis function
        SIGMOID: '3'
    };

    class SVM {
        /**
         * @constructor
         * @param {object} options
         * @param {number} [options.type=SVM_TYPES.C_SVC] - Type of SVM to perform,
         * @param {number} [options.kernel=KERNEL_TYPES.RBF] - Kernel function,
         * @param {number} [options.degree=3] - Degree of polynomial, for polynomial kernel
         * @param {number} [options.gamma] -  Gamma parameter of the RBF, Polynomial and Sigmoid kernels. Default value is 1/num_features
         * @param {number} [options.coef0=0] - coef0 parameter for Polynomial and Sigmoid kernels
         * @param {number} [options.cost=1] - Cost parameter, for C SVC, Epsilon SVR and NU SVR
         * @param {number} [options.nu=0.5] - For NU SVC and NU SVR
         * @param {number} [options.epsilon=0.1] - For epsilon SVR
         * @param {number} [options.cacheSize=100] - Cache size in MB
         * @param {number} [options.tolerance=0.001] - Tolerance
         * @param {boolean} [options.shrinking=true] - Use shrinking euristics (faster),
         * @param {boolean} [options.probabilityEstimates=false] - weather to train SVC/SVR model for probability estimates,
         * @param {number} [options.weight] - Set weight for each possible class
         * @param {boolean} [options.quiet=true] - Print info during training if false
         */
        constructor(options) {
            this.options = Object.assign({}, options);
            this.model = null;
        }

        train(samples, labels) {
            this.free();
            const nbSamples = samples.length;
            const nbFeatures = samples[0].length;
            const problem = create_svm_nodes(nbSamples, nbFeatures);
            for (let i = 0; i < nbSamples; i++) {
                add_instance(problem, new Uint8Array(new Float64Array(samples[i]).buffer), nbFeatures, labels[i], i);
            }
            const command = util.getCommand(this.options);
            this.model = train_problem(problem, command); // this also frees problem
        }

        free() {
            if (this.model !== null) {
                svm_free_model(this.model);
                this.model = null;
            }
        }

        getCommand() {
            return util.getCommand(this.options);
        }

        predictOne(sample) {
            if (this.model === null) {
                throw new Error('Cannot predict, you must train first');
            }
            return predict_one(this.model, new Uint8Array(new Float64Array(sample).buffer), sample.length);
        }

        predict(samples) {
            let arr = [];
            for (let i = 0; i < samples.length; i++) {
                arr.push(this.predictOne(samples[i]));
            }
            return arr;
        }

        getLabels() {
            const nbLabels = svm_get_nr_class(this.model);
            return getIntArrayFromModel(svm_get_labels, this.model, nbLabels);
        }

        getSVIndices() {
            const nSV = svm_get_nr_sv(this.model);
            return getIntArrayFromModel(svm_get_sv_indices, this.model, nSV)
                .map(i => i - 1);
        }
    }

    SVM.SVM_TYPES = SVM_TYPES;
    SVM.KERNEL_TYPES = KERNEL_TYPES;

    function getIntArrayFromModel(fn, model, size) {
        const offset = libsvm._malloc(size * 4);
        fn(model, offset);
        const data = libsvm.HEAP32.subarray(offset / 4, offset / 4 + size);
        const arr = Array.from(data);
        libsvm._free(offset);
        return arr;
    }

    return SVM;
};
