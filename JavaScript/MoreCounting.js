/*
Positive Count / Negative Sum

Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.
Examples

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] ➞ [10, -65]

[92, 6, 73, -77, 81, -90, 99, 8, -85, 34] ➞ [7, -252]

[91, -4, 80, -73, -28] ➞ [2, -105]

null ➞ []

[] ➞ []

Notes

If the input array is empty or null, return an empty array.
*/

'use strict'

function countPosSumNeg(arr) 
{
   let positiveCounter = 0;
   let negativeSum     = 0;
    
  if (!Array.isArray(arr) || !arr.length) {return arr = [];}

	arr.map(function (val)
        {
            if(val > 0)
            {
              positiveCounter++;
            }
            else
            {
              negativeSum += val;
            }
        });

        console.log([positiveCounter, negativeSum]);
}

countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);