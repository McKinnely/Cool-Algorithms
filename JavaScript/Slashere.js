/*
Return the remaining elements of an array after chopping off n elements from the head.
The head means the beginning of the array, or the zeroth index.
Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

function slasher(arr, howMany) 
{
  arr  = arr.slice(howMany);
  console.log(arr);
  return arr;
}


slasher([1, 2, 3], 2);
