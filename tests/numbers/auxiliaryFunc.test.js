const { isPositive, isNegative, invertByAdd, abs } = require('../../src/numbers/auxiliaryFunc');


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