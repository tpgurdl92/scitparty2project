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
<!-- Modernizr -->

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
					<blockquote style="font-size: 40px">
						Let's use it conveniently whenever and wherever.<br> [For
						Developers, By Developers = D2]
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
						<div class="intro" style="margin-bottom: 0px;">Cloud Note</div>
						<div style="float: right;">
							<button type="button" class="btn btn-2"
								onclick="javascript:plusOpen()" style="margin-bottom: 30px;">Plus</button>
							<button type="button" class="btn btn-2" style="margin-bottom: 30px;">Delete</button>
						</div>
					</div>
				</div>
				<div style="float: right;"></div>
				<div class="row">
					<div class="col-sm-3 box-item">
						<div class="cd-see-all"
							style="margin-top: 0px; margin-bottom: 0px;">
							<div class="wrap-img">
								<a href="book"><img src="resources/images/book-icon_3.png" /></a>
							</div>
							<h3 class="blue">title</h3>
						</div>
					</div>
					<div class="col-sm-3 box-item">
						<div class="cd-see-all"
							style="margin-top: 0px; margin-bottom: 0px;">
							<div class="wrap-img">
								<a href="book"><img src="resources/images/book-icon_2.png" /></a>
							</div>
							<h3 class="yellow">title</h3>
						</div>
					</div>
					<div class="col-sm-3 box-item">
						<div class="cd-see-all"
							style="margin-top: 0px; margin-bottom: 0px;">
							<div class="wrap-img">
								<a href="book"><img src="resources/images/book-icon_4.png" /></a>
							</div>
							<h3 class="red">title</h3>
						</div>
					</div>
					<div class="col-sm-3 box-item">
						<div class="cd-see-all"
							style="margin-top: 0px; margin-bottom: 0px;">
							<div class="wrap-img">
								<a href="#0"><img src="resources/images/book-icon_5.png" /></a>
							</div>
							<h3 class="green">title</h3>
						</div>
					</div>
				</div>
			</div>
			<!-- 책 클릭 시 뜨는 내용 -->
			<div class="cd-testimonials-all">
				<div class="cd-testimonials-all-wrapper">
					<ul>
						<li class="cd-testimonials-item">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Odit totam saepe iste maiores neque animi molestias nihil illum
								nisi temporibus.</p>

							<div class="cd-author">
								<img src="resources/images/avatar-1.jpg" alt="Author image">
								<ul class="cd-author-info">
									<li>MyName</li>
									<li>CEO, CompanyName</li>
								</ul>
							</div> <!-- cd-author -->
						</li>
						<li class="cd-testimonials-item">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Labore nostrum nisi, doloremque error hic nam nemo doloribus
								porro impedit perferendis. Tempora, distinctio hic suscipit. At
								ullam eaque atque recusandae modi fugiat voluptatem laborum
								laboriosam rerum, consequatur reprehenderit omnis, enim pariatur
								nam, quidem, quas vel reiciendis aspernatur consequuntur.
								Commodi quasi enim, nisi alias fugit architecto, doloremque,
								eligendi quam autem exercitationem consectetur.</p>

							<div class="cd-author">
								<img src="resources/images/avatar-2.jpg" alt="Author image">
								<ul class="cd-author-info">
									<li>MyName</li>
									<li>CEO, CompanyName</li>
								</ul>
							</div> <!-- cd-author -->
						</li>
						<li class="cd-testimonials-item">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Exercitationem quibusdam eveniet, molestiae laborum voluptatibus
								minima hic quasi accusamus ut facere, eius expedita, voluptatem?
								Repellat incidunt veniam quaerat, qui laboriosam dicta. Quidem
								ducimus laudantium dolorum enim qui at ipsum, a error.</p>

							<div class="cd-author">
								<img src="resources/images/avatar-3.jpg" alt="Author image">
								<ul class="cd-author-info">
									<li>MyName</li>
									<li>CEO, CompanyName</li>
								</ul>
							</div> <!-- cd-author -->
						</li>
						<li class="cd-testimonials-item">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Libero voluptates officiis tempore quae officia! Beatae quia
								deleniti cum corporis eos perferendis libero reiciendis nemo
								iusto accusamus, debitis tempora voluptas praesentium
								repudiandae laboriosam excepturi laborum, nisi optio repellat
								explicabo, incidunt ex numquam. Ullam perferendis officiis harum
								doloribus quae corrupti minima quia, aliquam nostrum expedita
								pariatur maxime repellat, voluptas sunt unde, inventore.</p>

							<div class="cd-author">
								<img src="resources/images/avatar-4.jpg" alt="Author image">
								<ul class="cd-author-info">
									<li>MyName</li>
									<li>CEO, CompanyName</li>
								</ul>
							</div> <!-- cd-author -->
						</li>
						<li class="cd-testimonials-item">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Odit totam saepe iste maiores neque animi molestias nihil illum
								nisi temporibus.</p>

							<div class="cd-author">
								<img src="resources/images/avatar-5.jpg" alt="Author image">
								<ul class="cd-author-info">
									<li>MyName</li>
									<li>CEO, CompanyName</li>
								</ul>
							</div> <!-- cd-author -->
						</li>
						<li class="cd-testimonials-item">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Perspiciatis quia quas, quis illo adipisci voluptate ex harum
								iste commodi nulla dolor. Eius ratione quod ab!</p>

							<div class="cd-author">
								<img src="resources/images/avatar-6.jpg" alt="Author image">
								<ul class="cd-author-info">
									<li>MyName</li>
									<li>CEO, CompanyName</li>
								</ul>
							</div> <!-- cd-author -->
						</li>
						<li class="cd-testimonials-item">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Consequatur, dignissimos iure rem fugiat consequuntur officiis.</p>

							<div class="cd-author">
								<img src="resources/images/avatar-1.jpg" alt="Author image">
								<ul class="cd-author-info">
									<li>MyName</li>
									<li>CEO, CompanyName</li>
								</ul>
							</div> <!-- cd-author -->
						</li>
						<li class="cd-testimonials-item">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								At temporibus tempora necessitatibus reiciendis provident
								deserunt maxime sit id. Dicta aut voluptatibus placeat quibusdam
								vel, dolore.</p>

							<div class="cd-author">
								<img src="resources/images/avatar-2.jpg" alt="Author image">
								<ul class="cd-author-info">
									<li>MyName</li>
									<li>CEO, CompanyName</li>
								</ul>
							</div> <!-- cd-author -->
						</li>
						<li class="cd-testimonials-item">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Corporis iusto sapiente, excepturi velit, beatae possimus est
								tenetur cumque fugit tempore dolore fugiat! Recusandae, vel
								suscipit? Perspiciatis non similique sint suscipit officia illo,
								accusamus dolorum, voluptate vitae quia ea amet optio magni
								voluptatem nemo, natus nihil.</p>

							<div class="cd-author">
								<img src="resources/images/avatar-3.jpg" alt="Author image">
								<ul class="cd-author-info">
									<li>MyName</li>
									<li>CEO, CompanyName</li>
								</ul>
							</div> <!-- cd-author -->
						</li>
						<li class="cd-testimonials-item">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Dolor quasi officiis pariatur, fugit minus omnis animi ut
								assumenda quod commodi, ad a alias maxime unde suscipit magnam,
								voluptas laboriosam ipsam quibusdam quidem, dolorem deleniti id.</p>

							<div class="cd-author">
								<img src="resources/images/avatar-4.jpg" alt="Author image">
								<ul class="cd-author-info">
									<li>MyName</li>
									<li>CEO, CompanyName</li>
								</ul>
							</div> <!-- cd-author -->
						</li>
						<li class="cd-testimonials-item">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								At temporibus tempora necessitatibus reiciendis provident
								deserunt maxime sit id. Dicta aut voluptatibus placeat quibusdam
								vel, dolore.</p>

							<div class="cd-author">
								<img src="resources/images/avatar-5.jpg" alt="Author image">
								<ul class="cd-author-info">
									<li>MyName</li>
									<li>CEO, CompanyName</li>
								</ul>
							</div> <!-- cd-author -->
						</li>
						<li class="cd-testimonials-item">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Atque tempore ipsam, eos suscipit nostrum molestias
								reprehenderit, rerum amet cum similique a, ipsum soluta delectus
								explicabo nihil repellat incidunt! Minima magni possimus
								mollitia deserunt facere, tempore earum modi, ea ipsa dicta
								temporibus suscipit quidem ut quibusdam vero voluptatibus
								nostrum excepturi explicabo nulla harum, molestiae alias. Ab,
								quidem rem fugit delectus quod.</p>

							<div class="cd-author">
								<img src="resources/images/avatar-6.jpg" alt="Author image">
								<ul class="cd-author-info">
									<li>MyName</li>
									<li>CEO, CompanyName</li>
								</ul>
							</div> <!-- cd-author -->
						</li>
					</ul>
				</div>
				<!-- cd-testimonials-all-wrapper -->
				<a href="#0" class="close-btn">Close</a>
			</div>
		</section>
	</div>


</body>
</html>