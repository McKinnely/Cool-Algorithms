
function rot13(str) 
{ // LBH QVQ VG!
  var counter = 0;
  newStr = [str.length];
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
rot13("LBH QVQ VG!");
rot13("SERR PBQR PNZC");