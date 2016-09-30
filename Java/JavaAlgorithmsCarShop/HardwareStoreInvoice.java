//Cool Hardware Algorithm.
public class HardwareStoreInvoice 
{
   String part_number;
   String part_description;
   int quantity;
   double price_per_item;
   
   
   public void setPartNumber(String parNum)
   {
       this.part_number = parNum;
   }
   
   public String getPartNumber()
   {
       return part_number;
   }
   
   public void setPartDiscription(String parDis)
   {
       this.part_description = parDis;
   }
   
   public String getPartDiscription()
   {
       return this.part_description;
   }
   
    public void setQuantity(int quantity)
   {
       this.quantity = quantity;
   }
   
   public int getQuantity()
   {
       return this.quantity;
   }
   
   public void setPricePerTerm(double pricePerTerm)
   {
       this.price_per_item = pricePerTerm;
   }
   
   public  double getPricePerTerm()
   {
       return  this.price_per_item;
   }
   
public double getInvoiceAmount()
{
   double cacltulate = 0;
    if (this.quantity <= 0)
    {
       quantity = 0;
    }
    else if(this.price_per_item <= 0)
    {
        price_per_item = 0;
    }
   cacltulate = this.quantity * this.price_per_item;
   
   return cacltulate;
    
}
   
    public HardwareStoreInvoice(String part_number, String part_description, int quantity, double price_per_item) 
    {
        setPartNumber(part_number);
        setPartDiscription(part_description);
        setQuantity(quantity);
        setPricePerTerm(price_per_item);
    }    
 
}


/*
An Invoice should include four pieces of information as instance
variables‐ a part_number(type String), a part_description(type
String),a quantity of the item being purchased (type int) and a
price per item (double).
*/