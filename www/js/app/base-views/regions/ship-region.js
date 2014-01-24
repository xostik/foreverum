define(['abstract-region', 'underscore', requirePaths['ship-region.tpl'], 'router'], function(Region, _, tpl, router){
    var ShipRegion = Region.extend({
        tagName: 'div',

        id: 'ship-region-wrap',

        template: _.template(tpl),

        destroy: function(){

        },

        render: function(){
            this.$el.html(this.template({}));
            return this.$el;
        }

    });

    ShipRegion.prototype.regionName = 'ship-region';

    return ShipRegion;
});

