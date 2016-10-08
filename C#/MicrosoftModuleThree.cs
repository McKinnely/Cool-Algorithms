
/*
Module Three Assignment

In later modules, you will begin to create class files to represent the items we have been using so far.  You will create class files for Students, Teachers, Courses, etc.  The class files will consist of attributes and methods.  To prepare for this, the assignment for this module will ask you to think about some basic methods that you can implement in your code.

This assignment requires you to create some methods for getting data for your variables and sending that data to the console window.

In the assignment, you are to practice getting values from a user and assigning the to local variables.  As a result, move the variables into the appropriate methods.  For example, you could create a method called GetStudentInformation() and in that method, you could prompt the user for each piece of student information and then assign it to the variables you created.

Next, create methods such as PrintStudentDetails(string first, string last, string birthday) that accepts the proper variables, and use an appropriate message to print the content to the console window.

The first example is a guide for you, the rest you will need to create on your own.

Create a method that prompts a user of your console application to input the information for a student:

static void GetStudentInformation()
{
      Console.WriteLine("Enter the student's first name: ");
      string firstName = Console.ReadLine();
      Console.WriteLine("Enter the student's last name");
      string lastName = Console.ReadLine();
       // Code to finish getting the rest of the student data
      .....
}

static void PrintStudentDetails(string first, string last, string birthday)
{
    Console.WriteLine("{0} {1} was born on: {2}", first, last, birthday);
}

Using the above partial code sample, complete the method for getting student data.
Create a method to get information for a teacher, a course, a uprogram, and a degree using a similar method as above.
Create methods to print the information to the screen for each object such as static void PrintStudentDetails(...).
From within Main(), call each of the methods to prompt for input from a user of your application.
Just enter enough information to show you understand how to use methods.  (At least three attributes each).
Assign the values that are input, to the proper variables.
Output the values of each object using the "print" methods that you created.
Exceptions

At times, developers create method signatures early on in the development process but leave the implementation until later.  This can lead to methods that are not complete if a developer forgets about these empty methods.  One way to help overcome the issue of not remembering to complete a method is to throw an exception in that method if no implementation details are present. 
For this task, use MSDN to research the NotImplementedException exception.
Create a new method for validating a student's birthday.  You won't write any validation code in this method, but you will throw the NotImplementedException in this method
Call the method from Main() to verify your exception is thrown
*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModuleThreeAssignment
{
class ModuleThreeAssignment
{
// 5 Call the Get methods from the Main method in the application
static void Main(string[] args)
{
GetStudentInfo();
GetTermInfo();
Console.ReadKey(); //Pauses the program 



}

// 1. Using the below partial code sample, complete the method for getting student data.

static void GetStudentInfo()
{
Console.WriteLine("Enter the student's first name: ");
string firstName = Console.ReadLine();

Console.WriteLine("Enter the student's last name");
string lastName = Console.ReadLine();

Console.WriteLine("Enter the student's birth date: ");
DateTime bDate = DateTime.Parse(Console.ReadLine());

// 6 Call the Print methods from within each Get method.
PrintStudentDetails(firstName, lastName, bDate);



// 1. Using the above partial code sample, complete the method for getting student data.


}

// 2. Create a method to get information for a teacher, a course, and program, and a degree using a similar method as above.
// 4. Just enter enough information to show you understand how to use methods. (At least three attributes each).
static void GetTermInfo()
{
Console.WriteLine("Enter the Teacher's name: ");
string teacherName = Console.ReadLine();

Console.WriteLine("Enter the course name: ");
string course = Console.ReadLine();

Console.WriteLine("Enter the program name: ");
string program = Console.ReadLine();

Console.WriteLine("Enter the name of the degree: ");
string degree = Console.ReadLine();

// 6 Call the Print methods from within each Get method
PrintTermDetails(teacherName, course, program, degree); 
}

// 3. Create methods to print the information to the screen for each object such as static void PrintStudentDetails(...)

static void PrintStudentDetails(string first, string last, DateTime birthday)
{
Console.WriteLine("{0} {1} was born on: {2}", first, last, birthday.ToShortDateString());
}

static void PrintTermDetails(string teacherName, string course, string program, string degree)
{
Console.WriteLine("Teacher: {0}\n" + "Course: {1}\n" + "Program: {2}\n" + "Degree: {3}\n", teacherName, course, program, degree);
}

}
}