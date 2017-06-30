Module = require('./libsvm-js-interfaces');

create_svm_nodes = Module.cwrap("create_svm_nodes", "number", ["number"]);
add_instance = Module.cwrap("add_instance", "", ["number", "number", "number", "number", "number"]);

libsvm_train_for_toy = Module.cwrap("libsvm_train_for_toy", "number", ["number", "string"]);
libsvm_predict_for_toy = Module.cwrap("libsvm_predict_for_toy", "number", ["number", "number", "number"]);

get_svr_epsilon = Module.cwrap("get_svr_epsilon", "number", ["number"]);

svm_free_model_content = Module.cwrap("svm_free_model_content", "", ["number"]);
svm_get_svm_type = Module.cwrap("svm_get_svm_type", "number", ["number"]);
serialize_model = Module.cwrap("serialize_model", "string", ["number"]);

var train_points = [
    [
        1,
        0.27666666666666667,
        0.6866666666666666
    ],
    [
        2,
        0.6066666666666667,
        0.28
    ]
];


function generateTrainData()
{
    var prob = create_svm_nodes(train_points.length);
    for(i = 0; i < train_points.length; ++i)
    {
        var point = train_points[i];
        var index = point[0];
        var x = point[1];
        var y = point[2];
        add_instance(prob, i, index, x, y);
    }

    return prob;
}

function testPoints(model, test)
{
    for(var j =0; j<test.length; j++) {
        var answer = libsvm_predict_for_toy(test[j][0], test[j][1], model);
        console.log(test[j], answer);
    }

    console.log(serialize_model(model));
}

function testModel()
{
    var param = '-s 0 -c 1 -n 0.5 -g 1 -d 3 -t 0'; // fill
    var prob = generateTrainData();
    var model = libsvm_train_for_toy(prob, param); // free problem
    testPoints(model, [[0.01, 0.99], [0.9, 0.1]]);
    svm_free_model_content(model);
    Module._free(model);
}

testModel();