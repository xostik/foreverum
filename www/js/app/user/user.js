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

            usersCache.current = new CurrentUser({
                promiseInitData: promiseUserData
            });
        }

        return usersCache.current;
    }

    // --------------

    function getUser(uid){
        if(!usersCache[uid]){
            var promiseUserData = userTasks.getUserData();

            usersCache[uid] = new User({
                promiseInitData: promiseUserData
            });
        }

        return usersCache[uid];
    }

    // --------------

    return {
        currentUser: getCurrentUser,
        getUser: getUser
    };
});