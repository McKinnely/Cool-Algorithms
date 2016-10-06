
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