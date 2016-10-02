//Cool Java Bank Account Algorithm.
/*
University of Botswana, Department of Computer Science , ISS211- Intermediate Programming
Laboratory Assignment Nr. 4 . September 13th 2016 0700- 0900
Instructions: Answer all questions. Marks allocations are to be found in [ ] against
each question. Total marks = 60
Q1.
Modify class MyAccount (in the example) to provide a method called debit that
withdraws money from an account of MyAccount class. Ensure that the debit
amount does not exceed the Account’s balance. If it does, the balance should be left
unchanged and the method should print a message indicating ―Debit amount
exceeded account balance. Modify class MyAccountTest (in the example below) to
test method debit
*/

import javax.swing.JOptionPane;

public class MyAccount
{
private double balance;

    public void Account(double initialBalance)
     {
         String returnMessage; 
            if (initialBalance > 0)
            {
                balance = initialBalance;
                returnMessage = "Your initial ballance is: " + balance;
                JOptionPane.showMessageDialog(null, returnMessage);
            }
     }

    public void credit(double amount)//set balance
     {
        
      String returnMessage;   
      balance += amount;
      returnMessage = "Your ballance is now: " + balance;
      JOptionPane.showMessageDialog(null, returnMessage);
      
      
     }
    

    public void debit(double amount)
     {
      String returnMessage;
      if(amount > balance)
        {
            returnMessage = "Debit amount exceeded account balance.";
            JOptionPane.showMessageDialog(null, returnMessage);
            return;
        }
           
      balance -= amount;
      returnMessage = "Your new ballance is: " + balance ;
      
     }
    
    public double getBalance()
     {
          JOptionPane.showMessageDialog(null, "Your ballance is: " + balance);
      return balance;
      
     }
    
    public static void main (String [] args)
    {
        double initialBallance;
        double credit ;
        double debit;
        
        MyAccount accountObject = new MyAccount();
       
        initialBallance = Double.parseDouble(JOptionPane.showInputDialog("Enter your initial ballance: "));
        accountObject.Account(initialBallance);
        credit = Double.parseDouble(JOptionPane.showInputDialog("Enter your deposit amount: "));
        accountObject.credit(credit);
        debit = Double.parseDouble(JOptionPane.showInputDialog("Enter your debit amount: "));
        accountObject.debit(debit);
        accountObject.getBalance();                     
    }
}//end class
