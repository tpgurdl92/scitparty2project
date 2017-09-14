<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="description"
	content="Free Bootstrap Themes by 365Bootstrap dot com - Free Responsive Html5 Templates">
<meta name="author" content="www.365bootstrap.com">

<title>D2</title>
<!-- jQuery -->
<script src="resources/js/jquery-2.1.1.js"></script>
<script src="resources/js/masonry.pkgd.min.js"></script>
<script src="resources/js/jquery.flexslider-min.js"></script>
<script src="resources/js/main.js"></script>
<!-- Resource jQuery -->

<!-- Bootstrap Core JavaScript -->
<script src="resources/js/bootstrap.min.js"></script>

<!-- Custom Theme JavaScript -->
<script src="resources/js/agency.js"></script>

<!-- Animated Top -->
<script src="resources/js/jquery.easing.min.js"></script>
<script src="resources/js/classie.js"></script>
<script src="resources/js/cbpAnimatedHeader.js"></script>


<!-- Bootstrap Core CSS -->
<link href="resources/css/bootstrap.min.css" rel="stylesheet">

<!-- Custom CSS -->
<link rel="stylesheet" href="resources/css/reset.css">
<!-- CSS reset -->
<link rel="stylesheet" href="resources/css/style.css">
<link rel="stylesheet" href="resources/css/animated-logo.min.css">
<!-- Logo -->
<link rel="stylesheet" href="resources/css/our-team.css">
<!-- Resource style -->

<!-- Custom Fonts -->
<link href="resources/font-awesome/css/font-awesome.min.css"
	rel="stylesheet" type="text/css">

<!-- Js -->
<script src="resources/js/modernizr.js"></script>
<script src="resources/js/turn.js"></script>
<!-- Modernizr -->

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
        <script src="js/html5shiv.js"></script>
        <script src="js/respond.min.js"></script>
    <![endif]-->

<script type="text/javascript">
	$(function() {
		$("#flipbook").turn({
			width: 1300,
			height: 700			
		});
	});
</script>

<style>
body {
	overflow: hidden;
}

#flipbook {
	/* width: 1300px;
	height: 700px;*/
	margin-top: 20px;
	margin-left: auto;
	margin-right: auto; 
}

#flipbook .page {
	width: 400px;
	height: 300px;
	background-color: white;
	line-height: 300px;
	font-size: 20px;
	text-align: center;
}

#flipbook .page-wrapper {
	-webkit-perspective: 2000px;
	-moz-perspective: 2000px;
	-ms-perspective: 2000px;
	-o-perspective: 2000px;
	perspective: 2000px;
}

#flipbook .hard {
	background: #ccc !important;
	color: #333;
	-webkit-box-shadow: inset 0 0 5px #666;
	-moz-box-shadow: inset 0 0 5px #666;
	-o-box-shadow: inset 0 0 5px #666;
	-ms-box-shadow: inset 0 0 5px #666;
	box-shadow: inset 0 0 5px #666;
	font-weight: bold;
}

#flipbook .odd {
	background: -webkit-gradient(linear, right top, left top, color-stop(0.95, #FFF),
		color-stop(1, #DADADA));
	background-image: -webkit-linear-gradient(right, #FFF 95%, #C4C4C4 100%);
	background-image: -moz-linear-gradient(right, #FFF 95%, #C4C4C4 100%);
	background-image: -ms-linear-gradient(right, #FFF 95%, #C4C4C4 100%);
	background-image: -o-linear-gradient(right, #FFF 95%, #C4C4C4 100%);
	background-image: linear-gradient(right, #FFF 95%, #C4C4C4 100%);
	-webkit-box-shadow: inset 0 0 5px #666;
	-moz-box-shadow: inset 0 0 5px #666;
	-o-box-shadow: inset 0 0 5px #666;
	-ms-box-shadow: inset 0 0 5px #666;
	box-shadow: inset 0 0 5px #666;
}

#flipbook .even {
	background: -webkit-gradient(linear, left top, right top, color-stop(0.95, #fff),
		color-stop(1, #dadada));
	background-image: -webkit-linear-gradient(left, #fff 95%, #dadada 100%);
	background-image: -moz-linear-gradient(left, #fff 95%, #dadada 100%);
	background-image: -ms-linear-gradient(left, #fff 95%, #dadada 100%);
	background-image: -o-linear-gradient(left, #fff 95%, #dadada 100%);
	background-image: linear-gradient(left, #fff 95%, #dadada 100%);
	-webkit-box-shadow: inset 0 0 5px #666;
	-moz-box-shadow: inset 0 0 5px #666;
	-o-box-shadow: inset 0 0 5px #666;
	-ms-box-shadow: inset 0 0 5px #666;
	box-shadow: inset 0 0 5px #666;
}
</style>

</head>
<body>
	<div id="flipbook">
		<div class="hard">Turn.js</div>
		<div class="hard"></div>
		<div>Page 1</div>
		<div>Page 2</div>
		<div>Page 3</div>
		<div>Page 4</div>
		<div class="hard"></div>
		<div class="hard"></div>
	</div>
</body>
</html>