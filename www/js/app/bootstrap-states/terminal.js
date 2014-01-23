define(['simple-layout', 'terminal-region', 'terminal-region-view', 'layout-manager'], function(SimpleLayout, TerminalRegion, TerminalRegionView, layoutManager){
    var layoutData = {
        layout: SimpleLayout,
        regions: {
            'singleton-region': {
                model: TerminalRegion.getTerminalRegionModel(),
                view: TerminalRegionView
            }
        }
    };

    layoutManager.updateLayout(layoutData);
});