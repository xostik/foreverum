define(['backbone'], function( Backbone ){
    var StartRegion = Backbone.Model.extend({}),
        sr = new StartRegion();

    return {
        getStartRegionModel: function(){
            return sr;
        }
    }
});

