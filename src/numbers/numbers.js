const { isNegative, isPositive, abs, invertByAdd } = require('./auxiliaryFunc');


const add = (a, b) => a + b;

const subt = (a, b) => add(a, invertByAdd(b));


module.exports = {
    add,
    subt
}