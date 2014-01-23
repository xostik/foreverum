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
            'router': 'app/router', // роутер приложения

            'start': 'app/bootstrap-states/start',
            'terminal': 'app/bootstrap-states/terminal',
            'user-page': 'app/bootstrap-states/user-page',
            'error': 'app/bootstrap-states/error',

            'layout-manager': 'app/base-views/layout-manager',
            'abstract-layout': 'app/base-views/abstract-layout',
            'abstract-region': 'app/base-views/abstract-region',

            'simple-layout': 'app/base-views/layouts/simple-layout',

            'start-region': 'app/base-entities/start-region',
            'terminal-region': 'app/base-entities/terminal-region',

            'start-region-view': 'app/base-views/regions/start-region',
            'terminal-region-view': 'app/base-views/regions/terminal-region',

            'user': 'app/user/user',                //  работа с пользователями
            'user-models': 'app/user/user-models',  //  модели пользователей
            'user-tasks': 'app/user/user-tasks',    //  выполнение запросов о пользователях к серверу

            // УТИЛИТЫ
            'inheritance': 'app/utils/inheritance',


            // СТОРОННИЕ СКРИПТЫ
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
        'simple-layout.tpl': 'text!/js/app/base-templates/simple-layout.tpl.html',

        'start-region.tpl': 'text!/js/app/base-templates/start-region.tpl.html',
        'terminal-region.tpl': 'text!/js/app/base-templates/terminal-region.tpl.html'

    };