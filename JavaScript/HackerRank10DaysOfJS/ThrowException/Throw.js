function isPositive(a)
{
    try 
    {
      if( a> 0)
      {
        return console.log("Yes");
      }
      if(a == 0)
      {
        throw "Zero Error";
      }
      if(a < 0)
      {
        throw "Negative Error";
      }
    }
    catch(error) 
    {
      return console.log(error);

    }
}

isPositive(555);
