function convertHTML(str) 
{
str = str.split("");

newArray = str.map(function (val)
{  
    switch (val) 
    {
     case '"':
      val = '&quot;';
      return val;
     case '&':
      val = ('&amp;');
      return val;
     case '<':
      val = ('&lt;');
      return val;
     case '>':
      val = '&gt;';
      return val;
     case "'":   
      val = ('&apos;');
      return val;
     default:
      return val;
    }
});

newArray = newArray.join("");

console.log(newArray);

  // &colon;&rpar;
  return str;
}




convertHTML("Hamburgers > Pizza > Tacos");
