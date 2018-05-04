function reverseString(s) 
{
    try 
    {
      s = s.split("").reverse().join("");
      console.log(s);
    }
    catch(error) 
    {
      console.error(error.message);
      console.log(s);
    }

}

reverseString(1234);
