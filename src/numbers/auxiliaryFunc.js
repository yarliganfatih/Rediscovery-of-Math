const isPositive = (a) => a>0;

const isNegative = (a) => a<0;

const invertByAdd = (a) => -a;

const invertByMult = (a) => { // 1/a
    if(!(a>=-1 && a<=1)){
        return `1 / ${a}`; // decimal
    }
    let denom = 1;
    while(remain(a, 1) || remain(denom, a)){
        denom = mult(denom, 10);
        a = mult(a, 10);
    }
    return div(denom, a);
}
// TODO turn(0.10) does not work

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
    invertByMult,
    abs,
    getCoefficient,
    multCoefficients
}