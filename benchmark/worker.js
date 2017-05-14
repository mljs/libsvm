onmessage = function(event) {
    require(['./browser', `./${event.data.benchmark}-benchmark.js`], function(exec, benchmark) {
        exec.default(benchmark, event.data.method, event.data.time).then(function(result) {
            event.data.result = result;
            postMessage(event.data);
        });
    });
};