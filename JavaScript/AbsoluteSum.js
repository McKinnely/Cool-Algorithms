/*
Absolutely Sum

Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
Examples

[2, -1, 4, 8, 10] ➞ 25

[-3, -4, -10, -2, -3] ➞ 22

[2, 4, 6, 8, 10] ➞ 30

[-1] ➞ 1
*/



function getAbsSum(arr) 
{   
      
  var total = 0;

  arr.map(function (val)
  {
      total += Math.abs(val);
  });

  console.log(total);
}





getAbsSum([-1, -3, -5, -4, -10, 0])