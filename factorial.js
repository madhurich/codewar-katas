/*
https://www.codewars.com/kata/recursion-number-1-factorial/train/javascript/58b76fb620d5e5657a00006e
#1 - Factorial

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

5! = 5 * 4 * 3 * 2 * 1 = 120.

The value of 0! is 1.

Your task

You have to create the function factorial that receives n and returns n!. You have to use recursion.
*/
const factorial = n => {
 if(n === 0){
  return 1;
  }
  return n * factorial(n-1);
};