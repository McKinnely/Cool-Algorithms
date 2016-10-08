/*
Module Two Assignment

For this assignment, you will create the pattern of a chess board that is 8 x 8.  Use X and O to represent the squares.

Create the appropriate nested looping structure to output the characters in an 8 x 8 grid on the screen using Console.Write() or Console.WriteLine() as appropriate.
Include a decision structure to ensure that alternate rows start with opposite characters as a real chess board alternates the colors among rows.
This is what your output should look like.

XOXOXOXO
OXOXOXOX
XOXOXOXO
OXOXOXOX
XOXOXOXO
OXOXOXOX
XOXOXOXO
OXOXOXOX

Grading Criteria:

Used a nested loop
Used a decision structure to flip row output
Output is correct per above image
*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModuleTwoAssignment
{
class Program
{

static void Main(string[] args)
{

string[] myArray = { "X", "O", "X", "O", "X", "O", "X", "O" };
string[] myArrayFlip = { "O", "X", "O", "X", "O", "X", "O", "X" };

	for (int x = 0; x <= 3; x++)
	{
	int y = 0;
	foreach (string values in myArray)
	{

	Console.Write(myArray[y]);
	y++;
	}
	Console.WriteLine("");
	int i = 0;

	if (myArray == myArray) //flip array
	{
	foreach (string values in myArrayFlip)
	{
	Console.Write(myArrayFlip[i]);
	i++;
	}
	Console.WriteLine("");
	}
	}
   Console.ReadLine();

}
}
}