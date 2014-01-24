<!DOCTYPE html>
<html>
<head>
    <link href='http://fonts.googleapis.com/css?family=Exo+2:400,100,100italic,300,300italic,400italic,600,600italic,700,700italic&subset=cyrillic,latin' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="/styles/css/main.css">
</head>
<body>

    <div id="base-layout-wrap">
        <div id="singleton-region"></div>
    </div>

    <script>
        var serverData = {
            users: {
                2: {
                    id: 5,
                    isOnline: false
                },
                5: {
                    id: 5,
                    isOnline: true
                },
                current:{
                    id: 5,
                    isAuthorized: false
                }
            }
        };
    </script>
    <script src="/js/app/config.js"></script>
    <script src="/js/lib/require/require.js"></script>
    <script>
        require(['app'], function(app){});
    </script>

</body>
</html>