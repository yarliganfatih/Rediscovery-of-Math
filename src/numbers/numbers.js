const { isNegative, isPositive, abs, invertByAdd, getCoefficient, multCoefficients } = require('./auxiliaryFunc');


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


module.exports = {
    add,
    subt,
    mult,
    divi,
    remainder
}