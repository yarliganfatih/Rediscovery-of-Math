const { isPositive, isNegative, invertByAdd, invertByMult, abs, getCoefficient, multCoefficients } = require('../../src/numbers/auxiliaryFunc');


describe('isPositive_function', () => {
    // Tests that passing a positive integer returns true
    it('test_positive_integer_returns_true', () => {
        expect(isPositive(5)).toBe(true);
    });

    // Tests that passing zero returns false
    it('test_zero_returns_false', () => {
        expect(isPositive(0)).toBe(false);
    });
});


describe('isNegative_function', () => {
    // Tests that the function returns true for a negative number
    it('test_negative_number', () => {
        expect(isNegative(-5)).toBe(true);
    });

    // Tests that the function returns false for zero
    it('test_zero', () => {
        expect(isNegative(0)).toBe(false);
    });

    // Tests that the function returns false for a positive number
    it('test_positive_number', () => {
        expect(isNegative(5)).toBe(false);
    });
});


describe('invertByAdd_function', () => {
    // Tests that the function returns the correct output for a positive integer input
    it('test_positive_integer', () => {
        expect(invertByAdd(5)).toBe(-5);
    });

    // Tests that the function returns the correct output for a negative integer input
    it('test_negative_integer', () => {
        expect(invertByAdd(-5)).toBe(5);
    });

    // Tests that the function returns the correct output for a zero input
    it('test_zero', () => {
        expect(invertByAdd(0)).toBe(0);
    });
});


describe('invertByMult_function', () => {
    // Tests that the function returns the correct inverse of a positive integer
    it('test_positive_integer', () => {
        expect(invertByMult(5)).toBe(0.2);
    });

    // Tests that the function returns the correct inverse of a positive float
    it('test_positive_float', () => {
        expect(invertByMult(2.5)).toBe(0.4);
    });
});


describe('abs_function', () => {
    // Tests that the function returns the input when given a positive number
    it('test_positive_number', () => {
        expect(abs(5)).toBe(5);
    });

    // Tests that the function returns the input when given zero
    it('test_zero', () => {
        expect(abs(0)).toBe(0);
    });

    // Tests that the function returns the absolute value of the input when given a negative number
    it('test_negative_number', () => {
        expect(abs(-5)).toBe(5);
    });

    // Tests that the function returns the absolute value of the smallest negative number
    it('test_smallest_negative_number', () => {
        expect(abs(Number.MIN_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER + 1);
    });
});


describe('getCoefficient_function', () => {
    // Tests that a positive number returns 1
    it('test_positive_number', () => {
        expect(getCoefficient(5)).toBe(1);
    });

    // Tests that a negative number returns -1
    it('test_negative_number', () => {
        expect(getCoefficient(-5)).toBe(-1);
    });

    // Tests that 0 returns 0
    it('test_zero', () => {
        expect(getCoefficient(0)).toBe(0);
    });
});


describe('multCoefficients_function', () => {
    // Tests that the function returns 1 when both inputs are positive integers
    it('test_positive_integers', () => {
        expect(multCoefficients(2, 3)).toBe(1);
    });

    // Tests that the function returns 1 when both inputs are negative integers
    it('test_negative_integers', () => {
        expect(multCoefficients(-2, -3)).toBe(1);
    });
});
