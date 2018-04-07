<?php
//Create string_1 and string_2
$string_1 = "gaborone is in south     ";
$string_2 = "east      ";

//Q1: a) Remove trailing whitespace from both strings.
$string_1 = trim($string_1);
$string_2 = trim($string_2);
//Q1: b) Capitalize the word "gaborone" in string_1.
$array = (explode(" ",$string_1));
$array[0] = strtoupper($array[0]);
$string_1 = implode(" ",$array);

//Q1: c) print the new string_1
echo($string_1);
echo ("\n");
 
//Q1: d) Extract the word "in" from string_1
$array = (explode(" ",$string_1));
$stringExtractedValue;
$counter = 0;
foreach ($array as $value) 
{
    if($value == "in")
    {
     //Removes in and saves it in $stringExtractedValue
     $stringExtractedValue = $value;
     $array[$counter] = '';
    }
  $counter++;
} 

$string_1 = implode(" ",$array);


//Q1: d) Check if string1 and string2 are equal
if(strcmp('$string_1', '$string_2') == 0)
{
  echo("Strings are equal.");
}
else
{
  echo("Strings aren't equal.\n");
}


//Q2: d) Write PHP script that prints hello world the numbers 
//of times entered in the parameter multiplied by 5
//Don't allow a number to be entered thats 10 or above
function printHelloTimes($number) 
{
    if($number >= 10)
    {
      echo("The number 10 above. Can't do calculations.....\n");
      echo("\n");
      return;
    }
    
    $printCounter = 1;
    $number *=5;
    for($timesPrint = 0; $timesPrint < $number; $timesPrint++)
    {
    echo("Hello World " . $printCounter . "\n");
    $printCounter++;
    }
  echo("\n");
}
//Will calcualte.
printHelloTimes(2);
//Won't calculate.
printHelloTimes(10);


/*   
     |Ame   |80|
     |Tebogo|25|
     |Joe   |70|
     |Thabo |55|
*/

//Q3: Store data from above table in array.
$arrayNames = array
  (
    "Ame"    => "80",
    "Tebogo" => "25",
    "Joe"    => "70",
    "Thabo"  => "55",
  );
//Q3: a) Sort the marks in ascending order.
asort($arrayNames);
//Q3: b) Print array.
echo ("Sort the marks in ascending order.\n");
foreach ($arrayNames as $key => $value) 
{
 echo($key . " ". $value . "\n");
}
echo("\n");
//Q3: c) Sort names in ascending order.
echo ("Sort the names in ascending order.\n");
ksort($arrayNames);
foreach ($arrayNames as $key => $value) 
{
 echo($key . " ". $value . "\n");
}
echo("\n");

//Q3: d) Search for David and give the appropirate message.
//Q3: f) Print students and marks.
$stringDavid = "David";
$numberDavidFound = 0;
foreach ($arrayNames as $key => $value) 
{
  if(strcmp('$key','$stringDavid') == 0)
  {
     echo("We found: " . $key . "\n");
  } 
}
if($numberDavidFound == 0)
{
echo("We didn't find " . $stringDavid);
}
?>
