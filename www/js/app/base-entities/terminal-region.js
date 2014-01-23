define(['backbone'], function( Backbone ){
    var TerminalRegion = Backbone.Model.extend({}),
        tr = new TerminalRegion();

    return {
        getTerminalRegionModel: function(){
            return tr;
        }
    }
});

