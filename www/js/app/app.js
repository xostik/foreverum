define(['jquery', 'underscore', 'user', 'router'], function($, _, user, router){
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

    var currentUser = user.getCurrentUser();

    currentUser.whenReady(function (readyUser) {
        if (readyUser.isAuthorized || location.pathname == '/') {
            router.start();
            //router.navigate('user/10', {trigger: true});
        } else {
            location.href = '/';
        }
    });

});

