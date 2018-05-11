/*
Find the Smallest and Biggest Numbers

Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
*/

'use strict'

function minMax(arr) 
{
  let array = [];
  array[0]  = Math.min.apply(Math, arr); 
  array[1]  = Math.max.apply(Math, arr);
  
  console.log(array);
}

minMax([1,9]);