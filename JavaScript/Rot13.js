
'use strict'

function Robinson(str) 
{ // LBH QVQ VG!
  let counter = 0;
  let newStr = [str.length];
  str = str.toUpperCase().split("");
   
  str.map(function (val)
  {
   if(val.charCodeAt(0) < 65 || val.charCodeAt(0) > 90)
   {
     newStr[counter] = val;
     counter++;
   }
   if(val.charCodeAt(0) >= 65 && val.charCodeAt(0) <= 90)
   { 
     if(val.charCodeAt(0) >= 65 && val.charCodeAt(0) <= 77)
     {
      newStr[counter] = val.charCodeAt(0) + 13;
      newStr[counter] = String.fromCharCode(newStr[counter]);
      counter++;
     }
    }

      if(val.charCodeAt(0) >= 78 && val.charCodeAt(0) <= 90)
      {
      newStr[counter] = val.charCodeAt(0) - 13;
      newStr[counter] = String.fromCharCode(newStr[counter]);
      counter++;
      }
  });
   str = newStr.join("");
   console.log(str);
  
  return str;
}

// Change the inputs below to test
Robinson("LBH QVQ VG!");
//rot13("SERR PBQR PNZC");