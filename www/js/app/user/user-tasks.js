define(['jquery'], function($){

    function getCurrentUserData(onTaskReady){
        setTimeout(function(){
            onTaskReady({
                isAuthorization: true,
                userName: 'petr',
                id: 213,
                isOnline: true
            });
        } , 30);
    }

    // --------------

    function getUserData(uid, onTaskReady){
        setTimeout(function(){
            onTaskReady({
                userName: 'petr',
                id: uid,
                isOnline: true
            });
        } , 30);
    }

    // --------------

    return {
        getCurrentUserData: getCurrentUserData,
        getUser: getUserData
    };
});