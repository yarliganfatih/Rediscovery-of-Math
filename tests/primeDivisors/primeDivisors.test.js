const { sqrt } = require('../../src/primeDivisors/primeDivisors');


describe('sqrt_function', () => {
    // Tests that the function returns the correct square root of a positive number with default value of b
    it('test_positive_number_default_b', () => {
        expect(sqrt(4)).toBe('2^2√1');
    });

    // Tests that the function returns the correct square root of a positive number with a positive integer value of b
    it('test_positive_number_positive_integer_b', () => {
        expect(sqrt(4, 3)).toBe('1^3√64');
    });

    // Tests that the function returns the correct square root of a positive number with a positive non-integer value of b
    it('test_positive_number_positive_non_integer_b', () => {
        expect(sqrt(4, 1.5)).toBe('1.681792830507429^1.5√1.681792830507429');
    });

    // Tests that the function returns the correct square root of a negative number with a positive integer value of b
    it('test_negative_number_positive_integer_b', () => {
        expect(sqrt(-4, 3)).toBe('1^3√64 * i');
    });

    // Tests that the function returns the correct square root of a negative number with a positive non-integer value of b
    it('test_negative_number_positive_non_integer_b', () => {
        expect(sqrt(-4, 1.5)).toBe('1.681792830507429^1.5√1.681792830507429 * i');
    });
});