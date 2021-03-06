define(['abstract-region', 'underscore', requirePaths['start-region.tpl'], 'router'], function(Region, _, tpl, router){
    var StartRegion = Region.extend({
        tagName: 'form',

        id: 'start-region-wrap',

        template: _.template(tpl),

        events:{
            'submit': 'startGame'
        },

        initialize: function(){
            $(window).on('keydown', this.startGame);
        },

        startGame: function(e){
            e.preventDefault();
            router.getRouter().navigate('terminal', {trigger: true});
        },

        destroy: function(){
            this.$el.off();
            $(window).off('keydown', this.startGame);
        },

        render: function(){
            this.$el.html(this.template({}));
            return this.$el;
        }

    });

    StartRegion.prototype.regionName = 'start-region';

    return StartRegion;
});

