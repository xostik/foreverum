define(['backbone'], function( Backbone ){
    var ShipRegion = Backbone.Model.extend({}),
        sr = new ShipRegion();

    return {
        getModel: function(){
            return sr;
        }
    }
});

