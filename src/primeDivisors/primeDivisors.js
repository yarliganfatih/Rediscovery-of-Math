const { isNegative, isPositive, abs, getCoefficient, invertByMult } = require('../numbers/auxiliaryFunc'); // -1*a
const { add, subt, mult, divi, remainder, pow } = require('../numbers/numbers');
const { convertPrime } = require('./auxiliaryFunc');

const sqrt = (a, b=2) => {
    if(b==0) return 1;
    if(isNegative(b)) return `1 / ${sqrt(a, abs(b))}`;
    if(a==0) return 0;
    if(isNegative(a)) return `${sqrt(abs(a), b)} * i`; // virtual numbers
    let primed = convertPrime(a);
    let outSqrt=1, inSqrt=1;
    primed.forEach(([pr, po]) => {
        let divided = divi(po, b);
        outSqrt = mult(outSqrt, pow(pr, divided));
        let remaindered = remainder(po, b);
        inSqrt = mult(inSqrt, pow(pr, remaindered));
    });
    let output = ``;
    if(inSqrt!=1) output = `√${inSqrt}`;
    return `${outSqrt}^${b}${output}`;
}

const i = [[-1, 0.5]]; // sqrt(-1) // virtual number


module.exports = {
    sqrt,
    i
}