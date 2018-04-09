/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

function findLongestWord(str) 
    {
    str = str.split(" ");
    var size = str.length;
    var counter = 0;
    var arrayCopy = [];
    while(size > counter )
    { 
    arrayCopy[counter] = str[counter].length;
    counter++;
    }
    var max = Math.max.apply(Math, arrayCopy);
    var indexTopValueLocator = arrayCopy.indexOf(max);
    return str[indexTopValueLocator].length;
   }
findLongestWord("Energy can neither be created or destroyed!");
