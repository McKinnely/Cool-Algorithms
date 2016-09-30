
import java.util.ArrayList;
import java.util.Scanner;





public class GradeArray 
{
    int [] grades = new int [10];
    double total;
    int outOfRange;
    int valueTracker  = 0;
    double average = 0;
    double averageSum = 0;
              

  
    Scanner kboard = new Scanner(System.in);
    
    public void access()
    {
                           for(int j = 0; j < 10; j++)
                           {
                               System.out.println("Enter the marks for grade ["+ j + "]: ");  
                               grades[j] = kboard.nextInt();

                               while ( grades[j] < 0 || grades[j] >= 101) 
                                       {
                                         System.out.println("Please be sure to enter numbers between 0 and 100 inclusive."); 
                                         System.out.println("Enter the marks for grade ["+ j + "]: "); 
                                         grades[j] = kboard.nextInt();
                                         if(grades[j] >= 0 && grades[j] <= 101)
                                         {                                            
                                             break;
                                         }                                                             
                                       }  
                                       total += grades[j];
			    }
                            
				   System.out.println("The total of the grades entered is " + total);
     }
                  
    public void averageGrade()
    {     
          averageSum = total/2;
          System.out.println("The average grade is : " + averageSum);         
    }
    
    public void arrayMaxandMin()
    {
           
      int min = grades[0];
                int max = grades[0];
               
                for(int myCounter =1; myCounter< grades.length; myCounter++)
                {
                        if(grades[myCounter] > max)
                                max = grades[myCounter];
                        else if (grades[myCounter] < min)
                                min = grades[myCounter];
                       
                }
                System.out.println("The minimum grade is : " + min);
                System.out.println("The maximum grade is : " + max);
                
        }
     
    public void oddEvenGrades()
    {
        
        int indexPosition = 0;
                          ArrayList<Integer> oddGrades = new ArrayList<>();
                  ArrayList<Integer> evenGrades = new ArrayList<>();
        while(grades.length > indexPosition)
        {
               if( grades[indexPosition] % 2 != 0)
                {
                   evenGrades.add(grades[indexPosition]);
                           

                 System.out.println("Odds: " + grades[indexPosition]);
                 }
               if( grades[indexPosition] % 2 == 0)
                {
                 oddGrades.add(grades[indexPosition]);
                 System.out.println("Evens: " + grades[indexPosition]);
                 }
            indexPosition++;
            
        }
    }
     
    public void printAllGrades()
    {
         int index= 0;
           
      int min = grades[0];
                int max = grades[0];
               
                for(int myCounter =1; myCounter< grades.length; myCounter++)
                {
                        if(grades[myCounter] > max)
                                max = grades[myCounter];
                        else if (grades[myCounter] < min)
                                min = grades[myCounter];
                       
                }
             
                
                    while(grades.length > index)
                    {
                        System.out.println(grades[index]);
                        if(grades[index] == max)
                                {
                                     System.out.println( max + "<------- maximum : " );
                                }
                        if(grades[index] == min)
                                {
                                     System.out.println( min + "<------- minimum : " );
                                }
                        index++;
                    }
                    
                    
          
            
        }
    

 
    
    public static void main (String [] args)
    {
        
            GradeArray gradeObject = new GradeArray();
            gradeObject.access();
            gradeObject.averageGrade();
            gradeObject.arrayMaxandMin();
            gradeObject.oddEvenGrades();
            gradeObject.printAllGrades();
            
    }
    
}
