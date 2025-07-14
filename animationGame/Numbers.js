class Numbers {
    constructor(numerator, denominator = 1, isVirtual = false, power = 1, rootPower = 1, formula = null) {
        this.numerator = numerator;
        this.denominator = denominator;
        this.isVirtual = isVirtual;
        this.power = power;
        this.rootPower = rootPower;
        this.formula = formula;
    }
    isInt() {
        if (denominator != 1) return false;
        if (isVirtual != false) return false;
        if (power != 1) return false;
        if (rootPower != 1) return false;
        if (formula) return false;
        return true;
    }
    toInt() {
        if (this.isInt) return numerator;
        return this.toDecimal();
    }
    toDecimal() {
        return this.numerator / this.denominator;
    }
    toString() {
        let str = ``;
        if (rootPower != 1) str = `^${rootPower!=2?rootPower:''}√(`;
        str += `${this.numerator}`;
        if (denominator != 1) str += `/${this.denominator}`;
        if (rootPower != 1) str += `)`;
        if (power != 1) str += `^${this.power}`;
        if (this.isVirtual) str += `i`;
        return str;
    }
}