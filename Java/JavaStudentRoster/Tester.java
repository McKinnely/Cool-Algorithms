/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Family
 */
import java.util.*;
import java.text.*;
public class Tester
{
     int positionTracker = 0;
         String names [] = {"Moeng", "Moesi", "Mogapi", "Selepe", "Neo", "Kgwetlho", "Tshepho", "Marothedi"};
         int IDs [] = {100,200,300,400,500,600,700,800};
         int id = 0;
         int num = 0;
         String name = "MK";
         Student myStudent = new Student(12, "Bentley");  
         int Humanites = 0;
           ArrayList <Student>stdntObjctHldrAL = new ArrayList<>();
         
         public void addStudentObjects()
         {                 
             while(names.length > positionTracker)
            {
                stdntObjctHldrAL.add(new Student(id = IDs[positionTracker], name = names[positionTracker]));
                positionTracker++;
            }
             
         }
         
         public  void display()
         {
            Iterator myDisplay = stdntObjctHldrAL.iterator();  
            while(myDisplay.hasNext())
            {  
                Student stdntObctAccesser =(Student)myDisplay.next();  
                System.out.println(stdntObctAccesser.id + " " + stdntObctAccesser.name + " " + stdntObctAccesser.faculty);
            }
            
            System.out.println("");
            System.out.println("Science");         
         }
         
               public void showScienceMajor()
                 {
                            
                    Iterator myScience = stdntObjctHldrAL.iterator(); 
                    while(myScience.hasNext())
                    {  
                        Student stdntObctAccesser =(Student)myScience.next();  
                          if (stdntObctAccesser.faculty == "Science")
                         {

                          System.out.println(stdntObctAccesser.id + " " + stdntObctAccesser.name + " " + stdntObctAccesser.faculty);

                         }

                    }
            
                 }
         
                public void nameChanger()
                 {
                              Iterator myNameChanger = stdntObjctHldrAL.iterator();  
                    while(myNameChanger.hasNext())
                    {  
                        Student stdntObctAccesser =(Student)myNameChanger.next();  
                          if (stdntObctAccesser.id == 500)
                         {

                           stdntObctAccesser.name = "Kagiso";

                         }

                    }
                }

 
                public void humanaty()
                {
                                
                        Iterator myHumanitiesCounter = stdntObjctHldrAL.iterator();  
                      while(myHumanitiesCounter.hasNext())
                      {  

                          Student stdntObctAccesser =(Student)myHumanitiesCounter.next();  
                            if (stdntObctAccesser.faculty == "Humanities")
                           {

                             Humanites++;

                           }

                      }
                      System.out.println("There are " + Humanites + " humanaties majors.");
                }
                
                public void idChanger()
                {
                                Iterator myIDChanger = stdntObjctHldrAL.iterator();  
                        while(myIDChanger.hasNext())
                       {  
                           Student stdntObctAccesser =(Student)myIDChanger.next();  
                             if (stdntObctAccesser.name == "Neo")
                            {

                              stdntObctAccesser.id = 900;

                            }

                       }           
                 System.out.println("");
                 System.out.println("Names Now Changed");
                }
                
                public void idChangerSleepe()
                {
                         Iterator myIDChangerSelepe = stdntObjctHldrAL.iterator();  
             while(myIDChangerSelepe.hasNext())
            {  
                Student stdntObctAccesser =(Student)myIDChangerSelepe.next();  
                  if (stdntObctAccesser.name == "Selepe")
                 {
                  
                    System.out.println(stdntObctAccesser.id + " " + stdntObctAccesser.name + " " + stdntObctAccesser.faculty);
                  
                 }
              
            }
            
                }
 public static void main (String[] args)
{
    try
    {
        Tester myTester = new Tester();
        myTester.addStudentObjects();
        myTester.display();
        myTester.showScienceMajor();
        myTester.idChanger();
        myTester.nameChanger();
        myTester.idChangerSleepe();
        myTester.humanaty();                   
    }
    catch (Exception e)
    {
        e.printStackTrace();
    }
}



}
