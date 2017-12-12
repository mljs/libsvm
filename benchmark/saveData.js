'use strict';
const fs = require('fs');

// Save data and labels readable by benchmark
module.exports = function (data, labels, filepath) {
    let str = '';
    for (let i = 0; i < data.length; i++) {
        const line = data[i];
        for (let j = 0; j < line.length; j++) {
            str += line[j];
            if (j === line.length - 1) {
                str += ' ' + labels[i];
            } else {
                str += ' ';
            }
        }
        if (i !== data.length - 1) {
            str += '\r\n';
        }
    }

    fs.writeFileSync(filepath, str);
};

