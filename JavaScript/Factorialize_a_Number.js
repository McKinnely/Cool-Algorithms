
/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Remember to use Read-Search-Ask if you get stuck.
*/

function factorialize(num) 
{
  var holder = 0;
  for(var counter = 1; counter <= num; counter++)
    {
      holder+=counter;
      console.log(holder);
    }
    return(holder);
}

factorialize(12);

