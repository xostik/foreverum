define(['backbone', 'jquery'], function(Backbone, $){

    var currentState = {
        layout: undefined,
        regions: {
            /*
             * viewClassName: {viewInstanse, ModelInstanse}
             **/
        }
    };

    // ----------------------------

    function updateState(newState){
        if(!currentState.layout){
            enableState (newState);
        }else{
            if(newState.layout.layoutName != currentState.layout.layoutName){
                disableState (currentState);
                enableState (newState);
            }else{
                var difference = regionListsDifference (currentState.regions, newState.regions);
                disableRegions (difference);

                difference = regionListsDifference (newState.regions, currentState.regions);
                enableRegions (difference);
            }
        }
    }

    // ----------------------------

    function enableState(newState){
        if(!currentState.layout){
            enableLayout();
        }
        if(!currentState.layout || newState.layout.layoutName != currentState.layout.layoutName){
            disableLayout(currentState.layout);
            enableLayout
        }
    }

    // ----------------------------

    function disableLayout(layout){

    }

    // --------------

    return {
        updateState: updateState
    };
});