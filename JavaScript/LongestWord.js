/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

function findLongestWord(str) 
{
  str = str.split(" ");
  var holder = [str.length];
  var counter = 0;
  
  var newArray = str.map(function (val)
  {
      holder[counter] = val.length;
      counter++;    
  });
  
 return Math.max.apply(Math, holder);
}

findLongestWord("The quick brown fox jumped over the lazy dog");Co