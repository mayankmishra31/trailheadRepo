({
  doInit : function(component, event, helper) {
    var PageURL = decodeURIComponent(window.location.search.substring(1)); //You get the whole decoded URL of the page.
        var URLVariables = PageURL.split('&'); //Split by &amp;amp; so that you get the key value pairs separately in a list
        var ParameterName;        
        var objectName;
        var recordType;
    console.log(URLVariables)
        for (var i = 0; URLVariables.length; i++) {
            ParameterName = URLVariables[i].split('='); //to split the key from the value.      
            if (ParameterName[0] === 'recordType') { //getting the recordType Info
               recordType = (ParameterName[1]  === undefined ? 'Not found' : ParameterName[1]);            }
            else if (ParameterName[0] === 'objectName') { //getting the object Info
                objectName = (ParameterName[1] === undefined ? 'Not found' :ParameterName[1]);
            }
        }
        var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": objectName,
            "recordTypeId" : recordType
        });
        createRecordEvent.fire();
  }
})