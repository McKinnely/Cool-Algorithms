/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

'use strict'

function findLongestWord(str) 
{

let longestWord = '';
let words       = str.split(" ");
let counter     = 0;

for(let val of words)
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
