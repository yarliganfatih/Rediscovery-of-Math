const { isNegative, isPositive, abs, invertByAdd, invertByMult, getCoefficient, multCoefficients } = require('./auxiliaryFunc');


const add = (a, b) => a + b;

const subt = (a, b) => add(a, invertByAdd(b));

const mult = (a, b) => { // a*b
    let
        ka = getCoefficient(a),
        kb = getCoefficient(b),
        _k = multCoefficients(ka, kb),
        _b = abs(b),
        _a = abs(a);
    if (_b == 0 || _a == 0) return 0;
    if (_b == 1) return _k * _a;
    return add(_k * _a, mult(a, subt(b, kb)));
}

const divi = (a, b) => { // a/b
    if (b == 0) return undefined;
    let
        ka = getCoefficient(a),
        kb = getCoefficient(b),
        _k = multCoefficients(ka, kb),
        _b = abs(b),
        _a = abs(a);
    if (_b > _a) return 0; // remaining _a // return can be _a/_b
    return add(_k * 1, divi(_k * subt(_a, _b), _b));
}
const remainder = (a, b) => { // a%b
    if (b == 0) return undefined;
    let
        ka = getCoefficient(a),
        kb = getCoefficient(b),
        _k = multCoefficients(ka, kb),
        _b = abs(b),
        _a = abs(a);
    if (_b > _a) return _a;
    return remainder(_k * subt(_a, _b), _b);
}

const sum = (start, finish, step, func = (n) => n) => {
    if (start > finish) return 0;
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