           

function largestOfFour(arr) 
{
  // You can do this!
            var counter = 0;
            var size    = 0;
            var max     = 0;
 			size = arr.length;
             
          while(size > counter )
            { 
            	console.log(counter);
            	max = Math.max.apply(Math, arr[counter]);
               arr[counter]  = max;
              counter++;
            }

 console.log(arr);

  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



