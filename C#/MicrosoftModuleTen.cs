/*
For the first part of this assignment, complete the following:

Open the LINQ Restriction Operators project file
Locate the public void Linq3() method in the code listing
Locate the //TODO: comment and write LINQ code to implement the following functionality
Write a LINQ statement to find all products that are in stock and cost more than 3.00 per unit.
Run the method to verify the output.
Locate the public void Linq4() method in the code listing
Locate the //TODO: comment and write LINQ code to implement the following functionality
Write a LINQ statement to find all customers in Washington (WA).  Review the data source and look under Region.
Run the method to verify the output.
For the second part of this assignment, complete the following:

Open the LINQ Ordering Operators project file
Locate the public void Linq30() method in the code listing
Locate the //TODO: comment and write LINQ code to implement the following functionality
Write a LINQ statement to sort a list of products by name in descending order as per the comments in the solution file.
Run the method to verify the output.
Locate the public void Linq32() method in the code listing
Locate the //TODO: comment and write LINQ code to implement the following functionality
Write a LINQ statement to use orderby and descending to sort a list of doubles from highest to lowest.
Run the method to verify the output.
Post your finished code in the Peer Review area.   You do NOT have to submit the entire .cs file, just the LINQ code that you have written.  If you want to verify a peer's code, paste their LINQ into your version of the project.
*/

/* Reminder
Post your finished code in the Peer Review area. You do NOT have to submit the entire .cs file, just the LINQ code that you have written. If you want to verify a peer's code, paste their LINQ into your version of the project.
*/

public void Linq3()
{

List<Product> products = GetProductList();
var expensiveInStockProducts =
from prod in products
where prod.UnitPrice > 3
select prod;

Console.WriteLine("In-stock products that cost more than 3.00:");

foreach (var product in expensiveInStockProducts)
{
Console.WriteLine("{0} is in stock and costs more than 3.00.", product.ProductName);
}
}

public void Linq4()
{
List<Customer> customers = GetCustomerList();
var waCustomers =
from customersInWa in customers
where customersInWa.Region == "WA"
select customersInWa;
//TODO: Create code to implement the functionality listed in the [Description] tag for this query

Console.WriteLine("Customers from Washington and their orders:");
foreach (var customer in waCustomers)
{
Console.WriteLine("Customer {0}: {1} {2}", customer.CustomerID, customer.CompanyName, customer.Region);
foreach (var order in customer.Orders)
{
Console.WriteLine(" Order {0}: {1}", order.OrderID, order.OrderDate);

}

}

}

public void Linq30()
{
List<Product> products = GetProductList();

var sortedProducts =
from desName in products
orderby desName.ProductName descending
select desName;
ObjectDumper.Write(sortedProducts);
}

public void Linq32()
{
double[] doubles = { 1.7, 2.3, 1.9, 4.1, 2.9 };
var sortedDoubles =
from desDoubles in doubles
orderby desDoubles descending
select desDoubles;
//TODO: Enter code here to order this list in descending order

Console.WriteLine("The doubles from highest to lowest:");
foreach (var d in sortedDoubles)
{
Console.WriteLine(d);
}
}