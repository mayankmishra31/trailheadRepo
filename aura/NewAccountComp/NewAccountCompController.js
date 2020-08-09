({
    handleSubmit : function(component, event, helper) {
        event.preventDefault(); // Prevent default submit
        var fields = event.getParam("fields");
        fields["Description"] = 'This is a default description'; // Prepopulate Description field
        component.find('createAccountForm').submit(fields); // Submit form
    },
    
    toggleRequiredMark: function (component, event, helper) {
    	
        
        if(component.find("ind").get("v.value") == 'Banking'){
            console.log(component.find("ind").get("v.value"));
            
             var toggleText = component.find("txt");
        	$A.util.toggleClass(toggleText, "customRequired");
        }
        else{
            var toggleText = component.find("txt");
        	$A.util.removeClass(toggleText, "customRequired");
        }
        
    
    	
    }
})