define(['abstract-region', 'underscore', requirePaths['terminal-region.tpl'], 'router'], function(Region, _, tpl, router){
    var TerminalRegion = Region.extend({
        tagName: 'div',

        id: 'terminal-region-wrap',

        template: _.template(tpl),

        events:{
            'click': 'sendCommand'
        },

        sendCommand: function(e){
            alert('sendCommand');
        },

        destroy: function(){
            $(this.el).off();
        },

        render: function(){
            this.$el.html(this.template({}));
            return this.$el;
        }

    });

    TerminalRegion.prototype.regionName = 'terminal-region';

    return TerminalRegion;
});

