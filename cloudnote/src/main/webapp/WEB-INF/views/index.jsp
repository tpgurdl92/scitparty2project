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
<link href="resources/font-awesome/css/font-awesome.min.css" rel="stylesheet"
	type="text/css">

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
	<%@ include file="menu.jsp" %>

	<!-- /////////////////////////////////////////Header -->
	<header id="page-top">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="o-container">
						<div class="c-slack">
							<span class="c-slack__dot c-slack__dot--a"></span> 
							<span class="c-slack__dot c-slack__dot--b"></span> 
							<span class="c-slack__dot c-slack__dot--c"></span> 
							<span class="c-slack__dot c-slack__dot--d"></span>
						</div>
					</div>
					<div class="intro-text">
						<div class="intro-lead-in">Welcome To Cloud Note!</div>
						<div class="intro-heading">It's Nice To Meet You</div>
					</div>
					<a class="btn btn-1 btn-sm" href="join">Join</a> 
					<a class="btn btn-1 btn-sm" href="login">Login</a>
				</div>
			</div>
		</div>
	</header>
	<!-- Header -->

	<!-- /////////////////////////////////////////Footer -->
	<footer>
		<div class="wrap-footer">
			<div class="container">
				<div class="row">
					<div class="col-md-4 col-footer footer-1">
						<div class="heading">
							<h4>About Us</h4>
						</div>
						<div class="content">
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
								sed euismod tincidunt ut laoreet dolore magna aliquam erat
								volutpat. Ut wisi enim ad. Lorem ipsum dolor sit amet,
								consectetuer adipiscing elit, dolore magna aliquam erat
								volutpat.</p>
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
								sed euismod tincidunt ut laoreet dolore magna aliquam erat
								volutpat. Ut wisi enim ad. Lorem ipsum dolor sit amet,
								consectetuer adipiscing elit, sed euismod tincidunt ut laoreet
								dolore magna aliquam erat volutpat. Ut wisi enim ad</p>
						</div>
					</div>
					<div class="col-md-4 col-footer footer-2">
						<div class="heading">
							<h4>Your Email</h4>
						</div>
						<div class="content">
							<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
								sed euismod tincidunt ut laoreet dolore magna aliquam erat
								volutpat. Consectetuer adipiscing elit, dolore magna aliquam
								erat volutpat.</p>
							<div class="subcribe-form">
								<form method="get" action="/search" id="subcribe">
									<div class="form-group">
										<input type="text" class="form-control input-lg"
											name="subcribe" placeholder="Enter your email address...  "
											required="required" />
									</div>
									<button type="submit" name="Submit" class="btn btn-4 f-left">Subcribe</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="copyright">
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<p>
							Copyright &copy; Your Website - Designed by <a
								href="https://www.365bootstrap.com">365BOOTSTRAP</a>
						</p>
					</div>
					<div class="col-md-4">
						<ul class="list-inline">
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
							<li><a href="#"><i class="fa fa-google"></i></a></li>
						</ul>
					</div>
					<div class="col-md-4">
						<ul class="list-inline">
							<li><a href="#">Privacy Policy</a></li>
							<li><a href="#">Terms of Use</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
	<!-- Footer -->


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