const { add, subt } = require('../../src/numbers/numbers');


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
