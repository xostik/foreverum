define(['jquery'], function($){

    function getCurrentUserData(){
        var userDataPromise = $.Deferred();

        if(serverData.users.current){
            userDataPromise.resolve(serverData.users.current);
        }else{
            setTimeout(function(){
                userDataPromise.resolve({
                    isAuthorization: true,
                    userName: 'petr',
                    id: 213,
                    isOnline: true
                });
            } , 30);
        }

        return userDataPromise;
    }

    // --------------

    function getUserData(uid){
        var userDataPromise = $.Deferred();

        if(serverData.users[uid]){
            userDataPromise.resolve(serverData.users[uid]);
        }else{
            setTimeout(function(){
                userDataPromise.resolve({
                    userName: 'jina',
                    id: uid,
                    isOnline: true
                });
            } , 30);
        }

        return userDataPromise;
    }

    // --------------

    return {
        getCurrentUserData: getCurrentUserData,
        getUser: getUserData
    };
});