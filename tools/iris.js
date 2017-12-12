'use strict';
const fs = require('fs');
const path = require('path');
const data = require('ml-dataset-iris').getDataset();
const distinctClasses = require('ml-dataset-iris').getDistinctClasses();
data.forEach(d => {
    d[4] = distinctClasses.indexOf(d[4]);
});
const str = data.map(d => d.join(' ')).join('\n');
fs.writeFileSync(path.resolve(__dirname, '../benchmark/data.txt'), str);
