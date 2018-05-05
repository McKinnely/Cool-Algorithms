function nameShuffle(str) 
{
  str = str.split(" ").reverse().join(" ");
  return console.log(str);
}

nameShuffle("Very Happy");