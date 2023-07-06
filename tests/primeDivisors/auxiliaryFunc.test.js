const { isPrime, convertPrime, mergePrime, countPositiveDivisors, greatestCommonDivisor, leastCommonMultiple } = require('../../src/primeDivisors/auxiliaryFunc')


describe('isPrime_function', () => {
    // Tests that isPrime returns 1 for a prime number greater than 2
    it('test_prime_greater_than_2', () => {
        expect(isPrime(7)).toBe(1);
        expect(isPrime(11)).toBe(1);
        expect(isPrime(13)).toBe(1);
    });

    // Tests that isPrime returns 1 for the number 2
    it('test_prime_2', () => {
        expect(isPrime(2)).toBe(1);
    });

    // Tests that isPrime returns 0 for a negative number
    it('test_negative_number', () => {
        expect(isPrime(-7)).toBe(0);
        expect(isPrime(-11)).toBe(0);
        expect(isPrime(-13)).toBe(0);
    });

    // Tests that isPrime returns 0 for the number 0
    it('test_zero', () => {
        expect(isPrime(0)).toBe(0);
    });

    // Tests that isPrime returns 0 for the number 1
    it('test_one', () => {
        expect(isPrime(1)).toBe(0);
    });

    // Tests that isPrime returns 0 for an even number greater than 2
    it('test_even_number_greater_than_2', () => {
        expect(isPrime(4)).toBe(0);
        expect(isPrime(6)).toBe(0);
        expect(isPrime(8)).toBe(0);
    });
});


describe('convertPrime_function', () => {
    // Tests that the function returns an empty array when given a prime number
    it('test_prime_number', () => {
        expect(convertPrime(7)).toEqual([]);
    });

    // Tests that the function returns an array of prime factors when given a composite number
    it('test_composite_number', () => {
        expect(convertPrime(12)).toEqual([[2, 2], [3, 1]]);
    });
});


describe('mergePrime_function', () => {
    // Tests that the function returns the input number when given a single prime number
    it('test_single_prime_number', () => {
        expect(mergePrime([[2, 1]])).toBe(2);
        expect(mergePrime([[3, 1]])).toBe(3);
        expect(mergePrime([[5, 1]])).toBe(5);
    });

    // Tests that the function returns the correct merged prime number when given multiple prime numbers
    it('test_multiple_prime_numbers', () => {
        expect(mergePrime([[2, 1], [3, 1], [5, 1]])).toBe(30);
        expect(mergePrime([[2, 2], [3, 1], [5, 1]])).toBe(60);
        expect(mergePrime([[2, 2], [3, 2], [5, 1]])).toBe(180);
    });

    // Tests that the function returns 1 when given an empty input
    it('test_empty_input', () => {
        expect(mergePrime([])).toBe(1);
    });

    // Tests that the function ignores non-prime numbers in the input
    it('test_non_prime_numbers', () => {
        expect(mergePrime([[2, 1], [3, 1], [4, 1], [5, 1]])).toBe(30);
        expect(mergePrime([[2, 2], [3, 1], [4, 1], [5, 1]])).toBe(60);
        expect(mergePrime([[2, 2], [3, 2], [4, 1], [5, 1]])).toBe(180);
    });

    // Tests that the function ignores negative numbers in the input
    it('test_negative_numbers', () => {
        expect(mergePrime([[-2, 1], [3, 1], [5, 1]])).toBe(30);
        expect(mergePrime([[2, 2], [-3, 1], [5, 1]])).toBe(20);
        expect(mergePrime([[2, 2], [3, 2], [-5, 1]])).toBe(36);
    });
});


describe('countPositiveDivisors_function', () => {
    // Tests that isPrime function returns 1 for prime numbers and 0 for non-prime numbers
    it('test_is_prime', () => {
        expect(countPositiveDivisors(7)).toBe(2);
        expect(countPositiveDivisors(10)).not.toBe(2);
    });

    // Tests that countPositiveDivisors function returns 0 for negative numbers
    it('test_is_negative', () => {
        expect(countPositiveDivisors(-7)).toBe(0);
        expect(countPositiveDivisors(-10)).toBe(0);
    });

    // Tests that countPositiveDivisors function returns 0 for 0
    it('test_zero', () => {
        expect(countPositiveDivisors(0)).toBe(0);
    });

    // Tests that countPositiveDivisors function returns 1 for 1
    it('test_one', () => {
        expect(countPositiveDivisors(1)).toBe(1);
    });

    // Tests that countPositiveDivisors function returns the correct number of divisors for a large number
    it('test_large_number', () => {
        expect(countPositiveDivisors(100)).toBe(9);
        expect(countPositiveDivisors(120)).toBe(16);
    });

    // Tests that countPositiveDivisors function returns 0 for a large negative number
    it('test_negative_large_number', () => {
        expect(countPositiveDivisors(-100)).toBe(0);
        expect(countPositiveDivisors(-120)).toBe(0);
    });
});


describe('greatestCommonDivisor_function', () => {
    // Tests that the function returns the correct greatest common divisor of two prime numbers
    it('test_happy_path_prime_numbers', () => {
        expect(greatestCommonDivisor(3, 5)).toBe(1);
        expect(greatestCommonDivisor(7, 11)).toBe(1);
        expect(greatestCommonDivisor(13, 19)).toBe(1);
    });

    // Tests that the function returns the correct greatest common divisor of two non-prime numbers
    it('test_happy_path_non_prime_numbers', () => {
        expect(greatestCommonDivisor(12, 18)).toBe(6);
        expect(greatestCommonDivisor(20, 30)).toBe(10);
        expect(greatestCommonDivisor(24, 36)).toBe(12);
    });

    // Tests that the function returns the correct greatest common divisor of one prime and one non-prime number
    it('test_happy_path_one_prime_and_one_non_prime_number', () => {
        expect(greatestCommonDivisor(3, 12)).toBe(3);
        expect(greatestCommonDivisor(7, 14)).toBe(7);
        expect(greatestCommonDivisor(13, 26)).toBe(13);
    });
});


describe('leastCommonMultiple_function', () => {
    // Tests that the least common multiple of two positive integers is correctly calculated
    it('test_positive_integers', () => {
        expect(leastCommonMultiple(2, 3)).toBe(6);
        expect(leastCommonMultiple(4, 6)).toBe(12);
        expect(leastCommonMultiple(5, 7)).toBe(35);
    });

    // Tests that the least common multiple of two negative integers is correctly calculated
    it('test_negative_integers', () => {
        expect(leastCommonMultiple(-2, -3)).toBe(6);
        expect(leastCommonMultiple(-4, -6)).toBe(12);
        expect(leastCommonMultiple(-5, -7)).toBe(35);
    });

    // Tests that the least common multiple of one positive and one negative integer is correctly calculated
    it('test_positive_and_negative_integers', () => {
        expect(leastCommonMultiple(-2, 3)).toBe(6);
        expect(leastCommonMultiple(-4, 6)).toBe(12);
        expect(leastCommonMultiple(-5, 7)).toBe(35);
    });
});

