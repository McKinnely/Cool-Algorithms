/*
Bob and Jane are two website owners who are competing to see who gets more traffic per day for n number of days. 
Bob is represented by bobArray and Jane by janeArray, where each index of the array is the number of unique visitors for that day. 
Compare each day (index) side by side to determine who won in terms of traffic for the day. 
If the number in bobArray at index 1 for example is greater than the number of janeArray at index1, then Bob 'wins' and receives a point, and vice-versa. 
Count up the total number of points for each person and return them in a new array of length === 2, where the 0-index is the number of points Bob has and the 1-index is the number of points for Jane. 
Then write that total points array to the screen. Here is the codepen: http://codepen.io/gwenf/pen/qNQYPw?editors=0010
If you want to participate, fork this codepen, solve the challenge and post a link in the comments here. Next week on Monday, we can look over the solutions together, try to optimize the code, and give each other suggestions.
 */

// Data of how many views Bob and Jane got over the course of 1 week on their sites.

'use strict'

let bobArray =  [6, 15, 9, 3, 5, 11, 22];
let janeArray = [2, 20, 9, 7, 6, 9,  30];
let bobArrayTotalScore = 0;
let janArrayTotalScore = 0;
let indexValueCompare     = 0;
let arrayValueLength = bobArray.length-1;
let bobName  = "Bob:";
let janeName = "Jane:";
let newArray = [];
 
 
function compareData (bobArray, janeArray, bobName, janeName)
{
 while(arrayValueLength  >= indexValueCompare  )
 {
  if (bobArray[indexValueCompare] > janeArray[indexValueCompare])
    {
      bobArrayTotalScore++;
    }  
    else if (janeArray[indexValueCompare] > bobArray[indexValueCompare])
    {
      janArrayTotalScore++;
    }
    if(janeArray[indexValueCompare] === bobArray[indexValueCompare])
    {
      console.log("They both equaled on day/day's: " + (indexValueCompare + 1) );
    }
    indexValueCompare++;
 }
 
  newArray = [bobName + bobArrayTotalScore, janeName + janArrayTotalScore];
  return console.log(newArray);
 
 
}
 
 
 
// Run the above function, passing in Bob and Jane's site data.
compareData(bobArray, janeArray, bobName, janeName);
 
/*
They both equaled on day/day's: 3
[ 'Bob:2', 'Jane:4' ]
[Finished in 2.4s]
*/