const { sqrt, log } = require('../../src/primeDivisors/primeDivisors');


describe('sqrt_function', () => {
    // Tests that the function returns the correct square root of a positive number with default value of b
    it('test_positive_number_default_b', () => {
        expect(sqrt(8)).toBe("2√2");
        expect(sqrt(4)).toBe("2");
        expect(sqrt(2)).toBe("√2");
        expect(sqrt(1)).toBe("1");
    });

    // Tests that the function returns the correct square root of a negative number with default value of b
    it('test_negative_number_default_b', () => {
        expect(sqrt(-1)).toBe("i");
        expect(sqrt(-16)).toBe("4.i");
    });

    // Tests that the function returns the correct square root of a positive number with a positive integer value of b
    it('test_positive_number_positive_b', () => {
        expect(sqrt(4, 3)).toBe('1.^3√4');
        expect(sqrt(8, 3)).toBe("2");
        expect(sqrt(48, 3)).toBe("2.^3√6");
    });

    // Tests that the function returns the correct square root of a negative number with a positive integer value of b
    it('test_negative_number_positive_b', () => {
        expect(sqrt(-4, 3)).toBe('-1.^3√4');
        expect(sqrt(-27, 3)).toBe("-3");
        expect(sqrt(-16, 4)).toBeUndefined();
    });

    // Tests that the function returns the correct square root of a positive number with a negative integer value of b
    it('test_positive_number_negative_b', () => {
        expect(sqrt(1, -1)).toBe("1");
        expect(sqrt(5, -1)).toBe("1 / 5");
        expect(sqrt(12, -2)).toBe("1 / 2√3");
    });

    // Tests that the function returns the correct square root of a negative number with a negative integer value of b
    it('test_negative_number_negative_b', () => {
        expect(sqrt(-9, -2)).toBe("1 / 3.i");
        expect(sqrt(-27, -3)).toBe("-1 / 3");
        expect(sqrt(-16, -4)).toBeUndefined();
        expect(sqrt(-1, -1)).toBe("-1");
    });

    // Tests that the function returns the correct square root of exceptional cases
    it('test_exceptional_cases', () => {
        expect(sqrt(0)).toBe("0");
        expect(sqrt(1, 0)).toBeUndefined();
        expect(sqrt(0, 0)).toBeUndefined();
    });
});


describe('log_function', () => {
    // Tests that the function works correctly with positive values
    it('test_valid_values', () => {
        expect(log(100)).toBe('2');
        expect(log(8, 2)).toBe('3');
        expect(log(5, 5)).toBe("1");
        expect(log(81, 4)).toBe("2.log(3, 2)");
        expect(log(16, 25)).toBe("2.log(2, 5)");
    });

    // Tests that the function works correctly with invalid values
    test("test_invalid_cases", () => {
        expect(log(0, 2)).toBeUndefined();
        expect(log(10, 0)).toBeUndefined();
        expect(log(10, -2)).toBeUndefined();
        expect(log(-5, 2)).toBeUndefined();
        expect(log(10, 1)).toBeUndefined();
    });

    // Tests that the function works correctly with cases that defy definition
    test("test_edge_cases", () => {
        expect(log(0, 0)).toBeUndefined();
        expect(log(0, 1)).toBeUndefined();
        expect(log(1, 1)).toBeUndefined();
        expect(log(-1, -1)).toBeUndefined();
    });

    // Tests that the function returns the zero when a = 1
    test("test_zero_power", () => {
        expect(log(1, 2)).toBe("0");
        expect(log(1, 10)).toBe("0");
    });
});

