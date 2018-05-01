function main()
{
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  const PI = Math.PI;
  var r  = 2.6;  
  r =  Number.parseFloat(r).toFixed(3);
  var area      = PI * (r * r);
  var perimiter = 2 * PI * r;
  // Print the area of the circle:
    console.log(area);
  // Print the perimeter of the circle:
    console.log(perimiter);
}



main();