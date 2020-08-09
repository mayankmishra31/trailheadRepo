public class MessagesController{
    public MessagesController(){
        ApexPages.addmessage(new ApexPages.message(ApexPages.severity.FATAL,'Enter Account name'));
        ApexPages.addmessage(new ApexPages.message(ApexPages.severity.ERROR,'This is not valid'));
        ApexPages.addmessage(new ApexPages.message(ApexPages.severity.WARNING,'It should be correct format'));
        ApexPages.addmessage(new ApexPages.message(ApexPages.severity.INFO,'You need to complete this page'));
        ApexPages.addmessage(new ApexPages.message(ApexPages.severity.CONFIRM,'Record successfully updated'));
    }
}