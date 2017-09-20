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
					<a href="checkapp">요청관리</a>
					<div>
						<form action="searchfriend" method="get">
							<table id="table">
								<tr>	
									<td>
										<select id="searchType" name="searchType">
												<option ${searchType == 'id' ? 'selected = "selected"' : ''} value="id">아이디</option>
												<option ${searchType == 'name' ? 'selected = "name"' : ''} value="publisher">이름</option>
												<option ${searchType == 'cellphone' ? 'selected = "selected"' : ''} value="cellphone">핸드폰번호</option>
										</select>
									</td>
									<td>
										<input type="text" id="keyword" name="keyword"/>
									</td>
									<td>
										<input type="submit" id="btnSearch" value="검색"/>
									</td>
									 
								</tr>
								
							</table>
						</form>
					</div>
						<c:if test="${friend==null }">
							검색 결과가 없습니다.
						</c:if>
						<c:if test="${friend!=null }">
							${friend.m_name}
							<img src="./resources/profileimage/${friend.m_savedfilename}" style="width:200px; height:200px">
								<button id="appbutton" onclick="friendapply('${friend.m_id}')">친구신청 </button>
								<div>
									<c:if test="${booklist!=null }">
										<h3>최근 업데이트 목록</h3>
										<table>
											<tr>
												<c:forEach var="book" items="${booklist}">
													<td>
														<div>
															<a href="#"><img src="./resources/images/book-icon_1.png"></a>
															<h5>${book.b_title}</h5>
														</div>				
									
													</td>
												</c:forEach>
												
											</tr>
										</table>						
									</c:if>
								</div>	
						</c:if>
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
		$(function(){
			//검색버튼 누르기
			$('#btnSearch').click(function(){
				
				
			});
			
			
		});
		
		//친구신청
		function friendapply(friend_id){
			alert('일단드루와');
			
			alert(friend_id);
			$.ajax({
				url: "applyfriend",
				method: "get",
				data:{
					friend_id: friend_id
				},
				success: function (result){
					$('#appbutton').text('신청완료');
				}
			});
		}
	</script>
</body>
</html>