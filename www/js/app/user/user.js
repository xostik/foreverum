define(['backbone', 'jquery', 'user-tasks'], function(Backbone, $, userTasks){

    var User = Backbone.Model.extend({
        initialize: function(){
            handlers.onInit.resolved(this);
        }
    } );

    // --------------

    var handlers = {
            onInit: $.Deferred()
        },
        currentUser = new User();

    // --------------

    function getCurrentUser(handler){
        handlers.onInit.done(handler);
    }

    // --------------

    return {
        currentUser: getCurrentUser
    };
});