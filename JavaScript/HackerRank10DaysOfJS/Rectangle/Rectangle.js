
/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) 
{ 
           
var rec = {
            length : a,
            width  : b,
            perimeter : 2 * (a + b),
            area : a * b
            };
    return console.log(rec);

}

Rectangle(5, 10);