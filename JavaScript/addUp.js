"use strict"

function addUp(num)
{
  let sum = 0;
  for(let counter = 0; counter <= num; counter++)
  {
     sum += counter;
  }
  return sum;
}

addUp(4);