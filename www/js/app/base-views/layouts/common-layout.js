define(['abstract-layout', 'underscore', requirePaths['common-layout.tpl'], 'inheritance'], function( Layout, _, tpl ){
    var CommonLayout = function(){
        _.superClass( CommonLayout, this );

        this.$root = $( _.template( tpl )( {} ) );

        this.regionList = {
            //'some-region-name': undefined|regionInstance, ...
            'main-region': undefined
        };
    };

    _.inherit( CommonLayout, Layout );

    CommonLayout.prototype.layoutName = 'common-layout';

    return CommonLayout;
});