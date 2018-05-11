
/*
How Many Vowels?

Create a function that takes a string and returns the number (count) of vowels contained within it.
Examples

"Celebration" ➞ 5

"Palm" ➞ 1

"Prediction" ➞ 4

Notes

a, e, i, o, u are considered vowles (not y).
All test cases are one word and only contain letters.
*/
'use strict'

function countVowels(str) 
{
    let count = 0;
	for(let val of str)
	{
      if(val.match(/[aeiuo]/))
	  {
		count++
	  }
	} 
	return console.log((count));
}


countVowels("printing");

