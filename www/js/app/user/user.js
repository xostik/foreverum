define(['backbone', 'jquery', 'user-models', 'user-tasks'], function(Backbone, $, Models, userTasks){

    // --------------

    var usersCache = {
        /**
         *  uid: User,
         *  current: CurrentUser
         */
    };

    // --------------

    function getCurrentUser(){
        if(!usersCache.current){
            var promiseUserData = userTasks.getCurrentUserData();

            usersCache.current = new Models.CurrentUser({
                promiseInitData: promiseUserData
            });
        }

        return usersCache.current;
    }

    // --------------

    function getUser(uid){
        if(!usersCache[uid]){
            var promiseUserData = userTasks.getUserData();

            usersCache[uid] = new Models.User({
                promiseInitData: promiseUserData
            });
        }

        return usersCache[uid];
    }

    // --------------

    return {
        getCurrentUser: getCurrentUser,
        getUser: getUser
    };
});