const { getMax, getMin } = require('../../src/series/auxiliaryFunc');


describe('getMax_function', () => {
    // Tests that the function returns the maximum value in an array of positive integers
    it('test_positive_integers', () => {
        expect(getMax([1, 2, 3, 4])).toBe(4);
        expect(getMax([10, 20, 30, 40])).toBe(40);
        expect(getMax([5, 10, 15, 20])).toBe(20);
    });

    // Tests that the function returns the maximum value in an array of negative integers
    it('test_negative_integers', () => {
        expect(getMax([-1, -2, -3, -4])).toBe(-1);
        expect(getMax([-10, -20, -30, -40])).toBe(-10);
        expect(getMax([-5, -10, -15, -20])).toBe(-5);
    });

    // Tests that the function returns the maximum value in an array of mixed positive and negative integers
    it('test_mixed_integers', () => {
        expect(getMax([-1, 2, -3, 4])).toBe(4);
        expect(getMax([10, -20, 30, -40])).toBe(30);
        expect(getMax([-5, 10, -15, 20])).toBe(20);
    });

    // Tests that the function returns the maximum value in an array of decimal numbers
    it('test_decimal_numbers', () => {
        expect(getMax([1.1, 2.2, 3.3, 4.4])).toBe(4.4);
        expect(getMax([10.5, 20.5, 30.5, 40.5])).toBe(40.5);
        expect(getMax([5.1, 10.2, 15.3, 20.4])).toBe(20.4);
    });

    // Tests that the function returns 0 when given an empty array
    it('test_empty_array', () => {
        expect(getMax([])).toBe(0);
    });

    // Tests that the function returns the only value in an array of length 1
    it('test_array_length_1', () => {
        expect(getMax([5])).toBe(5);
    });
});


describe('getMin_function', () => {
    // Tests that the function returns the minimum value in an array of positive integers
    it('test_positive_integers', () => {
        expect(getMin([1, 2, 3, 4, 5])).toBe(1);
    });

    // Tests that the function returns the minimum value in an array of negative integers
    it('test_negative_integers', () => {
        expect(getMin([-5, -4, -3, -2, -1])).toBe(-5);
    });
});
