
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

          secondHalf = secondHalf.split("");
          secondHalf = secondHalf.reverse();
          secondHalf = secondHalf.join("");
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
          secondHalf = secondHalf.split("");
          secondHalf = secondHalf.reverse();
          secondHalf = secondHalf.join("");      
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
