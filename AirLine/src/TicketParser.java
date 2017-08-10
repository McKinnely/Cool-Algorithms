
/**************Java Challenge************************
*                                                   *                                             
*   Software Engineer: McKinnely Bentley 	    
*   Description: Just a personal challenge.               
*   Inputs: Flight Information.                  *
*   Outputs: Outputs data based on specs given      *
*   in the challenge doc.                	    *
*  	     	      	                            *
*****************************************************/


import java.time.Year;
import java.util.Arrays;
import javax.swing.JOptionPane;

class TicketParser 
{
     private String  firstName;
     private String  lastName;
     private String  city;
     private String  state;
     int      desiredSeat;
     Boolean seatsArray [] = new Boolean[10];
     Boolean tempArray  [] = new Boolean[10];
      

     
     public void setPerson(int personSeat)
     {
         //call SeatChecker Method to get seating data
         
         Arrays.fill(tempArray, Boolean.FALSE);
          // tempArray = seatsArray.clone();
         System.arraycopy(tempArray, 0, seatsArray, 0, tempArray.length );
         //Now copy the tempArray data into seatsArray;
     }

    public void setFirstName(String firstName) 
    {
        this.firstName = firstName;
    }
    
            public String getFirstName() 
    {
        return firstName;
    }

    public String  getLastName() 
    {
        return lastName;
    }

    public void setLastName(String lastName) 
    {
        this.lastName = lastName;
    }
     
    public void setSeatsArray(Boolean[] seatsArray)
    {
        this.seatsArray = seatsArray;
    }
     
    public Boolean[] getSeatsArray() 
    {
        return seatsArray;
    }
    
        public String getCity() 
    {
        return city;
    }

    public void setCity(String city) 
    {
        this.city = city;
    }

    public String getState() 
    {
        return state;
    }

    public void setState(String state) 
    {
        this.state = state;
    }
    
    public void SectionFull()
    {
       int num = 0;
      for(boolean seatSifter: seatsArray)
      {
          String answer  = "";
        
          if(seatSifter == false && num < 5)
          {
            //Add the logic here, answer/no if the user wants to go to first class
              try 
              {
                answer = JOptionPane.showInputDialog(null, "Economy full. Would you like a First Class seat instead? Enter Yes/No");   
                  while (answer.isEmpty()) 
                  {
                      JOptionPane.showMessageDialog(null,"Please be sure not to leave the answer blank.");
                      answer = JOptionPane.showInputDialog(null, "Economy full. Would you like a First Class seat instead? Enter Yes/No");  
                  }
                if (answer.equalsIgnoreCase("yes"))
                {                
                  tempArray[num] = true;
                  System.arraycopy(tempArray, 0, seatsArray, 0, tempArray.length );
                  JOptionPane.showMessageDialog(null,"Name: " + getFirstName() + " "  + getLastName()+ "\n" + "City:      " + getCity() + "\n"  + "State:   " + getState() + "\n" + "Flight:   First Class\n" + "Seat Number:  " + (num + 1));
                    System.out.println(this.firstName);
                  break;
              }
              } 
              catch (Exception e) 
              {
                  JOptionPane.showMessageDialog(null,"Caught...");
              }
             
              if (answer.equalsIgnoreCase("no"))
              {              
                JOptionPane.showMessageDialog(null,"Next flight leaves in 3 hours");
                System.arraycopy(tempArray, 0, seatsArray, 0, tempArray.length );
                return;
              }                            
          }                        
          if(seatSifter == false && num > 4)
           {
            //Add the logic here, answer/no if the user wants to go to first class
              try 
              {
                answer = JOptionPane.showInputDialog(null, "First Clas full. Would you like a Economy Class seat instead? Enter Yes/No");   
                  while (answer.isEmpty()) 
                  {
                      JOptionPane.showMessageDialog(null,"Please be sure not to leave the answer blank.");
                      answer = JOptionPane.showInputDialog(null, "First Class full. Would you like a Economy Class seat instead? Enter Yes/No");  
                  }
                if (answer.equalsIgnoreCase("yes"))
                {                
                  tempArray[num] = true;
                  System.arraycopy(tempArray, 0, seatsArray, 0, tempArray.length );
                  JOptionPane.showMessageDialog(null,"Thanks, you're now in Economy!");
                  JOptionPane.showMessageDialog(null,"Name: " + getFirstName() + " "  + getLastName()+ "\n" + "City:      " + getCity() + "\n"  + "State:   " + getState() + "\n"  + "Flight:   Economy\n" + "Seat Number:  " + (num + 1));
                  break;
              }
              } 
              catch (Exception e) 
              {
                  JOptionPane.showMessageDialog(null,"Caught...");
              }
             
              if (answer.equalsIgnoreCase("no"))
              {              
                JOptionPane.showMessageDialog(null,"Next flight leaves in 3 hours.");
                System.arraycopy(tempArray, 0, seatsArray, 0, tempArray.length );
                return;
              }                            
          } 
          num++;   
                
          //Create a for each loop that loops through the seatsArry looking for empty seats. 
         // If seats a seat is empty, assing it. 
      }
      
    }
    
    
    public void SeatChecker(int checkSeat)
    {                                                          
                 if(seatsArray[checkSeat].equals(true))
                  {
                    //numSet isn't availble. Show list of avalible seats
                         if (checkSeat == 4)
                          {
                           SectionFull();
                          }
                         if (checkSeat == 9)
                          {
                           SectionFull();
                          }
                    return;
                  }  
                  
                  //tempArry would replace the below seatsArray[];
                   tempArray[checkSeat] = true;
                   System.arraycopy(tempArray, 0, seatsArray, 0, tempArray.length );
                   System.out.println("Available");
                   //Make a tempArray to equal instance var array.
                   //Example, seatsArray[] = tempArray[];
                  
                 switch(checkSeat)
                 {
                 case 0: case 1: case 2: case 3: case 4:
                      JOptionPane.showMessageDialog(null,"Name: " + getFirstName() + " "  + getLastName()+ "\n" + "City:      " + getCity() + "\n"  + "State:   " + getState() + "\n" + "Flight:   First Class\n" + "Seat Number:  " + (checkSeat + 1));
                      break;
                 case 5: case 6: case 7: case 8: case 9:
                      JOptionPane.showMessageDialog(null,"Name: " + getFirstName() + " "  + getLastName()+ "\n" + "City:      " + getCity() + "\n"  + "State:   " + getState() + "\n" + "Flight:   Economy\n" + "Seat Number:  " + (checkSeat + 1));
                      break;   
                 }
       }    
    
}


