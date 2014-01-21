define([], function(){
    var AbstractLayout = function(){
        this.layoutName = 'Abstract layout';
        this.$root = $('<div>');

        this.regions = {
            //'some-region-name': undefined|regionInstance, ...
        };
    };

    // --------------------

    AbstractLayout.prototype.layoutName = function(){
         return this.layoutName;
    };

    // --------------------

    AbstractLayout.prototype.regions = function(){
        var result = {};
        for(var k in this.regions){
            if(this.regions[k]){
                result[k] = this.regions[k];
            }
        }
        return result;
    };

    // --------------------

    AbstractLayout.prototype.destroy = function(){
        var notEmptyRegions = this.regions();
        for(var k in notEmptyRegions){
            notEmptyRegions[k].destroy();
        }

        this.$root.remove();
    };

    // --------------------

    AbstractLayout.prototype.enableRegions = function(regions){
        for(var k in regions){
            if(!this.regions.hasOwnProperty(k)){
                throw "AbstractLayout.enableRegions - wrong region name: " + k;
            }

            if(this.regions[k]){
                this.regions[k].destroy();
            }

            this.regions[k] = regions[k];

            $('#'+k, this.$root).html(this.regions[k].render());
        }
    };

    // --------------------

    AbstractLayout.prototype.disableRegions = function(regions){
        for(var k in regions){
            if(!this.regions.hasOwnProperty(k)){
                throw "AbstractLayout.enableRegions - wrong region name: " + k;
            }

            if(this.regions[k]){
                this.regions[k].destroy();
            }
        }
    };


    // --------------------

    AbstractLayout.prototype.render = function(){
        return this.$root;
    };

    // --------------------

    return AbstractLayout;
});