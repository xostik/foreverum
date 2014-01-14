var require = {
        baseUrl: 'js',
        shim: {
            jquery: {
                exports: 'jquery'
            },
            underscore: {
                exports: '_'
            },
            backbone: {
                exports: 'Backbone',
                deps: ['underscore', 'jquery']
            },
            'jquery.ui.widget': {
                deps: ['jquery']
            },
            'google-geocomplite': {
                exports: 'google'
            }
        },


        paths: {
            app: 'app/app', // старт приложения

            // вспомогательные скрипты
            'jquery': 'http://code.jquery.com/jquery-1.10.2.min',
            'text': 'lib/require/text.require',
            'underscore': 'lib/underscore/underscore',
            'backbone': 'lib/backbone/backbone',
            'jquery.ui.widget': 'lib/file-uploader/jquery.ui.widget',
            'fileuploader': 'lib/file-uploader/jquery.fileupload',
            'google-geocomplite': 'http://maps.googleapis.com/maps/api/js?sensor=false&amp;libraries=places'
        },


        urlArgs: 'bust=' + (new Date()).getTime()
    },


    requirePaths = {
        // шаблоны
        //'custom-select.tpl': 'text!Content/templates/site/custom-select.tpl.html',


    };