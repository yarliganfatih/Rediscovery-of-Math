# Rediscovery of Math

# Numbers
Everything in mathematics is actually based on repetitive operations between 1 and 0. Just like the two sides of the coin, there are two numbers representing existence and non-existence, such as night and day, cold and hot.

## Addition and substraction

### Addition
Mathematics is the language of the universe. Let's take an example from nature.
- We don't have apples = 0 apples
- We have an apple = 1 apple
- We got 1 more apple from the tree. We need to define a concept for this apple group. We call this number 2.
- We bought 1 more apple, we said 3.
- 1 more apple, 1 more apple, 1 more apple... Our ancestors decided to advance the natural numbers by repeating the numbers instead of making up more numbers after 9 apples. Thus, the concept of digit came to existence with the number 10.

The numbers we got:
```
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ... 19, 20, 21 ... 98, 99, 100, 101...
```

### Subtraction
Now let's go in reverse. We left 1 of 2 apples back. 1 apple left. Here we can represent the subtraction of 1 apple with negative numbers. Thus, we discovered **the inverse of a number with respect to the addition**.
```
2 - 1 = 1
2 + (-1) = 1
```

Now let's show them on the number line.
```
<--•--•--•--•--•-->
  -2 -1  0  1  2
```

## Multiplication & Division

### Multiplication
Multiplication notation (\*) is used to represent the repeated addition of the same number. The number obtained by repeating the operation returns **product**.
> Example from nature: let's collect 3 apples from each tree. By collecting 3 apples from 5 trees, we get a total of 15 apples.
```
3+3+3+3+3 = 3*5 = 15
0+3+3+3+3+3 = 3*5 = 15
```
The reason why the result obtained by multiplying a number by 0 is 0 is due to the ineffective element in the addition operation.

### Division & Remainder
The division (/) notation is used to represent the subtraction of a number by repeating the same number over and over. After subtracting as many numbers as possible up to 0, the concept of **remainder** for the number that cannot be subtracted any more is used. The number of repetitions gives the result of **division**.
> Example from nature: We want to distribute 9 apples equally to our 4 children. Since the division obtained from the division of 9 by 4 is 2, you can consume the remaining 1 apple as their father, after giving 2 apples to each child. :)
```
9-4-4=1 (no more 4 can be subtracted)
Since the process is repeated 2 times, the result of the division is 2
```

<details>
<summary>
But why can't a number be divisible by 0?
</summary>
This is where our first limitation comes into play. Because by constantly subtracting 0 from a number, 0 is not reached. It is described as UNDEFINED because it cannot be solved forever and the result cannot be reached when trying to do this operation.
Except for 0/0, this transaction is UNCERTAIN for now because it is a transaction where both rules overlap.
</details>

- The multiplication operation consists of repeating the addition operation,
- The division operation consists of repeating the subtraction operation.
Accordingly, we can say that multiplication and division are inversely related to each other.
Thus, we discovered **the inverse of a number for multiplication**.
```
6 / 2 = 3
6 * (1/2) = 3
```

## Repetition by rule

### Summation
The sigma symbol (∑) is used to represent the repetition of a number up to a certain number in a certain rule.

<sub>n=1</sub>
∑ x
<sup>k=1</sup>
``` 1+2+3+4+5 = 15 ```

### Factorial
The factorial notation (!) is used to represent the repeated multiplication of a positive number by all numbers up to 1.

5!
```5*4*3*2*1 = 120 ```

## Exponentiation & Root & Logarithm

### Exponentiation
The exponent notation (^) is used to represent the repeated multiplication of the same number. The number of repetitions of the process returns **power**.
> Example from nature: Suppose 2 branches emerge from each branch in the tree. If this pattern is repeated 3 times, we can assume that there are 8 apples at the extremes.
```
        |          = 2^0 = 1
       / \         = 2^1 = 2
      /   \
     /     \
    /       \
   /\       /\     = 2^2 = 4
  /  \     /  \
 /\  /\   /\  /\
• • • •   • • • •  = 2^3 = 8
```
The reason why the result obtained with 0 power of a number is 1 is due to the ineffective element in the multiplication operation.

