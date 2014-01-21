define(['simple-layout', 'start-region', 'layer-manager'], function(SimpleLayout, StartRegion, layerManager){
    var layout = new SimpleLayout(),
        region = new StartRegion();

    layout.setRegion('singleton-region', region);

    layerManager.updateLayout(layout);
});

