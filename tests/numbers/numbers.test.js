const { add, subt, mult, divi, remainder, sum, fact, pow } = require('../../src/numbers/numbers');


describe('add_function', () => {
    // Tests that adding two positive integers returns the correct sum
    it('test_add_positive_integers', () => {
        expect(add(2, 3)).toBe(5);
    });

    // Tests that adding two negative integers returns the correct sum
    it('test_add_negative_integers', () => {
        expect(add(-2, -3)).toBe(-5);
    });

    // Tests that adding a positive and a negative integer returns the correct sum
    it('test_add_positive_and_negative_integers', () => {
        expect(add(2, -3)).toBe(-1);
    });

    // Tests that adding zero to a positive integer returns the same integer
    it('test_add_zero_to_positive_integer', () => {
        expect(add(2, 0)).toBe(2);
    });

    // Tests that adding zero to a negative integer returns the same integer
    it('test_add_zero_to_negative_integer', () => {
        expect(add(-2, 0)).toBe(-2);
    });

    // Tests that adding two zeros returns zero
    it('test_add_two_zeros', () => {
        expect(add(0, 0)).toBe(0);
    });
});


describe('subt_function', () => {
    // Tests that subt subtracts two positive integers
    it('subt two positive integers', () => {
        expect(subt(5, 3)).toBe(2);
    });

    // Tests that subt subtracts a positive integer from zero
    it('subt a positive integer from zero', () => {
        expect(subt(0, 3)).toBe(-3);
    });

    // Tests that subt subtracts zero from a positive integer
    it('subt zero from a positive integer', () => {
        expect(subt(5, 0)).toBe(5);
    });

    // Tests that subt subtracts two negative integers
    it('subt two negative integers', () => {
        expect(subt(-5, -3)).toBe(-2);
    });

    // Tests that subt subtracts zero from zero
    it('subt zero from zero', () => {
        expect(subt(0, 0)).toBe(0);
    });

    // Tests that subt subtracts a positive integer from a negative integer
    it('subt a positive integer from a negative integer', () => {
        expect(subt(-5, 3)).toBe(-8);
    });
});


describe('mult_function', () => {
    // Tests that mult returns the correct result for two positive integers
    it('test_mult_positive_integers', () => {
        expect(mult(2, 3)).toBe(6);
        expect(mult(10, 5)).toBe(50);
        expect(mult(100, 100)).toBe(10000);
    });

    // Tests that mult returns the correct result for two negative integers
    it('test_mult_negative_integers', () => {
        expect(mult(-2, -3)).toBe(6);
        expect(mult(-10, -5)).toBe(50);
        expect(mult(-100, -100)).toBe(10000);
    });

    // Tests that mult returns the correct result for one positive and one negative integer
    it('test_mult_positive_and_negative_integers', () => {
        expect(mult(-2, 3)).toBe(-6);
        expect(mult(10, -5)).toBe(-50);
        expect(mult(-100, 100)).toBe(-10000);
    });

    // Tests that mult returns 0 when one of the integers is 0
    it('test_mult_zero_integer', () => {
        expect(mult(0, 3)).toBe(0);
        expect(mult(10, 0)).toBe(0);
        expect(mult(0, 0)).toBe(0);
    });

    // Tests that mult returns the correct result when one of the integers is the maximum integer value
    it('test_mult_maximum_integer_value', () => {
        expect(mult(Number.MAX_SAFE_INTEGER, 2)).toBe(Number.MAX_SAFE_INTEGER * 2);
        expect(mult(Number.MAX_SAFE_INTEGER, -2)).toBe(Number.MAX_SAFE_INTEGER * -2);
    });

    // Tests that mult returns NaN when one of the integers is NaN
    it('test_mult_NaN_integer', () => {
        expect(mult(NaN, 3)).toBeNaN();
        expect(mult(10, NaN)).toBeNaN();
        expect(mult(NaN, NaN)).toBeNaN();
    });
});


describe('divi_function', () => {
    // Tests that positive a and positive b returns a positive result
    it('test_positive_division', () => {
        expect(divi(10, 2)).toBe(5);
    });

    // Tests that negative a and negative b returns a positive result
    it('test_negative_division', () => {
        expect(divi(-10, -2)).toBe(5);
    });

    // Tests that division by zero returns undefined
    it('test_division_by_zero', () => {
        expect(divi(10, 0)).toBeUndefined();
    });

    // Tests that division by one returns a
    it('test_division_by_one', () => {
        expect(divi(10, 1)).toBe(10);
    });

    // Tests that negative a and positive b returns a negative result
    it('test_negative_and_positive_division', () => {
        expect(divi(-10, 2)).toBe(-5);
    });

    // Tests that large numbers can be divided
    it('test_large_numbers_division', () => {
        expect(divi(1000000, 1000)).toBe(1000);
    });
});


