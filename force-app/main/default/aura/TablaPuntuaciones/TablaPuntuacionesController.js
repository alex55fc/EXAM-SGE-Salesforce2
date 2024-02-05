({
    myAction : function(component, event, helper) {

    },
    doInit: function(cmp) {
    
        var randomNumberGenerator = cmp.get("c.getListScores");

        randomNumberGenerator.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var number = response.getReturnValue();
                
            }
        });

        $A.enqueueAction(randomNumberGenerator);

    }
})
