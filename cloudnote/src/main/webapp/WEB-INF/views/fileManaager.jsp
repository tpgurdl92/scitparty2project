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
<link href="resources/font-awesome/css/font-awesome.min.css"
	rel="stylesheet" type="text/css">
<link rel="stylesheet" href="resources/css/chosen.min.css">

<script src="./resources/js/jquery-3.2.1.js"></script>
<!-- Js -->
<script src="./resources/js/modernizr.js"></script>
<script src="./resources/js/total.js"></script>
<!-- 소켓임포트 -->
<script type="text/javascript" src="./resources/sockjs.js"></script>


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

		<!-- ////////////Content Box 01 -->
		<section id="services" class="box-content box-1">
			<div class="container">
				<div class="row heading">
					<div class="col-lg-12">
						<h2>Join</h2>
						<hr>
						<div class="intro">Cloud Note</div>
					</div>
				</div>
				<div class="row">
					<h2><a name="optgroup-support" class="anchor" href="#optgroup-support">&lt;optgroup&gt; Support</a></h2>
			      <div class="side-by-side clearfix">
			        <div>
			          <em>Single Select with Groups</em>
			          <select data-placeholder="Your Favorite Football Team" class="chosen-select" tabindex="5">
			            <option value=""></option>
			            <optgroup label="NFC EAST">
			              <option>Dallas Cowboys</option>
			              <option>New York Giants</option>
			              <option>Philadelphia Eagles</option>
			              <option>Washington Redskins</option>
			            </optgroup>
			            <optgroup label="NFC NORTH">
			              <option>Chicago Bears</option>
			              <option>Detroit Lions</option>
			              <option>Green Bay Packers</option>
			              <option>Minnesota Vikings</option>
			            </optgroup>
			            <optgroup label="NFC SOUTH">
			              <option>Atlanta Falcons</option>
			              <option>Carolina Panthers</option>
			              <option>New Orleans Saints</option>
			              <option>Tampa Bay Buccaneers</option>
			            </optgroup>
			            <optgroup label="NFC WEST">
			              <option>Arizona Cardinals</option>
			              <option>St. Louis Rams</option>
			              <option>San Francisco 49ers</option>
			              <option>Seattle Seahawks</option>
			            </optgroup>
			            <optgroup label="AFC EAST">
			              <option>Buffalo Bills</option>
			              <option>Miami Dolphins</option>
			              <option>New England Patriots</option>
			              <option>New York Jets</option>
			            </optgroup>
			            <optgroup label="AFC NORTH">
			              <option>Baltimore Ravens</option>
			              <option>Cincinnati Bengals</option>
			              <option>Cleveland Browns</option>
			              <option>Pittsburgh Steelers</option>
			            </optgroup>
			            <optgroup label="AFC SOUTH">
			              <option>Houston Texans</option>
			              <option>Indianapolis Colts</option>
			              <option>Jacksonville Jaguars</option>
			              <option>Tennessee Titans</option>
			            </optgroup>
			            <optgroup label="AFC WEST">
			              <option>Denver Broncos</option>
			              <option>Kansas City Chiefs</option>
			              <option>Oakland Raiders</option>
			              <option>San Diego Chargers</option>
			            </optgroup>
			          </select>
			        </div>
				</div>	
			</div>
		</section>
	</div>
	
	<!-- jQuery -->
	
	<script src="./resources/js/masonry.pkgd.min.js"></script>
	<script src="./resources/js/jquery.flexslider-min.js"></script>
	<script src="./resources/js/main.js"></script>
	<!-- Resource jQuery -->

	<!-- Bootstrap Core JavaScript -->
	<script src="./resources/js/bootstrap.min.js"></script>

	<!-- Custom Theme JavaScript -->
	<script src="./resources/js/agency.js"></script>

	<!-- Animated Top -->
	<script src="./resources/js/jquery.easing.min.js"></script>

	<script src="./resources/js/cbpAnimatedHeader.js"></script>
	<script  src="./resources/js/chosen.jquery.min.js"></script>
	<script src="./resources/js/chosen.proto.min.js"></script>
	<script>
		$(function(){
			$(".chosen-select").chosen();
		});
		</script>
</body>
</html>