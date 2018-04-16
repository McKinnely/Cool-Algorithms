/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/



function findLongestWord(str) 
{

var longestWord = '';
var words = str.split(" ");
var counter = 0;

for(var val of words)
{
    if(words[counter].length > longestWord.length)
    {
       longestWord = words[counter];    
    }
    counter++;
}
    console.log(longestWord);
    console.log(longestWord.length);
      
 }
findLongestWord("Energy can neither be created or destroyed!");
