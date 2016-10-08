/*
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note

You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/


function reverseString(reversing)
{
          reversing = reversing.split("");
          reversing = reversing.reverse();
          reversing = reversing.join("");

          return reversing;
}

function palindrome(str) 
{
 
      //You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower 
      //case in order to check for palindromes.

      var removeCharacters = str.replace(/[^0-9a-zA-Z]/g, '');
      removeCharacters = removeCharacters.toLowerCase();
      
      var  size = removeCharacters.length;
      var  firstHalf;
      var  secondHalf;

        if(size == 1)
          {
            return; //Can't be.
          }

       
       if(size % 2 == 0)
        {
          size = size / 2;
          firstHalf  = removeCharacters.slice(0, -size);
          secondHalf = removeCharacters.slice(size);
          
          secondHalf = reverseString(secondHalf);

          //Even

        }
        else
        {
          //Odd
          size--;
          size = size / 2;
          firstHalf  = removeCharacters.slice(0, size);

          size++;
          secondHalf = removeCharacters.slice(size);
          secondHalf = reverseString(secondHalf);
     
        }
      // console.log(removeCharacters);
      if (firstHalf == secondHalf)
      {
      console.log("palindrome");
       return true;
      }
       return false;
}



palindrome("E = MC^2, Force = Mass * Accelartion, fx(345n)");
palindrome("DoooD");
palindrome("122*  -'1");
palindrome("8%*^II^*%8");
