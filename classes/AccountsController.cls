public class AccountsController {
  @AuraEnabled
  public static List<Account> getAccounts() {
    return [SELECT name, industry, Type, NumberOfEmployees, TickerSymbol, Phone
    FROM Account ORDER BY createdDate ASC];
  }
}