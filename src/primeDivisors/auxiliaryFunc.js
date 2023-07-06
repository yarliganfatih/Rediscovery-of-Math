const { isNegative, isPositive, abs } = require('../numbers/auxiliaryFunc');
const { add, subt, mult, divi, remainder, pow } = require('../numbers/numbers');
const { getMax } = require('../series/auxiliaryFunc');

const isPrime = (a) => {
    if(isNegative(a)) return 0;
    if(a==0) return 0;
    if(a==1) return 0;
    if(remainder(a, 1)!=0) return 0;
    for(let j=2; j<a/2; j++){
        if(remainder(a, j)==0) return 0;
    }
    return 1;
}

const convertPrime = (a) => {
    let primed = [];
    for(let j=2; j<a/2; j++){
        if(isPrime(a)) break;
        if(!isPrime(j)) continue;
        let _primed = [j, 0];
        while(remainder(a, j)==0){
            a = divi(a, j);
            _primed[1] += 1;
        }
        if(_primed[1]>0) primed.push(_primed);
    }
    if(a!=1) primed.push([a, 1]);
    return primed;
}

const mergePrime = (primed) => {
    let merged = 1;
    primed.forEach(([pr, po]) => {
        merged = mult(merged, pow(pr, po));
    });
    return merged;
}

const countPositiveDivisors = (a) => {
    // related to possibility
    if(isPrime(a)) return 2; // 1 and a
    let primedA = convertPrime(a);
    let count = 1;
    primedA.forEach(([prA, poA]) => {
        count = mult(count, add(poA, 1));
    });
    return count;
}

const greatestCommonDivisor = (a, b) => {
    let primedA = convertPrime(a);
    let primedB = convertPrime(b);
    let primedGCD = [];
    primedB.forEach((itemB) => {
        let foundIndex = primedA.findIndex(itemA => itemA[0] == itemB[0]);
        if(foundIndex!=-1) primedGCD.push(itemB); // common prime numbers
    });
    return mergePrime(primedGCD);
}

const leastCommonMultiple = (a, b) => {
    let primedA = convertPrime(a);
    let primedB = convertPrime(b);
    let primedLCM = primedA;
    primedB.forEach(([prB, poB]) => {
        let foundIndex = primedA.findIndex(item => item[0] == prB);
        if(foundIndex==-1){
            primedLCM.push([prB, poB]); // common prime numbers
            return;
        }
        primedLCM[foundIndex][1] = getMax([poB, primedLCM[foundIndex][1]]);
    });
    return mergePrime(primedLCM);
}


module.exports = {
    isPrime,
    convertPrime,
    mergePrime,
    countPositiveDivisors,
    greatestCommonDivisor,
    leastCommonMultiple
}