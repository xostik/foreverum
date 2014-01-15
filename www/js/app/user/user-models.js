define(['backbone', 'jquery', 'user-tasks'], function(Backbone, $, userTasks){

    var User = Backbone.Model.extend({
        defaults: {
            initingDataPromise: undefined,
            onInit: $.Deferred(),
            id: -1,
            isOnline: false
        },
        initialize: function(){
            var _this = this;
            this.initingDataPromise.done(function(data){
                _this.handlingData(data);
            });

        },
        handlingData: function(data){
            for(var k in data){
                this.set({k: data[k]});
            }

            _this.onInit.resolved(_this);
        }
    } );

    // --------------

    var CurrentUser = User.extend({
        defaults: {
            isOnline: true
        }
    });


    // --------------

    return {
        User: User,
        CurrentUser: CurrentUser
    };
});