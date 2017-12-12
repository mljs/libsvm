'use strict';
const util = require('../src/util');
describe('util', function () {
    it('should return proper command string', function () {
        util.getCommand({
            weight: {
                1: 3,
                2: 5
            }
        }).should.equal('-w1 3 -w2 5');
        util.getCommand({quiet: true}).should.equal('-q 1');
        util.getCommand({quiet: false}).should.equal('');
        util.getCommand({probabilityEstimates: true}).should.equal('-b 1');
        util.getCommand({probabilityEstimates: false}).should.equal('-b 0');
        util.getCommand({type: 0}).should.equal('-s 0');
        util.getCommand({kernel: 2}).should.equal('-t 2');
        util.getCommand({degree: 2}).should.equal('-d 2');
        util.getCommand({cost: 0.01}).should.equal('-c 0.01');
        util.getCommand({coef0: 0}).should.equal('-r 0');
        util.getCommand({epsilon: 1}).should.equal('-p 1');
        util.getCommand({cacheSize: 300}).should.equal('-m 300');
        util.getCommand({shrinking: true}).should.equal('-h 1');
        util.getCommand({shrinking: false}).should.equal('-h 0');
        util.getCommand({nu: 0.5}).should.equal('-n 0.5');
        util.getCommand({tolerance: 0.001}).should.equal('-e 0.001');
        util.getCommand({
            degree: 2,
            shrinking: true
        }).should.equal('-d 2 -h 1');

    });

    it('should throw if bad option', function () {
        (function () {
            util.getCommand({bad: true});
        }).should.throw(/Bad option/);
    });
});
