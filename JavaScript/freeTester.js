
function countVowels(str) 
{
   var vowels = "aeiou";
   var count = 0;
	for(var val1 of str)
	{
		for(var val2 of vowels)
		{
			if(val1 === val2)
			{
				count++;
			}
		}
	} 

	return(count);
}

countVowels("printing");