/*
Return the Factorial

Create a function that takes an integer as an argument and returns the factorial of that integer, that is, the integer multiplied by all positive lower integers.
Examples

3 ➞ 6

5 ➞ 120

13 ➞ 6227020800
*/


'use strict'

function factorial(int) 
{
  let total = 1;
  for(let counter = 1; counter <= int; counter++)
     {
         total *= counter;
     }
     return total;
}

factorial(2);