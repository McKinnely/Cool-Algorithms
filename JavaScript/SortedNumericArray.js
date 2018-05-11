
'use strict'

let array =  [1,2,3,6,7,4,5];

array.sort(function(a,b)
{
  return a - b;
});

console.log("Ascending sorted numberic array: " +  array);

array.sort(function(a,b)
{
  return(b - a);
});

console.log("Descending sorted numeric array: " + array);
