define(['backbone', 'jquery', 'user-tasks'], function(Backbone, $, userTasks){

    var User = Backbone.Model.extend({
        defaults: {
            promiseInitData: undefined,
            onInit: $.Deferred(),
            id: -1,
            isOnline: false
        },

        // -------------------------------------------------

        initialize: function(){
            var _this = this;
            this.get('promiseInitData').done(function(data){
                _this.handlingData(data);
            });
        },

        // -------------------------------------------------

        handlingData: function(data){
            this.set(data);
            this.get('onInit').resolve(this);
        },

        // -------------------------------------------------

        whenReady: function(handler){
            this.get('onInit').done(handler);
        },

        // -------------------------------------------------

        getWhenReadyDeferred: function(){
            return this.get('onInit');
        }
    } );

    // --------------

    var CurrentUser = User.extend({
        defaults: {
            promiseInitData: undefined,
            onInit: $.Deferred(),
            id: -1,
            isOnline: true
        }
    });


    // --------------

    return {
        User: User,
        CurrentUser: CurrentUser
    };
});