public class AccountRelContactController {
    
    @AuraEnabled
    Public static List<Contact> getContacts(List<Id> accountIds){
        List<Contact> ContactList = [SELECT Id, name,Phone,Email FROM Contact WHERE accountId in : accountIds];
        return ContactList;
    }

}