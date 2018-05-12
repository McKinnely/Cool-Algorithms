/*
Sort Numbers in Descending Order

Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.
Examples

123 ➞ 321

1254859723 ➞ 9875543221

73065 ➞ 76530

Notes

You can expect non-negative numbers for all test cases.
*/

"use strict"

function sortDecending(num) 
{
  let numArray = (""+num).split("");
  numArray = numArray.sort(function(a,b)
  {
    return(b - a);
  });
  return numArray.join("");
}

sortDecending(1254859723);