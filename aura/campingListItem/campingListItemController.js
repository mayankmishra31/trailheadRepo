({
    clickCreateCamping: function(component, event, helper) {

        // Simplistic error checking
        var validCamping = true;

        // Name must not be blank
        var nameField = component.find("campname");
        var campname = nameField.get("v.value");
        
        if ($A.util.isEmpty(campname)){
            validCamping = false;
            nameField.set("v.errors", [{message:"Camping name can't be blank."}]);
        }
        else {
            nameField.set("v.errors", null);
        }
        
        if ($A.util.isEmpty(component.find("campQty").get("v.value"))){
            validCamping = false;
            component.find("campQty").set("v.errors", [{message:"Camping Quantity can't be blank."}]);
        }
        else {
            component.find("campQty").set("v.errors", null);
        }
        if ($A.util.isEmpty(component.find("campPrice").get("v.value"))){
            validCamping = false;
            component.find("campPrice").set("v.errors", [{message:"Camping Price can't be blank."}]);
        }
        else {
            component.find("campPrice").set("v.errors", null);
        }
        
        

        // ... hint: more error checking here ...

        // If we pass error checking, do some real work
        if(validCamping){
            // Create the new expense
            var newCamping = component.get("v.newItem");
            console.log("Create Camping: " + JSON.stringify(newCamping));
            helper.createCamping(component, newCamping);
        }
    }
})

({
    packItem: function(component, event, helper) {
        var a = component.get("v.item",true);
        a.Packed__c = true;
        component.set("v.item",a);
        var btnClicked = event.getSource();
        btnClicked.set("v.disabled",true);
    }
})