({
    getLabel : function(component, event, helper) {
        var myLabel = component.find("button1").get("v.label");
        
        console.log("TEST->>>>"+myLabel);
        
        component.set("v.buttonLabel", myLabel);
    }
})