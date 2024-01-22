
({
    doInit: function(cmp) {
        var topo = cmp.find("topo");
        //Math.random() < 0.5 ? $A.util.addClass(topo, 'active') : $A.util.addClass(topo, 'inactive') ;
        
        var number =Math.random() ;
        if(number < 0.5){
            $A.util.addClass(cmp, 'active');
            cmp.set("v.isTopo",true)
        }else{
            $A.util.addClass(cmp, 'inactive');
            cmp.set("v.isTopo",false)
        }
    
    },
    topoClick: function(cmp, event, helper) {
        // this function trigger an event
        // fire the event using that event name
        var isTopo = cmp.get("v.isTopo");
        var evt = $A.get("e.c:Puntuacion");
        evt.setParams({
            "molePoints": isTopo ? 2 : 0 
        });
        evt.fire();
})

