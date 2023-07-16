const { sum, mod, median, arithmeticMean, geometicMean, harmonicMean } = require('../../src/series/series');


describe('sum_function', () => {
    // Tests that the function returns 0 when an empty array is passed
    it('test_empty_array', () => {
        expect(sum([])).toBe(0);
    });

    // Tests that the function returns the sum of all positive numbers in the array
    it('test_positive_numbers', () => {
        expect(sum([1, 2, 3])).toBe(6);
    });

    // Tests that the function returns the sum of all negative numbers in the array
    it('test_negative_numbers', () => {
        expect(sum([-1, -2, -3])).toBe(-6);
    });
});


describe('mod_function', () => {
    // Tests that the function returns the correct mod for an array of positive integers
    it('test_positive_integers', () => {
        expect(mod([1, 2, 3, 4, 5])).toEqual([5]);
        expect(mod([1, 2, 3, 4, 5, 5])).toEqual([5]);
        expect(mod([1, 2, 3, 4, 5, 5, 5])).toEqual([5]);
    });

    // Tests that the function returns the correct mod for an array of negative integers
    it('test_negative_integers', () => {
        expect(mod([-1, -2, -3, -4, -5])).toEqual([-1]);
        expect(mod([-1, -2, -3, -4, -5, -5])).toEqual([-1]);
        expect(mod([-1, -2, -3, -4, -5, -5, -5])).toEqual([-1]);
    });
});


describe('median_function', () => {
    // Tests that median is correctly calculated for an array of odd length
    it('test_median_odd_length_array', () => {
        expect(median([1, 2, 3, 4, 5])).toBe(3);
    });

    // Tests that median is correctly calculated for an array of even length
    it('test_median_even_length_array', () => {
        expect(median([1, 2, 3, 4])).toEqual([2, 3]);
    });

    // Tests that an empty array returns undefined
    it('test_median_empty_array', () => {
        expect(median([])).toBeUndefined();
    });
});


describe('arithmeticMean_function', () => {
    // Tests that arithmeticMean returns the correct mean for an array of positive integers
    it('test_positive_integers', () => {
        expect(arithmeticMean([1, 2, 3, 4, 5])).toBe(3);
    });

    // Tests that arithmeticMean returns the correct mean for an array of negative integers
    it('test_negative_integers', () => {
        expect(arithmeticMean([-1, -2, -3, -4, -5])).toBe(-3);
    });

    // Tests that arithmeticMean returns the correct mean for an array of mixed positive and negative integers
    it('test_mixed_integers', () => {
        expect(arithmeticMean([-1, 2, -3, 4, -5])).toBe(-0.6);
    });

    // Tests that arithmeticMean returns the correct mean for an array of decimal numbers
    it('test_decimal_numbers', () => {
        expect(arithmeticMean([1.5, 2.5, 3.5])).toBe(2.5);
    });
});


describe('geometicMean_function', () => {
    // Tests that the function returns the correct geometric mean for an array of positive numbers
    it('test_positive_numbers', () => {
        expect(geometicMean([2, 3, 4])).toBeCloseTo(2.8844991406148166);
    });

    // Tests that the function returns the correct geometric mean for an array of decimal numbers
    it('test_decimal_numbers', () => {
        expect(geometicMean([0.5, 1.5, 2.5])).toBeCloseTo(1.5);
    });

    // Tests that the function returns the correct geometric mean for an array of integers
    it('test_integers', () => {
        expect(geometicMean([2, 3, 4])).toBeCloseTo(2.8844991406148166);
    });
});


describe('harmonicMean_function', () => {
    // Tests that the harmonic mean is calculated correctly for an array of positive numbers
    it('test_positive_numbers', () => {
        expect(harmonicMean([1, 2, 3, 4, 5])).toBeCloseTo(2.18978);
    });

    // Tests that the harmonic mean is not calculated for an array of positive and negative numbers
    it('test_positive_and_negative_numbers', () => {
        expect(harmonicMean([1, -2, 3, -4, 5])).toBeUndefined();
    });

    // Tests that the harmonic mean is calculated correctly for an array of only one positive number
    it('test_one_positive_number', () => {
        expect(harmonicMean([5])).toBe(5);
    });

    // Tests that the harmonic mean is not calculated for an array of only one negative number
    it('test_one_negative_number', () => {
        expect(harmonicMean([-5])).toBeUndefined();
    });

    // Tests that the harmonic mean is not calculated for an empty array
    it('test_empty_array', () => {
        expect(harmonicMean([])).toBeUndefined();
    });

    // Tests that the harmonic mean is not calculated for an array of only zero
    it('test_array_of_zeros', () => {
        expect(harmonicMean([0, 0, 0, 0])).toBeUndefined();
    });
});
