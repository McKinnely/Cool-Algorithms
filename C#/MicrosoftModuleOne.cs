/*
1.  Create a C# Console application.

2.  Within the Main() method in this application, create variables of the correct data type for the information related to a student only.  The other information will be used in later modules when you create class files for the other objects listed:

Student Information

First Name	Last Name	Birthdate	Address Line 1	Address Line 2	City	State/Province	Zip/Postal	Country
Teacher Information

First Name	Last Name	Birthdate	Address Line 1	Address Line 2	City	State/Province	Zip/Postal	Country
UProgram Information

Program Name	Department Head	Degrees
Degree Information

Degree Name	Credits Required
Course Information

Course Name	Credits	Duration in Weeks	Teacher
3.  Once you have the variables created, use assignment statements to assign values to one set of student variables and use the Console.WriteLine() method to output the values to the console window.

Again, this assignment is merely intended to check your understanding of how to create variables, assign values to them, and output the information to a console window.  You will build on these concepts and begin to create more functionality in later modules.

4.  Post your code in the peer review area for feedback from other students.
*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
class Program
{
static void Main(string[] args)
{
string firstName, lastName, addressLine1, addressLine2, city, state_Province, zip, country;

firstName = "Lebron";
lastName = "James";
DateTime birthday;

birthday = new DateTime(1980, 10, 23);
addressLine1 = "1414 Cleveland Ave";
addressLine2 = "NA";
city = "Cleveland";
state_Province = "Cleveland";
zip = "71601";
country = "USA";

Console.WriteLine("First Name: {0}\n" + "Course: {1}\n" + "Program: {2}\n" + "Degree: {3}\n", firstName, lastName, addressLine1, addressLine2;// city, state_Province, zip, country);

}

}
}