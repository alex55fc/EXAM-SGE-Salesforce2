
({

    doInit: function(cmp) {
        // Lista de identificadores de los topos
        var topoIds = ["topo00", "topo11", "topo22", "topo33", "topo44", "topo55", "topo66"];
        var toposActivos = cmp.get("v.toposActivos");
        // Iterar sobre cada identificador de topo
        topoIds.forEach(function(topoId) {
            var topo = cmp.find(topoId);
            var randomNumberGenerator = cmp.get("c.random");

            randomNumberGenerator.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    var number = response.getReturnValue();
                    if (number < 0.5) {
                        $A.util.addClass(topo, 'active');
                        toposActivos++;
                        console.log("topo activado ");
                        cmp.set("v.toposActivos", toposActivos);
                    } else {
                        $A.util.addClass(topo, 'inactive');
                    }
                }
            });
            $A.enqueueAction(randomNumberGenerator);
        });
    },
    topoClick: function(cmp, event, helper) {
        //ver cuantos topos estan activos
        var toposActivos = cmp.get("v.toposActivos");
        console.log("Topos activos del jugador 2: " + toposActivos);

        var topo = event.target; // Obtener el elemento del DOM que desencadenó el evento
        var isActive = topo.classList.contains('active');
         
        if (isActive) {
            toposActivos--;
            cmp.set("v.toposActivos", toposActivos);
            if(toposActivos == 0){
                var evt = $A.get("e.c:Puntuacion2");
                evt.setParams({
                    "molePoint2": isActive? 1 : 0
                });
                evt.fire();
            }
        }
        else {
            var evt = $A.get("e.c:Puntuacion2");
            evt.setParams({
                "molePoint2":  0                
            });
            evt.fire();
        }
    }
})

