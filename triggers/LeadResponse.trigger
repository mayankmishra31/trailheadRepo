trigger LeadResponse on Lead (after insert) {
for(lead lead: trigger.new){
String[] toAddresses = new String[] {lead.email};
Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
mail.setTargetObjectId(lead.ID);
mail.setSenderDisplayName('AALI TEAM');
mail.setUseSignature(false);
mail.setBccSender(false);
mail.setSaveAsActivity(true);
mail.setReplyTo('emailtolead@n-1r66x0sjk516a3wrmv4q4ovj78uhbq3uh0hh70xh3vmwanj5ai.7a-4awauaa.cs44.apex.sandbox.salesforce.com');
EmailTemplate et=[Select id from EmailTemplate where DeveloperName=:'SalesNewCustomerEmail'];
mail.setTemplateId(et.id);
Messaging.SendEmailResult [] r = Messaging.sendEmail(new Messaging.SingleEmailMessage[] {mail});
}

}