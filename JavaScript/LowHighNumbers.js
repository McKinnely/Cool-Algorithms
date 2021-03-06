/*
Return the Highest and Lowest Numbers

Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).
Examples

"1 2 3 4 5" ➞ "5 1"

"1 2 -3 4 5" ➞ "5 -3"

"1 9 3 4 -5" ➞ "9 -5"

"13" ➞ "13 13"

Notes

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first. 


 'use strict'
*/

 function highLow(str) 
 {
  str = str.split(" ");
  return  console.log([Math.max.apply(Math, str), Math.min.apply(Math, str)].join(" "));
 }

  highLow("13");