/*
Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) 
{
 
            var counter = 0;
            var size    = 0;
            var max     = 0;
 			      size = arr.length;
             
          while(size > counter )
            { 
            	console.log(counter);
            	max = Math.max.apply(Math, arr[counter]);
<<<<<<< HEAD
              arr[counter]  = max;
=======
               arr[counter]  = max;
>>>>>>> 2e73428ffa438ee4d2660df6000b9eef60350ea4
              counter++;
            }

 console.log(arr);

  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



