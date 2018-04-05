/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". Also if words are like, "RunNIng and WalKing".
Only the first letter should remain in caps. 
*/

function titleCase(str) 
{ 
  str = str.toLowerCase().split(" ");
  str =  str.map(function (val)
  {
   return  val.charAt(0).toUpperCase() + val.slice(1);         
  });  
  console.log(str.join(" "));
}

titleCase("a person who nEver maDe a mistAke, never tried anyTHing new. einsteiN.");

       
          
