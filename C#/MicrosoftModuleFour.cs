/*
Prior to object oriented considerations and class files, programmers created structs in languages such as C.  Some programmers still use structs for storing related information, although the trend is more towards class files.  Because there may still be occasions where a struct makes sense in your code, you're going to create some structs in this assignment.  Because a struct has a similar layout to a class file, this will provide you with a layout for the variables in your student, teacher, program, and course aspects.

For this assignment, complete the following tasks.  For the structs, just include member variables and a constructor.  Do not create properties at this time.  Include all the variables that you have created up to this point in time.

Create a struct to represent a student
Create a struct to represent a teacher
Create a struct to represent a program
Create a struct to represent a course
Create an array to hold 5 student structs.
Assign values to the fields in at least one of the student structs in the array
Using a series of Console.WriteLine() statements, output the values for the student struct that you assigned in the previous step
When complete, submit your code in the peer review section.

Challenge (Do not submit the challenge code to the peer assessment area)

For this challenge, expand on the struct array steps to complete the following:

Use an appropriate looping structure to add values to all student structs in the array by prompting a user of the application to enter values for fields.

For example, if you created fristName, lastName, address, city fields as an example, for each of the 5 students in the array, you need to prompt the user for each field in the struct, for each student struct in the array.
Once completed, create another loop to iterate over the array and write the values to the console window.
*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication4Assignment
{
// Create a stuct to represent student.
public struct Student
{
public string FirstName;
public string LastName;
public string Ethnicity;
public string Housing;
public string Social; 
/*Saved social as string because I needed it to go inside of an array that's saving all of my structs a "String" data
types. 
*/

public Student(string fistName, string lastName, string ethnicity, string social, string housing)
{
this.FirstName = fistName;
this.LastName = lastName;
this.Ethnicity = ethnicity;
this.Social = social;
this.Housing = housing;
}
}
//Create a stuct to represent a teacher.
public struct Teacher
{
public string FirstName;
public string LastName;
public string Subject;
public string MyClass;

public Teacher(string firstName, string lastName, string subject, string myClass)
{
this.FirstName = firstName;
this.LastName = lastName;
this.Subject = subject;
this.MyClass = myClass;
}
}

//Create a stuct to represent a program.
public struct SchoolProgram
{
public string ComputerScience;

public SchoolProgram(string computerSciene)
{
this.ComputerScience = computerSciene;
}
}

//Create a stuct to represent a course.
public struct Course
{
public string MyCourse;

public Course(string myCourse)
{
this.MyCourse = myCourse; 
}
}

class Program
{

static void Main(string[] args)
{

//Create an array to hold 5 student structs.
string[] structArray = new string[5];
Student myStudent = new Student();
//Assign values to the fields in at least one of the student structs in the array
structArray[0] = myStudent.FirstName = "Kinney";
structArray[1] = myStudent.LastName = "Bentley";
structArray[2] = myStudent.Ethnicity = "Superman";
structArray[3] = myStudent.Social = "123456789";
structArray[4] = myStudent.Housing = "Off Campus";

// Using a series of Console.WriteLine() statements, output the values for the student struct that you assigned in the previous step
Console.WriteLine("First Name : {0}\n" + "Last Name : {1}\n" + "Ethnicity : {2}\n" + "Social : {3}\n" + "Housing : {4}\n", structArray[0], structArray[1], structArray[2], structArray[3], structArray[4]);
Console.ReadKey();

}

}

}
