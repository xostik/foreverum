var require = {
        baseUrl: '/js',


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
            'app': 'app/app',       // старт приложения
            'routes': 'app/routes', // роуты приложения

            'start': 'app/bootstrap-states/start',
            'user-page': 'app/bootstrap-states/user-page',
            'error': 'app/bootstrap-states/error',

            'layout-manager': 'app/base-views/layout-manager',
            'abstract-layer': 'app/base-views/abstract-layer',
            'abstract-region': 'app/base-views/abstract-region',

            'simple-layout': 'app/views/layouts/simple-layout',

            'start-region': 'app/views/shared/abstract-region',

            'user': 'app/user/user',                //  работа с пользователями
            'user-models': 'app/user/user-models',  //  модели пользователей
            'user-tasks': 'app/user/user-tasks',    //  выполнение запросов о пользователях к серверу

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