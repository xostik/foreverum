define(['backbone'], function(Backbone){
    var AbstractRegion = Backbone.View.extend({
        destroy: function(){
            throw 'Not implemented destroy in Region view';
        }
    });

    // --------------------

    return AbstractRegion;
});