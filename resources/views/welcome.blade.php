<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Yuni Ya Machampe - Education is the Destiny</title>
    <!-- META TAGS -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Education master is one of the best educational html template, it's suitable for all education websites like university,college,school,online education,tution center,distance education,computer education">
    <meta name="keyword" content="education html template, university template, college template, school template, online education template, tution center template">
    <!-- FAV ICON(BROWSER TAB ICON) -->
    <link rel="shortcut icon" href="images/fav.ico" type="image/x-icon">
    <!-- GOOGLE FONT -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700%7CJosefin+Sans:600,700" rel="stylesheet">
    <!-- FONTAWESOME ICONS -->
    <link rel="stylesheet" href="{{URL::to('css/font-awesome.min.css')}}">
    <!-- ALL CSS FILES -->
    <link href="{{URL::to('css/materialize.css')}}" rel="stylesheet">
    <link href="{{URL::to('css/bootstrap.css')}}" rel="stylesheet" />
    <link href="{{URL::to('css/style.css')}}" rel="stylesheet" />
    <!-- RESPONSIVE.CSS ONLY FOR MOBILE AND TABLET VIEWS -->
    <link href="{{URL::to('css/style-mob.css')}}" rel="stylesheet" />
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
	{{URL::to('<script src="js/html5shiv.js"></script>')}}
	{{URL::to('<script src="js/respond.min.js"></script>')}}
	<![endif]-->
        @vite(['resources/js/app.js'])
    </head>
    <body>
        <div id="app">
            <router-view></router-view>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
        <!--Import jQuery before materialize.js-->
        <script src="{{URL::to('js/main.min.js')}}"></script>
        <script src="{{URL::to('js/bootstrap.min.js')}}"></script>
        <script src="{{URL::to('js/materialize.min.js')}}"></script>
        <script src="{{URL::to('js/custom.js')}}"></script>
    </body>
</html>
