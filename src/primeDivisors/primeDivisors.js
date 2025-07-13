const { isNegative, isPositive, abs, getCoefficient, invertByAdd, invertByMult } = require('../numbers/auxiliaryFunc'); // -1*a
const { add, subt, mult, divi, remainder, pow } = require('../numbers/numbers');
const { convertPrime } = require('./auxiliaryFunc');

function sqrt(a, b = 2) {
    if(b == 0) return undefined;
    if(a == 0) return isNegative(b) ? undefined : `0`;
    if(isNegative(a)) {
      if(abs(b) != 2 && b % 2 == 0) return undefined;
      if(abs(b) == 2) {
        if(a == -1) return isPositive(b) ? `i` : `-i`;
        return `${sqrt(invertByAdd(a), b)}.i`;
      }
      return `-${sqrt(invertByAdd(a), b)}`;
    }
    if(isNegative(b)) {
      if(abs(a) == 1) return `${a}`;
      let denom = sqrt(a, invertByAdd(b));
      return denom == undefined ? undefined : `1 / ${denom}`;
    }
    let output = ``;
    let outSqrt = 1, inSqrt = 1;
    let primed = convertPrime(a);
    primed.forEach(([pr, po]) => {
        let divided = divi(po, b);
        outSqrt = mult(outSqrt, pow(pr, divided));
        let remaindered = remainder(po, b);
        inSqrt = mult(inSqrt, pow(pr, remaindered));
    });
    if(outSqrt != 1) output += `${outSqrt}`;
    else if(b != 2) output += `${outSqrt}`;
    if(inSqrt != 1) {
      if(b != 2) output += `.^${b}`;
      output += `√${inSqrt}`;
    }
    return output || `1`;
  }

const i = [[-1, 0.5]]; // sqrt(-1) // virtual number

const log = (a, b=10) => {
    if(a==0) return undefined;
    if(b==1) return undefined;
    if(!isPositive(a)) return undefined;
    if(!isPositive(b)) return undefined;
    if(a==1) return `0`;
    
    let primedA = convertPrime(a);
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
    if(baseA!=baseB) output = `.log(${baseA}, ${baseB})`;
    return `${divi(powA, powB)}${output}`;
}


module.exports = {
    sqrt,
    i,
    log
}