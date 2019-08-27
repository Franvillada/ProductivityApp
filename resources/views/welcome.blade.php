<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>
        <link rel="stylesheet" href="css/app.css">
        <link rel="stylesheet" href="css/lord.css">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" href="https://use.typekit.net/umx2par.css">
    </head>
    <body>
        <div class="welcome-container">
            <a href="/aprendizaje" class="learn-button">
                Aprendizaje
            </a>
            <a href="/trabajo" class="work-button">
                Trabajo
            </a>
        </div>
        <script type="text/javascript" src="js/app.js"></script>
    </body>
</html>
