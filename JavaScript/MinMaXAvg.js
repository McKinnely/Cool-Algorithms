/*
Find the Minimum, Maximum, Length and Average Values

Create a function that takes an array of numbers and returns the following statistics:

    Minimum Value
    Maximum Value
    Sequence Length
    Average Value

Examples

[6, 9, 15, -2, 92, 11] ➞ [-2, 92, 6, 21.833333333333332]

[30, 43, 20, 92, 3, 74] ➞ [3, 92, 6, 43.666666666666664]

[4.54, 8.32, 5.20] ➞ [4.54, 8.32, 3, 6.02]
*/

'use strict'

function minMaxLengthAverage(arr) 
{
 let min  = Math.min.apply(Math, arr);
 let max  = Math.max.apply(Math, arr);
 let size = arr.length;
 let avg = 0;
 
 arr.map(function (val)
 {
    avg += val;
 });
 avg = (avg / arr.length);
 return console.log([min, max, size, avg]);
}

 minMaxLengthAverage([6,11,7]);