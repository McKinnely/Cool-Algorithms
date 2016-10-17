
import java.util.Random;
class Student 
{
    Random random = new Random(); 
    int id;
    String name;
    String faculty; 
     
   public void  SetFaculty()
    {
      
        int ranNum = random.nextInt(3) + 1; 
                   switch (ranNum)
                    {
                     case 1:
                       this.faculty = "Science" ;
                       break;

                     case 2:
                        this.faculty = "Business";
                        break;    
                         
                     case 3:
                         this.faculty = "Humanities";
                         break;
                       
                     default: 
                         System.out.println("Something went wrong!!");
                         break;                                    
                    }              
        
    }
    
   public String GetFaculty()
    {
        return this.faculty;
    }
   
  public void SetID(int id)
  {       
  this.id = id;
  }
  
  public int GetID()
  {
      return this.id;
  }

  public void SetName(String name)
  {
      this.name = name;
  }
  
  public String GetName()
  {
      return this.name;
  }
  
  public String Display()
{
   String printOutput;
   printOutput = "|" + Integer.toString(GetID())+ "          " +/*TAB */ "	" + "|" + GetName()+ "        " +/*TAB */  "	" + "|" + GetFaculty(); 
   System.out.println(printOutput);
   return  printOutput;
  
}
    Student(int id, String name) 
    {
        
        SetID(id);
        SetName(name);
        SetFaculty();
    }
    
       Student(int id, String name, String faculty) 
    {
        
        SetID(id);
        SetName(name);
        SetFaculty();
    }
    
}
    
      

