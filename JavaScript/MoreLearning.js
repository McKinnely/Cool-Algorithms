/*
Return the Four Letter Strings

Create a function that takes an array of strings. Return all words in the array that are exactly four letters.
Examples

["Ryan", "Kieran", "Jason", "Matt"] ➞ ["Ryan", "Matt"]

["Tomato", "Potato", "Pair"] ➞ ["Pair"]

["Kangaroo", "Bear", "Fox"] ➞ ["Bear"]
*/

function isFourLetters(arr) 
{
  arr = arr.filter(function (val)
  {
     if(val.length == 4)
     {
       return val;
     }
  });
  
  return console.log(arr);
}

isFourLetters(["This", "is", "four", "letters", "Yes!", "indeed."]);