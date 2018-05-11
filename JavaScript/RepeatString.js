/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/

'use strict'

function repeatStringNumTimes(str, num) 
{
	let newString = "";
	let counter = 0;

 while (num > counter)
 {
  newString = str.concat(newString);
  
  counter++;
}
str = newString;
return console.log(str);
}

repeatStringNumTimes("It Works*** ", 3);