
'use strict'

function myReplace(str, before, after) 
{ 
  //Purpose: Turn string "str", into an array.
  //Reason : Arrays have built in methods that allows easier parsing of data.
  str = str.split(" ");
  let counter = 0;
  //Purpose: Search string "str" for middle paramater "before".
  //Reason : The logic is to find string "before" and and replace it with the last param, "after".
    for(let val of str)
        {
            if(val.includes(before))
            {               
                if(val.charAt(0) === val.charAt(0).toLowerCase())
                    {
                     str[counter] = after; 
                     str = str.join(" ");
                    }
                    else 
                    {
                     str[counter] =  after.charAt(0).toUpperCase() + after.split("").splice(1).join("");  
                     str = str.join(" ");                  
                    }                              
            }
            counter++;
        }
    console.log(str);
  return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");