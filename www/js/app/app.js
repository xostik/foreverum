define(['backbone', 'jquery', 'underscore'], function(Backbone, $, _){
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

    window.User = Backbone.Model.extend({
        defaults: {
            title: '',
            completed: 0,
            id: ''
        },
        updateUser: function(){
             alert('user');
        }
    } );


    window.OtherUser = window.User.extend({
        updateUser: function(){
            alert('OtherUser');
        }
    });
});

