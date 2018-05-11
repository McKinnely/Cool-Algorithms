
'use strict'

function countVowels(str) 
{
   let vowels = "aeiou";
   let count = 0;
	for(let val1 of str)
	{
		for(let val2 of vowels)
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