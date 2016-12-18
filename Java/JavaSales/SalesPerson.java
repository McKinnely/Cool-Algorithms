/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package salesperson;

/**
 *
 * @author Family
 */

import java.util.Scanner;

public class SalesPerson 
{
        
    /**
     * @param args the command line arguments
     */
    

    
    public static void main(String[] args) 
    {
        
        int dataReady;
        
        //Creates string varialbes for sales person one and two
        String salesPerson1;
        String salesPerson2;
        
        //Creates a Scanner object userInput to take in user data.
        Scanner userInput = new Scanner(System.in);
        
        //Creates two sales objects to run seperate logic on both sales persons.
        SalesCalculations mySalesObject1 = new SalesCalculations();      
        SalesCalculations mySalesObject2 = new SalesCalculations();          
        
        //Gets the first sales person name and assigns it to the setName method inside the SalesCalc class.
        System.out.print("Enter the first sales person name: ");
        salesPerson1 = userInput.next();
        mySalesObject1.setName(salesPerson1);
        
        //Gets the first sales person annual sales and assigns it to the setAnnualSales method inside the SalesCalc class.
        System.out.print("Enter annual sales for " + mySalesObject1.getName() + " : ");
        dataReady = userInput.nextInt();         
        mySalesObject1.setAnualSale(dataReady);
        mySalesObject1.potentialAnnualComp();
        System.out.print("\n");
        
       
        //Gets the second sales person name and assigns it to the setName method inside the SalesCalc class.
        System.out.print("Enter the second sales person name: ");
        salesPerson2 = userInput.next();
        mySalesObject2.setName(salesPerson2);

        //Gets the second sales person annual sales and assigns it to the setAnnualSales method inside the SalesCalc class.    
        System.out.print("Enter annual sales for " + mySalesObject2.getName() + " : ");
        dataReady = userInput.nextInt();     
        mySalesObject2.setAnualSale(dataReady);
        mySalesObject2.potentialAnnualComp();
        
        
        //Runs logical calculations between both sales persons to determine the best one. 
        if (mySalesObject1.getCompare()>mySalesObject2.getCompare())
        {          
             System.out.print(mySalesObject1.getName() + " total annual compensation is ");
             System.out.print(mySalesObject1.getCompare() - mySalesObject2.getCompare());
             System.out.print(" higher than " + mySalesObject2.getName());
             System.out.println("");         
        }
        else if ((mySalesObject2.getCompare()>mySalesObject1.getCompare())) 
        {
             System.out.print(mySalesObject2.getName() + " total annual compensation is ");
             System.out.print(mySalesObject2.getCompare() - mySalesObject1.getCompare());
             System.out.print(" higher than " + mySalesObject1.getName());
             System.out.println("");
        }
        else
        {
            System.out.print("Both sales persons annual compensations are equal: ");
            System.out.println(mySalesObject1.getCompare());
        }
       
        
    }  
    
}

