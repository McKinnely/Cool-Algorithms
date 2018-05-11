'use strict'

function main()
{
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  const PI = Math.PI;
  let r  = 2.6;  
  r =  Number.parseFloat(r).toFixed(3);
  let area      = PI * (r * r);
  let perimiter = 2 * PI * r;
  // Print the area of the circle:
    console.log(area);
  // Print the perimeter of the circle:
    console.log(perimiter);
}


main();