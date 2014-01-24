define([
    'common-layout',
    'ship-region',
    'ship-region-view',
    'layout-manager'
], function(
    CommonLayout,
    ShipRegion,
    ShipRegionView,
    layoutManager
){
    return function(){
        var layoutData = {
            layout: CommonLayout,
            regions: {
                'main-region': {
                    model: ShipRegion.getModel(),
                    view: ShipRegionView
                }
            }
        };

        layoutManager.updateLayout(layoutData);
    };
});