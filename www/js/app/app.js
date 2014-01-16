define(['backbone', 'jquery', 'underscore', 'user', 'routes'], function(Backbone, $, _, user, routes){
    /*$('#fileupload').fileupload({
        url: '/php-plagins/jQuery-File-Upload-master/index.php',
        dataType: 'json',
        done: function (e, data) {
            debugger;
            $.each(data.result.files, function (index, file) {
                $('<p/>').text(file.name).appendTo('#files');
            });
        },
        progressall: function (e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            console.log(
                progress + '%'
            );
        }
    });              */

    var Router = Backbone.Router.extend({

        }),
        router = new Router(),
        currentUser = user.getCurrentUser();

    currentUser.whenReady(function(readyUser){
        if(readyUser.isAuthorized || location.pathname == '/'){
            Backbone.history.start({pushState: true});
        }else{
            location.href = '/';
        }
    });

});

