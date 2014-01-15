define(['backbone', 'jquery', 'user-models'], function(Backbone, $, Models){

    // --------------

    var usersCache = {
        /**
         *  uid: User,
         *  current: CurrentUser
         */
    };


    function getSomeUser(id, constructor){
        if(!usersCache[id]){
            var promiseUserData = $.Deferred();

            promiseUserData.done(function(data){

            });
            //initingDataPromise
        }
    }

    // --------------

    function getCurrentUser(){
        if(!usersCache.current){
            //if
            usersCache.current = new CurrentUser();
        }
    }

    // --------------

    function getUser(){

    }

    // --------------

    return {
        currentUser: getCurrentUser,
        getUser: getUser
    };
});