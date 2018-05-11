
/*
 * Complete the Rectangle function
 */
'use strict'

function Rectangle(a, b) 
{ 
           
let rec = {
            length : a,
            width  : b,
            perimeter : 2 * (a + b),
            area : a * b
          };
    return console.log(rec);

}

Rectangle(5, 10);