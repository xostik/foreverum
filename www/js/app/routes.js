define([], function(){
    var routesList = {
            '': 'start',
            'terminal': 'terminal',
            'user/:uid': 'user-page'//,
            //'*': 'error'
        }
        result = {};

    for(var k in routesList){
        result[k] = getRouteFunction(routesList[k]);
    }

    function getRouteFunction(routeSource){
        return function(){
            require([routeSource], function(run){
                run();
            });
        }
    }

    return result;
});

