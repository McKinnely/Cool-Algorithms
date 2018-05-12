/*
X's and O's

Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
Rules

    Return a boolean value (true or false).
    The string can contain any character.
    When neither an x nor an o is in the string, return true.

Examples



"xooxx" ➞ false

"ooxXm" ➞ true (case insensitive)

"zpzpzpp" ➞ true (returns true if no x and o)

"zzoo" ➞ false

Notes

    Remember to return true if there aren't any x's or o's.
    Must be case insensitive.
    */
'use strict'

function XO(str) 
{
    let xCount = 0;
    let oCount = 0;
	str = str.toLowerCase().split("");
    
    str.map(function (val)
    {
        if(val === "x")
        {
            xCount++;
        }
        if(val === "o")
        {
            oCount++;
        }
    });
    if(xCount === oCount)
      {
          return console.log(true);
      }
      return false;
}
XO("ooxx");