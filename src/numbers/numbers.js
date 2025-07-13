const { isNegative, isPositive, abs, invertByAdd, invertByMult, getCoefficient, multCoefficients } = require('./auxiliaryFunc');


const add = (a, b) => a + b;

const subt = (a, b) => add(a, invertByAdd(b));

const mult = (a, b) => {
    let res = 0;
    let 
        ka = getCoefficient(a),
        kb = getCoefficient(b),
        _a = abs(a);
    let i = b;
    while(i!=0){
        res = add(res, _a);
        i = subt(i, kb); // will approach the 0 axis
    }
    if(ka<0) res = invertByAdd(res);
    if(kb<0) res = invertByAdd(res);
    return res;
}

const divi = (a, b) => {
    if(b==0) return undefined;
    let res = 0;
    let 
        ka = getCoefficient(a),
        kb = getCoefficient(b),
        _b = abs(b),
        _a = abs(a);
    let rem = _a;
    while(rem >= _b){
        rem = subt(rem, _b);
        res = add(res, 1);
    }
    if(ka<0) res = invertByAdd(res);
    if(kb<0) res = invertByAdd(res);
    return res;
}
const remainder = (a, b) => {
    if(b==0) return undefined;
    let 
        ka = getCoefficient(a),
        _b = abs(b),
        _a = abs(a);
    let rem = _a;
    while(rem >= _b){
        rem = subt(rem, _b);
    }
    if(ka<0) rem = invertByAdd(rem);
    return rem;
}

const sum = (start, finish, step, func = (n) => n) => {
    if(step==0) return undefined;
    if(start>=finish) return start;
    return add(func(start), sum(add(start, step), finish, step, func));
}

const fact = (a) => {
    if (isNegative(a)) return undefined; // I think it can be with ka
    if (remainder(a, 1) != 0) return undefined;
    if (a == 0) return 1;
    return mult(a, fact(subt(a, 1)));
}

const pow = (a, b) => {
    let
        kb = getCoefficient(b),
        _b = abs(b),
        _a = abs(a);
    if (isNegative(b)) return `1 / ${pow(a, _b)}`; // decimal numbers
    if (b == 0 && a == 0) return undefined;
    if (b == 0) return 1;
    if (_b > 0 && _b < 1) return `^${invertByMult(b)}√${_a}`;
    if (_b == 1) return a;
    return mult(a, pow(a, subt(b, kb)));
}


module.exports = {
    add,
    subt,
    mult,
    divi,
    remainder,
    sum,
    fact,
    pow
}