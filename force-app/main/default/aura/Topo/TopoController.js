
({
    doInit: function(cmp) {
        Math.random() < 0.5 ? $A.util.addClass(cmp, 'active') : $A.util.addClass(cmp, 'inactive') ;
        
        // var number =Math.random() ;
        // if(number < 0.5){
        //     $A.util.addClass(cmp, 'active');
        // }else{
        //     $A.util.addClass(cmp, 'inactive');
        // }
    
    }
})

