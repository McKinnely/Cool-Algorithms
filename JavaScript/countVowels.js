
function countVowels(str) 
{
    var count = 0;
	for(var val of str)
	{
      if(val.match(/[aeiuo]/))
	  {
		  count++
	  }
	} 

	return(count);
}


countVowels("printing");