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

<script type="text/javascript">
	function plusOpen() {
		var popUrl = "plusPop";
		var popOption = "width=370, height=360, resizable=no, scrollbars=no, status=no;";    //팝업창 옵션(optoin)

		window.open(popUrl,"",popOption);
	}
</script>

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
<!-- Modernizr -->

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
        <script src="js/html5shiv.js"></script>
        <script src="js/respond.min.js"></script>
    <![endif]-->
</head>
<body>
	<!-- /////////////////////////////////////////Navigation -->
	<%@ include file="menu.jsp"%>
	<!-- /////////////////////////////////////////Content -->
	<div id="page-content" class="index-page">

		<!-- ////////////Content Box 02 -->
		<section id="new" class="box-content box-2 box-style">
			<div class="container">
				<div class="row">
					<blockquote style="font-size: 40px">Let's use it conveniently whenever and wherever.<br>
					[For Developers, By Developers = D2]
					</blockquote>
				</div>
			</div>
		</section>

		<!-- ////////////Content Box 03 -->
		<section id="about" class="box-content box-3">
			<div class="container">
				<div class="row heading" style="margin-bottom: 20px;">
					<div class="col-lg-12">
						<h2>Bookshelf</h2>
						<hr>
						<div class="intro" style="margin-bottom: 30px;">Cloud Note</div>
						<div style="float: right;">
							<button type="button" class="btn btn-2" onclick="javascript:plusOpen()">Plus</button>
							<button type="button" class="btn btn-2">Delete</button>
						</div>
					</div>
				</div>
				<div style="float: right;">
					
				</div>
				<div class="row">
					<div class="col-sm-3 box-item">
						<div class="wrap-img">
							<a href="inBookshelf"><img src="resources/images/bookshelf_icon.png" /></a>
						</div>
						<h3 class="blue">title</h3>
					</div>
					<div class="col-sm-3 box-item">
						<div class="wrap-img">
							<a href="inBookshelf"><img src="resources/images/bookshelf_icon.png" /></a>
						</div>
						<h3 class="yellow">title</h3>
					</div>
					<div class="col-sm-3 box-item">
						<div class="wrap-img">
							<a href="inBookshelf"><img src="resources/images/bookshelf_icon.png" /></a>
						</div>
						<h3 class="red">title</h3>
					</div>
					<div class="col-sm-3 box-item">
						<div class="wrap-img">
							<a href="inBookshelf"><img src="resources/images/bookshelf_icon.png" /></a>
						</div>
						<h3 class="green">Sharing</h3>
					</div>
				</div>	
			</div>
		</section>
	</div>
	
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
</body>
</html>