## Prime numbers
Many numbers are the product of smaller numbers. Minority prime numbers are the smallest building blocks of these products.
- Since the number 0 is the absorbing element in multiplication, we skip it.
- The number 1, on the other hand, does not have a distinguishing feature between numbers, as it is an ineffective element in multiplication.
- Numbers such as 2, 3 and 5 are prime numbers because they cannot be divided by numbers other than 1 and themselves.
- But the number 4 is not a prime because it is divisible by other numbers.
```1*4 = 2*2 = 4*1 = 4```
> Also another way we classify numbers is those that are multiples of 2 (even numbers) and those that aren't (odd numbers).

### Prime Divisors
We can divide a number into its prime divisors by dividing by repeating the prime numbers, respectively.
> Thanks to the obtained expression, we can find more efficient solutions to our real-life problems by calculating the **greatest common divisor** or **least common multiple** between two numbers.
In particular, it is one of the best methods we will use to reverse the exponentiation operation, which consists of repeating the multiplication operation.

### Root / Sqrt
The denominator of the decimal power of a number can also be expressed with the root (√). Since the root number is the inverse of multiplication in exponent notation, we can think of the root operation as the inverse of the exponent.
While some numbers can give results as integers, some numbers can give irrational/decimal results. Therefore, the result can also be represented as an integer multiplied by the root.

In order for the number to come out of the root as an integer, its exponent and the root must simplify each other. This is possible with an exponent that has the inverse of the root number for multiplication.

<details>
<summary>
Why do even-numbered roots have more than one answer?
</summary>
Because the inside of the root is a number obtained by repeating the multiplication with itself. It will consist of the product of either two positive numbers or two negative numbers. Both give positive numbers. Therefore, the fact that the number inside the root is positive does not guarantee that it will be positive outside the root.
</details>

If the number inside the root is a negative number, we switch to the virtual dimension. We use the expression i=√-1 for the representation of imaginary numbers. In all operations until now, we were able to display the result on the number line. Although imaginary numbers do not have a representation on the real number line, it is inevitable for i^2 to reach the -1 point.
Based on this, it was decided to show a perpendicular imaginary number line that cuts the real number line from 0.
```
         ↑
         |
         • 2i
         |
         • i
         |
<--•--•--•--•--•-->
  -2 -1  |  1  2
         • -i
         |
         • -2i
         |
         ↓
```
Transitions between two number lines can be achieved by turning 90 degrees clockwise as 1 is added to the exponent.
```
i^1 =  i    i^5 =  i
i^2 = -1    i^6 = -1
i^3 = -i    i^7 = -i
i^4 =  1    i^8 =  1
...
```
The transitions here give us the unit circle in the two-dimensional plane. Here we give a little nod to geometry.

### Logarithm
A logarithm is a notation used to find the power of one number to another.

After dividing the numbers into prime divisors in logarithms and converting them to exponential expressions, a rational number or a logarithmic expression that can be multiplied by a number can be obtained.

Because the number we want to take out of the logarithm is the power of the logarithm base of the number inside. If we have exponential expressions in a way that equates our base and base numbers, we can obtain the result by dividing the base in the base by the base in the base.

## Series
It is the name given to a group of numbers.

Some analysis can be done by comparing the series on graphs.

### Total
It is the sum of the numbers in the series.

### Mode
Shows the most repeated numbers in the series.

### median
An element or two that remain in the middle after the series is sorted is the median of the series.

### Arithmetic mean
It is obtained by dividing the sum of the numbers in the series by the number of elements.
> Example from nature: you asked your children to collect as many apples as they could, then you wanted to distribute the collected apples equally to each child. With this process, each will have an equal number of apples at the end of the day, despite the possibility of each picking a different number of apples.

### Geometric Average
It is obtained by taking the product of the numbers in the series as the root of the number of elements.

### Harmonic Average
It is obtained by dividing the number of elements by the sum of the inverses of the numbers in the series.