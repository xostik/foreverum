<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="/styles/css/main.css">
</head>
<body>


    <span class="">
        <span>Select files...</span>
        <input id="fileupload" type="file" name="files[]" multiple>
    </span>


    <script>
        var serverData = {
            users: {
                2: {
                    id: 5
                    isOnline: false
                },
                5: {
                    id: 5
                    isOnline: true
                },
                current{
                    id: 5
                    isAuthorization: false
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