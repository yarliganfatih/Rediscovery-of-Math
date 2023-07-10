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

const log = (a, b=10) => {
    if(a==0) return 1;
    if(b==1) return undefined;
    if(!isPositive(a)) return undefined;
    if(!isPositive(b)) return undefined;
    
    let primedA = convertPrime(a);
    console.log(primedA);
    let baseA = 1; 
    let powA = primedA[0][1]; // is there any difference in pows
    primedA.forEach(([prA, poA]) => {
        baseA = mult(baseA, prA);
        if(powA!=poA) powA = 1; // detected difference
    });
    if(powA==1) baseA = a;

    let primedB = convertPrime(b);
    let baseB = 1; 
    let powB = primedB[0][1]; // is there any difference in pows
    primedB.forEach(([prB, poB]) => {
        baseB = mult(baseB, prB);
        if(powB!=poB) powB = 1; // detected difference
    });
    if(powB==1) baseB = b;

    let output = ``;
    if(baseA!=baseB) output = `log(${baseA}, ${baseB})`;
    return `${divi(powA, powB)}${output}`;
}


module.exports = {
    sqrt,
    i,
    log
}