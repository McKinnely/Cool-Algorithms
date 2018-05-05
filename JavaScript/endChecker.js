/*
Check if String Ending Matches the Second String

Create a function that takes two strings and returns true if the first argument ends with the 2nd argument; otherewise return false .

Rules
    Take two strings as arguments.
    Determine if second string matches ending of first string.
    Return boolean value.
*/
   
function checkEnding(str1, str2) 
{
  return str1.endsWith(str2);
}

checkEnding("abcdabc","abc");