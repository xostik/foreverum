define(['simple-layout', 'start-region', 'start-region-view', 'layout-manager'], function(SimpleLayout, StartRegion, StartRegionView, layoutManager){
    return function(){
        var layoutData = {
            layout: SimpleLayout,
            regions: {
                'singleton-region': {
                    model: StartRegion.getStartRegionModel(),
                    view: StartRegionView
                }
            }
        };

        layoutManager.updateLayout(layoutData);
    }
});

