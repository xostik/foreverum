define([], function(){

    return {
        '/': function(){
            require('start');
        },
        'user/:uid': 'user-page'
    };
});

