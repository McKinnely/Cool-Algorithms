
/*
function largestOfFour(arr) 
{
  for(var value = 0; value < arr.length; value++)
    {
      console.log(Math.max.apply(Math, arr[value]));
    }
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
*/


function largestOfFour(arr) 
{
 arr = arr.map(function (val)
  {
   return Math.max.apply(Math, val);
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);