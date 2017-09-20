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

<!-- Js -->
<script src="resources/js/modernizr.js"></script>
<script src="/resources/js/total.js"></script>
<!-- 소켓임포트 -->
<script type="text/javascript" src="resources/sockjs.js"></script>\


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
					<div>
						<h4>나한테 신청한 사람</h4>
							<a href="showfriend">내친구리스트</a>
							<table>
								<c:forEach var="friend" items="${applist}">
									<tr>
										<td>
											${friend.m_name}님이 친구신청 했다.
										</td>
										<td>
											<button id=${"$.friend.m_id"} onclick="consentapp('${friend.m_name}')">친구수락</button>
											<button onclick="declineapp('${friend.m_name}')">친구거절</button>
										</td>
									</tr>
								</c:forEach>
							</table>
						<h4>내가 신청한 사람</h4>	
							<table>
								<c:forEach var="friend" items="${myapplist}">
									<tr>
										<td>
											${friend.m_name}에게 친구신청 했다.
										</td>
										<td>
											<button id=${"friend.m_id"} onclick="cancelapp('${friend.m_name}')">신청취소</button>		
										</td>
									</tr>
								</c:forEach>
							</table>
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
	<script>
		function consentapp(friend_id){
			$.ajax({
				url: "consentfriend",
				method: "get",
				data:{
					friend_id: friend_id
				},
				success: function(result){
					alert('성공함');
				}
				
			});
		}
		
		function declineapp(friend_id){
			$.ajax({
				url: "declineapp",
				method: "get",
				data:{
					friend_id: friend_id
				},
				success: function(result){
					alert('성공');
				}	
			});
		}
		
		//내가 신청
		function cancelapp(friend_id){
			location.href="cancelapp?friend_id="+friend_id;
		
		}
		
		
	</script>
</body>
</html>