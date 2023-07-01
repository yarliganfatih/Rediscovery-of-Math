const isPositive = (a) => a>0;

const isNegative = (a) => a<0;

const invertByAdd = (a) => -a;

const abs = (a) => isNegative(a) ? -a : a;

const getCoefficient = (a) => {
    if(a>0) return 1;
    if(a<0) return -1;
    return 0;
}

const multCoefficients = (a, b) => {
    if(a>0 && b>0) return 1;
    if(a<0 && b>0) return -1;
    if(a>0 && b<0) return -1;
    if(a<0 && b<0) return 1;
    return 0;
}


module.exports = {
    isPositive,
    isNegative,
    invertByAdd,
    abs,
    getCoefficient,
    multCoefficients
}