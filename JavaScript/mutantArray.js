
'use strict'

function mutation(arr) 
{
    let firstHalf  = arr[0].toLowerCase().split("");
    let secondHalf = arr[1].toLowerCase().split("");

  for(let counter = 0; counter < secondHalf.length; counter++)
  {
    
    if(firstHalf.indexOf(secondHalf[counter]) === -1)
    {
       return false;
    }
  }

  return true;
}

mutation(["hello", "hey"]);