describe('remainder_function', () => {
    // Tests that remainder returns the correct result for a happy path input (a=10, b=3)
    it('test_remainder_happy_path_1', () => {
        expect(remainder(10, 3)).toBe(1);
    });

    // Tests that remainder returns the correct result for a happy path input (a=0, b=5)
    it('test_remainder_happy_path_2', () => {
        expect(remainder(0, 5)).toBe(0);
    });

    // Tests that remainder returns the correct result for a happy path input (a=15, b=15)
    it('test_remainder_happy_path_3', () => {
        expect(remainder(15, 15)).toBe(0);
    });

    // Tests that remainder returns undefined when b=0
    it('test_remainder_edge_case_1', () => {
        expect(remainder(10, 0)).toBeUndefined();
    });

    // Tests that remainder returns the correct result when a=10 and b=0
    it('test_remainder_edge_case_2', () => {
        expect(remainder(0, 5)).toBe(0);
    });

    // Tests that remainder returns the correct result when a=-10 and b=-5
    it('test_remainder_edge_case_3', () => {
        expect(remainder(-10, -5)).toBe(0);
    });
});


describe('sum_function', () => {
    // Tests that the function works correctly with start, finish and step as positive integers
    it('test_happy_path_positive_integers', () => {
        expect(sum(1, 5, 1)).toBe(15);
    });

    // Tests that the function works correctly with start, finish and step as negative integers
    it('test_happy_path_negative_integers', () => {
        expect(sum(-5, -1, 1)).toBe(-15);
    });

    // Tests that the function works correctly with start and finish as 0 and step as positive integer
    it('test_happy_path_zero_positive_step', () => {
        expect(sum(0, 5, 0)).toBe(0);
    });

    // Tests that the function works correctly with start and finish as 0 and step as negative integer
    it('test_happy_path_zero_negative_step', () => {
        expect(sum(0, -5, 0)).toBe(0);
    });

    // Tests that the function works correctly with start and finish as same positive integer and step as positive integer
    it('test_happy_path_same_positive_integers', () => {
        expect(sum(5, 5, 1)).toBe(5);
    });

    // Tests that the function works correctly with start and finish as same negative integer and step as negative integer
    it('test_happy_path_same_negative_integers', () => {
        expect(sum(-5, -5, -1)).toBe(-5);
    });
});


describe('fact_function', () => {
    // Tests that the function returns 1 when input is 0
    it('test_zero_input', () => {
        expect(fact(0)).toBe(1);
    });

    // Tests that the function returns the correct factorial value for a positive integer input
    it('test_positive_input', () => {
        expect(fact(5)).toBe(120);
    });

    // Tests that the function returns undefined when input is negative
    it('test_negative_input', () => {
        expect(fact(-5)).toBeUndefined();
    });

    // Tests that the function returns undefined when input is not an integer
    it('test_non_integer_input', () => {
        expect(fact(2.5)).toBeUndefined();
    });

    // Tests that the function returns undefined when input is not divisible by 1
    it('test_non_divisible_input', () => {
        expect(fact(3)).toBeUndefined();
    });

    // Tests that the function can handle large inputs (e.g. 100)
    it('test_large_input', () => {
        expect(fact(100)).toBe(9.33262154439441e+157);
    });
});


describe('pow_function', () => {
    // Tests that pow returns 1 when b is 0
    it('test_pow_zero', () => {
        expect(pow(2, 0)).toBe(1);
        expect(pow(0, 0)).toBe(undefined);
    });

    // Tests that pow returns a when b is 1
    it('test_pow_one', () => {
        expect(pow(2, 1)).toBe(2);
    });

    // Tests that pow returns a^b when b is a positive integer
    it('test_pow_positive_integer', () => {
        expect(pow(2, 3)).toBe(8);
        expect(pow(3, 4)).toBe(81);
    });

    // Tests that pow returns 1/a^b when b is a negative integer
    it('test_pow_negative_integer', () => {
        expect(pow(2, -3)).toBe(1/8);
        expect(pow(3, -4)).toBe(1/81);
    });

    // Tests that pow returns the correct value when b is a decimal between 0 and 1
    it('test_pow_decimal', () => {
        expect(pow(2, 0.5)).toBe('^2√2');
        expect(pow(3, 0.25)).toBe('^4√81');
    });

    // Tests that pow returns the correct value when a is negative and b is a decimal between 0 and 1
    it('test_pow_negative_decimal', () => {
        expect(pow(-2, 0.5)).toBe('^2√2 / 2');
        expect(pow(-3, 0.25)).toBe('^4√81 / -3');
    });
});