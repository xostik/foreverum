define(['backbone', 'routes'], function (Backbone, routes) {
    var Router = Backbone.Router.extend({
            routes: routes
        }),
        router = new Router();

    // ----------------------------

    function start(){
        Backbone.history.start({pushState: true});
    }

    // ----------------------------

    function getRouter(){
        return router;
    }

    // ----------------------------

    return {
        getRouter: getRouter,
        start: start
    };
});