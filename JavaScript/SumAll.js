
'use strict'

function sumAll(arr) 
{
  let highNumber = Math.max.apply(Math, arr);
  let lowNumber  = Math.min.apply(Math, arr);
  let difference = (highNumber - lowNumber);
  let adding = lowNumber;
  

  for(let counter = 0; counter < difference; counter++)
  { 
  
  adding++;
  lowNumber +=  adding;

  console.log(lowNumber);
  }
  return 1;
}

sumAll([4, 1]);
sumAll([1, 4]);