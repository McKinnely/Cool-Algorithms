
function findEvenIndex(arr)
{
  
var size;
size = arr.length;

   if(size % 2 == 0)
        {
          size = size / 2; 

          if (arr[size -1] == arr[size])
          {
          	console.log( "Array values for the last value of middle of array and the first value of the middle of the array matches." );
            console.log( "Values are: " + arr[size] + " and " + arr[size -1]);
          }

          console.log("No Match.")
                 
          //Even
        }
        else
        {
          console.log( size + " is odd.");

          //Odd
        }
   }

   findEvenIndex([1,2,3,5,5,9,7,8]);