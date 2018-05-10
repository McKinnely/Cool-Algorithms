/*
Pi to N Decimal Places

Given a number n, write a function that returns PI to n decimal places.
Examples

5 ➞ 3.14159

4 ➞ 3.1416

15 ➞ 3.141592653589793
*/


function myPi(n) {return Number.parseFloat(Math.PI.toFixed(n));}


console.log(myPi(15));