/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package salesperson;
import java.util.Arrays;

/**
 *
 * @author Family
 */

//
public class SalesCalculations 
{   

 //Created private class variables to store all relevant data. 
    
 private double compareNums =0;

 private String personName;
 
 private final double fixed_Salary = 35000;
 
 private double fiftyPercentReached = 0;
 
 private final double commission   = 12;
 
 private final double accelerationFactor = 15;
 
 private double fiftyPercentAbvAnlSalary = 150;
 
 private double counter = 0;
 
 private double counter_2 = 0;
 
 private double anualSales = 0;
 
 private double total = 0; 
 
 private double tempAnnualSales = 0;
 
 private final double salesTargetToMeet = 80;
 
 private final double salesTarget = 100000;
 
 private final double salesIncentiveTargetMet = (salesTargetToMeet/100) * (salesTarget);
 //Created to store array data inside of totalSales.
 private final String[] totalSales = {"Toal Sales"};
  //Created to store array data inside of totalComp.
 private final String[] totalComp = {"Total Compensation"};
 

 
    //Set annual sales total to using myAnnualSales paramter as the target.
    public void setAnualSale(double myAnualSales)
    {
        //Assigns entered data from myAnnualSales variable to the private annual sales variable.
        anualSales = myAnualSales;
        
        //Calculates the sales incentive if the 80% target is between 80k and 100k inclusive.
        if(myAnualSales >= salesIncentiveTargetMet && myAnualSales <= salesTarget )
        {  //Calculatees the 12 percent of annual sales plus salary.  
        total = (commission/100) * (anualSales)+ fixed_Salary; 
        }  //Calculatees the 15 percent of annual sales plus salary if sales are over 100k.  
        else if(myAnualSales > salesTarget)
        {
          total = (accelerationFactor/100) * (anualSales)+ fixed_Salary;    
        }
        //Assignes myanual  sales to temp sales.
        tempAnnualSales = anualSales;  
        //return total;
    }
    
        public double getAnnualSales()
    {
      return total;
    }
    


     //Creates an annual comp chart that allows for one to visualize the potential sales with table data.
      public void potentialAnnualComp()
      {   
       //Calculates 150% of my annual sales and saves it in fiftyPercentReached variable.
       fiftyPercentReached = (fiftyPercentAbvAnlSalary/100) * (anualSales);   
        
        //Loop is designed to get annual sales and loop incrementing the potential incentive relative to sales until 150% of the annual sales are met.
        while(tempAnnualSales <= fiftyPercentReached)
        {
            //Created if statement to call string arrays for the tablel header data.
            if(counter < 1)
            {
                System.out.println(Arrays.toString(totalSales) + "      " + Arrays.toString(totalComp));
                setCompare(total);
                counter++;
            }
            
            //Sends the annaul sale to the setAnnualSale method to set the annual sale relative to every loop.
            setAnualSale(tempAnnualSales);
            System.out.print(tempAnnualSales     + "          ");
             if(tempAnnualSales < salesIncentiveTargetMet)
            {
                System.out.println(fixed_Salary);
            }
            else
            {
            System.out.println(total);
            }
           tempAnnualSales  += 5000;             
        }
        
      }
      

    //
          //Sets person name.
    public void setName(String name)
    {
        personName = name;      
    }
    
         //gets person name.
    public String getName()
    {
       return personName;
    }
     
    
    //Created to compare the sales people to run calculations loigc in main. 
    public void setCompare(double compareNums)
    {
        this.compareNums = compareNums;
    }
    //Gets the compare numbers.
    public double getCompare()
    {     
        return compareNums;
    }
        

}
    
  



