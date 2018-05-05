/*
Find the Smallest and Biggest Numbers

Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
*/

function minMax(arr) 
{
  var array = [];
  array[0]  = Math.min.apply(Math, arr); 
  array[1]  = Math.max.apply(Math, arr);
  
  console.log(array);
}

minMax([1,9]);