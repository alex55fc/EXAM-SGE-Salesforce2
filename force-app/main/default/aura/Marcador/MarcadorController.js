({
    myAction : function(component, event, helper) {

    },
    manejarEvento : function(component, event, helper) {
        var pointsToAdd = event.getParam("molePoint");
        var marcador = component.get("v.marcador");
        if (pointsToAdd == 0){
            marcador = 0; 
        }else{
            marcador += pointsToAdd;
        }
        component.set("v.marcador", marcador);
    },
    guardarScore : function(component, event, helper) {
        var insertScoreApex = cmp.get("c.insertScore");

        insertScoreApex.setCallback(this, function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                alert("exito")
            }
        });

        insertScoreApex.setParams({
             "nombre": "vuestronombre",
             "puntuacion": component.get("v.marcador")
         });

        $A.enqueueAction(randomNumberGenerator);

    },
})
