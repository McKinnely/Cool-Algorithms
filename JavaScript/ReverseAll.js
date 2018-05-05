/*
Reverse the Order of a String

Create a function that takes a string as its argument and returns the string in reversed order.
*/

function reverse(str) 
{
  str = str.split("").reverse().join("");
  return(str);
}

reverse("Please reverse me.")