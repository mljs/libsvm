
const mapOptionToCommand = {
    quiet: 'q',
    type: 's',
    kernel: 't',
    degree: 'd',
    gamma: 'g',
    coef0: 'r',
    cost: 'c',
    nu: 'n',
    epsilon: 'p',
    cacheSize: 'm',
    tolerance: 'e',
    shrinking: 'h',
    probabilityEstimates: 'b',
    weight: 'w'
};

const mapCommandToOptions = {};

for(let key in mapOptionToCommand) {
    mapCommandToOptions[mapOptionToCommand[key]] = key;
}

module.exports = {
    getCommand: function getCommand(options) {
        var str = '';
        var keys = Object.keys(options);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (options[key] == null) continue;
            if (mapOptionToCommand[key] == null) throw new Error('Bad option');
            if (str) str += ' ';
            switch (key) {
                case 'probabilityEstimates':
                case 'shrinking':
                    str += `-${mapOptionToCommand[key]} ${options[key] ? 1 : 0}`;
                    break;
                case 'quiet': {
                    if (options[key]) {
                        str += `-${mapOptionToCommand[key]} 1`;
                    }
                    break;
                }
                case 'weight': {
                    const weightKeys = Object.keys(options.weight);
                    for (let j = 0; j < weightKeys.length; j++) {
                        if (j !== 0) str += ' ';
                        str += `-w${weightKeys[j]} ${options.weight[weightKeys[j]]}`;
                    }
                    break;
                }
                default: {
                    str += `-${mapOptionToCommand[key]} ${options[key]}`;
                    break;
                }
            }
        }

        return str;
    },

    getOptions(command) {
        const options = {};
        command = command.split(' ').map(str => str.trim()).map(str => str.replace(/^-/, ''));
        let i = 0;
        while(i<command.length) {
            let val = parseFloat(command[++i]);
            if(Number.isNaN(val)) val = command[i];
            options[mapCommandToOptions[command[i-1]]] = val;
            ++i;
        }
        console.log(options);
        return options;
    }
};
