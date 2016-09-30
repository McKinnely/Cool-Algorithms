//Main Class.
public class InvoiceTest 
{
    public static void main(String[] args) 
    {
        HardwareStoreInvoice myHardwareObject = new HardwareStoreInvoice("15", "Truck Battery", 2, 75);
        System.out.println("Part Number: " + myHardwareObject.getPartNumber());
        System.out.println("Part Discription: " + myHardwareObject.getPartDiscription());
        System.out.println("Part Quantity: " + myHardwareObject.getQuantity());      
        System.out.println("Part Price: " + myHardwareObject.getPricePerTerm());
        System.out.println("Invoice: " + myHardwareObject.getInvoiceAmount());
        
    }
}