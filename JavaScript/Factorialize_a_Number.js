
/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Remember to use Read-Search-Ask if you get stuck.
*/

function factorialize(num)
{
  
  counter = 1;
  number = 1;
  while(num > counter)
{
  number *= (counter + 1);
  
  
 console.log(number);
 counter++;
 
}
num = number;
console.log(number);
  return num;
}

factorialize(5);
