
'use strict'

function myNum(num)
{
	if(num < 10 && num > 0)
	{
		return counter;
	}
    let counter = 0;
	let stringNum = num.toString();

    while(true)
    {
	 stringNum = stringNum.toString();
     stringNum = stringNum.split("");
     stringNum = Number(stringNum[0]) * Number(stringNum[1]);
     counter++;
     console.log(stringNum);
      if(stringNum >= 0 && stringNum < 10)
       {
    	console.log(  counter + " It Works!")
    	return true;
       }
  
    }
}

myNum(39);

/*
Even better! If you're using ECMAScript 2015 (aka ECMAScript 6), it can be this pretty:
var sum = [1, 2, 3].reduce((a, b) => a + b, 0);
console.log(sum); // 6
*/