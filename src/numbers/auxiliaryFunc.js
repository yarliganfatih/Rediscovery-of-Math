const isPositive = (a) => a>0;

const isNegative = (a) => a<0;

const invertByAdd = (a) => -a;

const abs = (a) => isNegative(a) ? -a : a;


module.exports = {
    isPositive,
    isNegative,
    invertByAdd,
    abs
}