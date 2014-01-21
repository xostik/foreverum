define(['backbone', 'jquery'], function(Backbone, $){

    var currentLayout = undefined;

    // ----------------------------

    function updateLayout(newLayout){
        if(!currentLayout){
            enableLayout (newLayout);
        }else{
            if(newLayout.layoutName() != currentLayout.layoutName()){
                currentLayout.destroy();
                enableLayout (newLayout);
            }else{
                var difference = regionListsDifference (currentLayout.regions(), newLayout.regions());
                currentLayout.disableRegions (difference);

                difference = regionListsDifference (newLayout.regions(), currentState.regions());
                currentLayout.enableRegions (difference);
            }
        }
    }

    // ----------------------------

    function enableLayout(layout){
        $('#base-layout-wrap')
            .html(layout.render());

        currentLayout = layout;
    }

    // --------------

    function regionListsDifference(r1, r2){
         var result = {};

        for(var k in r1){
            if(!r2[k]){
                result[k] = r1[k];
            }
        }

        return result;
    }

    // --------------

    return {
        currentLayout: currentLayout,
        updateLayout: updateLayout
    };
});