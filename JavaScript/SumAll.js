
function sumAll(arr) 
{
  var highNumber = Math.max.apply(Math, arr);
  var lowNumber  = Math.min.apply(Math, arr);
  var difference = (highNumber - lowNumber);
  var adding = lowNumber;
  

  for(counter = 0; counter < difference; counter++)
  { 
  
  adding++;
  lowNumber +=  adding;

  console.log(lowNumber);
  }
  return 1;
}

sumAll([4, 1]);
sumAll([1, 4]);