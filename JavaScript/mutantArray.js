function mutation(arr) 
{
    var firstHalf  = arr[0].toLowerCase().split("");
    var secondHalf = arr[1].toLowerCase().split("");

  for(var counter = 0; counter < secondHalf.length; counter++)
  {
    
    if(firstHalf.indexOf(secondHalf[counter]) === -1)
    {
       return false;
    }
  }

  return true;
}

mutation(["hello", "hey"]);