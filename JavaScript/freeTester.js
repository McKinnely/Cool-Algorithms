
function countVowels(str) 
{
   var vowels = "aeiou";
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