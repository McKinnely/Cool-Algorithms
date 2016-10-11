
function titleCase(str) 
{      
            var counter = 0;
            var size    = 0;

            str =  str.toLowerCase();
            str  = str.split(" ");
            size = str.length;
   
            var firstChar;
            var restOfString;

            while(size > counter )
            { 
              firstChar     = str[counter].charAt(0).toUpperCase();
              restOfString  = str[counter].slice(1, str[counter].length);
              str[counter]  = firstChar + restOfString;
              counter++;
            }

            str = str.join(" ");
            console.log(str);

            var max = 0;
            var currentValue = 15;


 console.log(max);
           
}


titleCase("a person who nEver maDe a mistAke, never tried anyTHing new. einsteiN.");

       
          
