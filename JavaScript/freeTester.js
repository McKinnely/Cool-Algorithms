
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


function confirmEnding(str, target) 
{
  var startIndexO = str.length- 1;
  var startIndex = str.lastIndexOf(" ");
  startIndex = startIndex + 1;

 if(str.includes(" "))
 {
   str = str.substring(startIndex);
   if(str === target)
   {
   console.log("true 1");
   }
 }
 else 
  if(str.substring(startIndexO) === target)
   {
     console.log("true 2");
     console.log(str.substring(startIndexO));
   }
  }

confirmEnding("Bastian Going far", "far");
confirmEnding("r", "k");
confirmEnding("ben", "n");



