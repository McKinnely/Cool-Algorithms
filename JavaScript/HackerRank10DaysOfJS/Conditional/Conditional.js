'use strict'


function getGrade(score) 
{
    let grade;
    // Write your code here
   if(score >= 25 && score <= 30)
   {
      grade = "A";
      console.log(grade);
   }
   if(score >= 20 && score < 25)
   {
      grade = "B";
      console.log(grade);
   }
   if(score >= 15 && score < 20)
   {
      grade = "C";
      console.log(grade);
   }
   if(score >= 10 && score < 15)
   {
      grade = "D";
      console.log(grade);
   }
   if(score >= 5 && score < 10)
   {
      grade = "E";
      console.log(grade);
   }
   if(score >= 0 && score < 5)
   {
      grade = "F";
      console.log(grade);
   }      
    return grade;
}

getGrade(24);