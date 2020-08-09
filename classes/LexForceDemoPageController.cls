public with sharing class LexForceDemoPageController {
    private Contact contactObj;
    public Contact getcontactObj() { return contactObj; }


    public LexForceDemoPageController(ApexPages.StandardController stdController) {
        if (String.isEmpty(ApexPages.currentPage().getParameters().get('id'))) {
            this.contactObj = new Contact();
        } else {
            this.contactObj = 
                [SELECT 
                    Id,
                    Name, 
                    AccountId,
                    Birthdate,
                    LeadSource
                FROM Contact 
                WHERE Id = :ApexPages.currentPage().getParameters().get('id')];
        }
    }

    public PageReference save() {
        ApexPages.StandardController sc = new ApexPages.StandardController(contactObj);
        return sc.save();
    }

    public PageReference cancel() {
        ApexPages.StandardController sc = new ApexPages.StandardController(contactObj);
        return sc.cancel();
    }   
}