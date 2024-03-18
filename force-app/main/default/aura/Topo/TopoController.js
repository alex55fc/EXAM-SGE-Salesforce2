
({

    doInit: function(cmp) {
        // Lista de identificadores de los topos
        var topoIds = ["topo", "topo1", "topo2", "topo3", "topo4", "topo5", "topo6"];
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
        console.log("topos activos: " + toposActivos);
        var topo = event.target; // Obtener el elemento del DOM que desencadenó el evento

        // Comprobar si el topo tiene la clase 'active'
        var isActive = topo.classList.contains('active');
         
    
        // Crear y lanzar el evento con los puntos correspondientes
        var evt = $A.get("e.c:Puntuacion");
        evt.setParams({
            "molePoint": isActive ? 2 : 0
        });
        evt.fire();
    }
})

