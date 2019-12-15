const root = document.querySelector('#root');
console.log('open')
if ((location.pathname === '/' || location.pathname === '/index.html') && location.hash === "")
{
	console.log('open')

	root.innerHTML =
		`<!--Preloader Block -->
		<div class="se-pre-con">
			<p align='center'></p>
		</div>
		<!-- Start Header Area -->
		<header id="header">
			<div class="container">
				<div class="row align-items-center justify-content-between d-flex">
					<div class="col-md-3 site_name_2"></div>
					<nav id="nav-menu-container" class="col-9">
						<ul class="nav-menu float-right">
							<li class="menu-active"><a href="#">Home</a></li>
							<li><a href="about.html">About</a></li>
							<li><a href="courses.html">Interests</a></li>
							<li class="menu-has-children"><a href="#">Stories</a>
								<ul>
									<li><a href="blog-home.html">Our Blog</a></li>
									<li><a href="blog-single.html">Recent Update</a></li>
									<li><a href="blog-single.html">Our Patners</a></li>
								</ul>
							</li>
							<li><a href="contact.html">Contact</a></li>
						</ul>
					</nav><!-- #nav-menu-container -->
				</div>
			</div>
		</header>
		<!-- End Header Area -->


		<!-- Start Banner Area -->
		<section class="home-banner-area relative">
			<div class="container">
				<div class="row d-flex align-items-center justify-content-center">
					<div class="banner-content ec_banner-content col-lg-8 col-md-12">
						<h1 class="wow fadeIn" data-wow-duration="4s">Have a Question?<br> Let's help you figure out what people think!</h1>
						<p class="text-white">
							In the history of modern astronomy, there is probably no one greater leap forward than the building and launch
							of
							the space
							telescope.
						</p>

						<div class="input-wrap">
							<button onclick="authIn('signup')" class="btn btn-default col-2 mr-4">Sign Up</button>
							<button onclick="authIn('login')" class="btn btn-secondary col-2">Log In</button>
						</div>
						<h4 class="text-white">Top Interests</h4>

						<div class="courses pt-20">
							<a href="#" data-wow-duration="1s" data-wow-delay=".3s" class="primary-btn transparent mr-10 mb-10 wow fadeInDown">Politics</a>
							<a href="#" data-wow-duration="1s" data-wow-delay=".6s" class="primary-btn transparent mr-10 mb-10 wow fadeInDown">Fiction</a>
							<a href="#" data-wow-duration="1s" data-wow-delay=".9s" class="primary-btn transparent mr-10 mb-10 wow fadeInDown">GOT</a>
							<a href="#" data-wow-duration="1s" data-wow-delay="1.2s" class="primary-btn transparent mr-10 mb-10 wow fadeInDown">Laughs
							</a>
							<a href="#" data-wow-duration="1s" data-wow-delay="1.5s" class="primary-btn transparent mr-10 mb-10 wow fadeInDown">Tech</a>
							<a href="#" data-wow-duration="1s" data-wow-delay="1.8s" class="primary-btn transparent mr-10 mb-10 wow fadeInDown">Nigeria
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End Banner Area -->
		<!-- Start About Area -->
		<section class="about-area section-gap">
			<div class="container">
				<div class="row align-items-center justify-content-center">
					<div class="col-lg-5 col-md-6 about-left">
						<img class="img-fluid" src="primed_assets/images/about.jpg" alt="">
					</div>
					<div class="offset-lg-1 col-lg-6 offset-md-0 col-md-12 about-right">
						<h1>
							Over 2500 Courses <br> from 5 Platform
						</h1>
						<div class="wow fadeIn" data-wow-duration="1s">
							<p>
								There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s
								exciting to think
								about setting up your own viewing station. In the life of any aspiring astronomer that it is time to buy that
								first
								telescope. It’s exciting to think about setting up your own viewing station.
							</p>
						</div>
						<a href="courses.html" class="primary-btn">Explore Courses</a>
					</div>
				</div>
			</div>
		</section>
		<!-- End About Area -->
		<!-- Start Courses Area -->
		<section class="courses-area section-gap">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-5 about-right">
						<h1>
							This is Why <br> We have Solid Idea
						</h1>
						<div class="wow fadeIn" data-wow-duration="1s">
							<p>
								There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s
								exciting to think
								about setting up your own viewing station. In the life of any aspiring astronomer that it is time to buy that
								first
								telescope. It’s exciting to think about setting up your own viewing station.
							</p>
						</div>
						<a href="courses.html" class="primary-btn white">Explore Courses</a>
					</div>
					<div class="offset-lg-1 col-lg-6">
						<div class="courses-right">
							<div class="row">
								<div class="col-lg-6 col-md-6 col-sm-12">
									<ul class="courses-list">
										<li>
											<a class="wow fadeInLeft" href="courses.html" data-wow-duration="1s" data-wow-delay=".1s">
												<i class="fa fa-book"></i> Development
											</a>
										</li>
										<li>
											<a class="wow fadeInLeft" href="courses.html" data-wow-duration="1s" data-wow-delay=".3s">
												<i class="fa fa-book"></i> IT & Software
											</a>
										</li>
										<li>
											<a class="wow fadeInLeft" href="courses.html" data-wow-duration="1s" data-wow-delay=".5s">
												<i class="fa fa-book"></i> Photography
											</a>
										</li>
										<li>
											<a class="wow fadeInLeft" href="courses.html" data-wow-duration="1s" data-wow-delay=".7s">
												<i class="fa fa-book"></i> Language
											</a>
										</li>
										<li>
											<a class="wow fadeInLeft" href="courses.html" data-wow-duration="1s" data-wow-delay=".9s">
												<i class="fa fa-book"></i> Life Science
											</a>
										</li>
										<li>
											<a class="wow fadeInLeft" href="courses.html" data-wow-duration="1s" data-wow-delay="1.1s">
												<i class="fa fa-book"></i> Business
											</a>
										</li>
										<li>
											<a class="wow fadeInLeft" href="courses.html" data-wow-duration="1s" data-wow-delay="1.3s">
												<i class="fa fa-book"></i> Socoal Science
											</a>
										</li>
									</ul>
								</div>
								<div class="col-lg-6 col-md-6 col-sm-12">
									<ul class="courses-list">
										<li>
											<a class="wow fadeInRight" href="courses.html" data-wow-duration="1s" data-wow-delay="1.3s">
												<i class="fa fa-book"></i> Data Science
											</a>
										</li>
										<li>
											<a class="wow fadeInRight" href="courses.html" data-wow-duration="1s" data-wow-delay="1.1s">
												<i class="fa fa-book"></i> Design
											</a>
										</li>
										<li>
											<a class="wow fadeInRight" href="courses.html" data-wow-duration="1s" data-wow-delay=".9s">
												<i class="fa fa-book"></i> Training
											</a>
										</li>
										<li>
											<a class="wow fadeInRight" href="courses.html" data-wow-duration="1s" data-wow-delay=".7s">
												<i class="fa fa-book"></i> Humanities
											</a>
										</li>
										<li>
											<a class="wow fadeInRight" href="courses.html" data-wow-duration="1s" data-wow-delay=".5s">
												<i class="fa fa-book"></i> Marketing
											</a>
										</li>
										<li>
											<a class="wow fadeInRight" href="courses.html" data-wow-duration="1s" data-wow-delay=".3s">
												<i class="fa fa-book"></i> Economics
											</a>
										</li>
										<li>
											<a class="wow fadeInRight" href="courses.html" data-wow-duration="1s" data-wow-delay=".1s">
												<i class="fa fa-book"></i> Personal Dev
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End Courses Area -->
		<!--Start Feature Area -->
		<section class="feature-area">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-8">
						<div class="section-title text-center">
							<h1>Features That Make Us Hero</h1>
							<p>
								If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may
								see some for
								as low as $.17 each.
							</p>
						</div>
					</div>
				</div>
				<div class="feature-inner row">
					<div class="col-lg-4 col-md-6">
						<div class="feature-item">
							<i class="ti-crown"></i>
							<h4>Architecture</h4>
							<div class="wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
								<p>
									Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6">
						<div class="feature-item">
							<i class="ti-briefcase"></i>
							<h4>Interior Design</h4>
							<div class="wow fadeIn" data-wow-duration="1s" data-wow-delay=".3s">
								<p>
									Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6">
						<div class="feature-item">
							<i class="ti-medall-alt"></i>
							<h4>Concept Design</h4>
							<div class="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s">
								<p>
									Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6">
						<div class="feature-item">
							<i class="ti-key"></i>
							<h4>Lifetime Access</h4>
							<div class="wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
								<p>
									Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6">
						<div class="feature-item">
							<i class="ti-files"></i>
							<h4>Source File Included</h4>
							<div class="wow fadeIn" data-wow-duration="1s" data-wow-delay=".3s">
								<p>
									Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6">
						<div class="feature-item">
							<i class="ti-headphone-alt"></i>
							<h4>Live Support</h4>
							<div class="wow fadeIn" data-wow-duration="1s" data-wow-delay=".5s">
								<p>
									Lorem ipsum dolor sit amet consec tetur adipisicing elit, sed do eiusmod tempor incididunt labore.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- End Feature Area -->

		<!-- Start Footer Area -->
		<footer class="footer-area section-gap">
			<div class="container">
				<div class="row">
					<div class="col-lg-2 col-md-6 single-footer-widget">
						<h4>Top Products</h4>
						<ul>
							<li><a href="#">Managed Website</a></li>
							<li><a href="#">Manage Reputation</a></li>
							<li><a href="#">Power Tools</a></li>
							<li><a href="#">Marketing Service</a></li>
						</ul>
					</div>
					<div class="col-lg-2 col-md-6 single-footer-widget">
						<h4>Quick Links</h4>
						<ul>
							<li><a href="#">Jobs</a></li>
							<li><a href="#">Brand primed_assets</a></li>
							<li><a href="#">Investor Relations</a></li>
							<li><a href="#">Terms of Service</a></li>
						</ul>
					</div>
					<div class="col-lg-2 col-md-6 single-footer-widget">
						<h4>Features</h4>
						<ul>
							<li><a href="#">Jobs</a></li>
							<li><a href="#">Brand primed_assets</a></li>
							<li><a href="#">Investor Relations</a></li>
							<li><a href="#">Terms of Service</a></li>
						</ul>
					</div>
					<div class="col-lg-2 col-md-6 single-footer-widget">
						<h4>Resources</h4>
						<ul>
							<li><a href="#">Guides</a></li>
							<li><a href="#">Research</a></li>
							<li><a href="#">Experts</a></li>
							<li><a href="#">Agencies</a></li>
						</ul>
					</div>
					<div class="col-lg-4 col-md-6 single-footer-widget">
						<h4>Newsletter</h4>
						<p>You can trust us. we only send promo offers,</p>
						<div class="form-wrap" id="mc_embed_signup">
							<form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
							 method="get" class="form-inline">
								<input class="form-control" name="EMAIL" placeholder="Your Email Address" onfocus="if (!window.__cfRLUnblockHandlers) return false; this.placeholder = ''"
								 onblur="if (!window.__cfRLUnblockHandlers) return false; this.placeholder = 'Your Email Address '" required=""
								 type="email" data-cf-modified-bb85567b1ad0bcfe924e7aa9-="">
								<button class="click-btn btn btn-default"><span class="lnr lnr-arrow-right"></span></button>
								<div style="position: absolute; left: -5000px;">
									<input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text">
								</div>

								<div class="info"></div>
							</form>
						</div>
					</div>
				</div>
				<div class="footer-bottom row align-items-center">
					<p class="footer-text m-0 col-lg-8 col-md-12">
						Copyright &copy;
						<script>document.write(new Date().getFullYear());</script> All
						rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://primedsoft.com/">PrimedSoft
							Limited</a>
					</p>
					<div class="col-lg-4 col-md-12 footer-social">
						<a href="#"><i class="fa fa-facebook"></i></a>
						<a href="#"><i class="fa fa-twitter"></i></a>
						<a href="#"><i class="fa fa-dribbble"></i></a>
						<a href="#"><i class="fa fa-behance"></i></a>
					</div>
				</div>
			</div>
		</footer>
		<!-- End Footer Area -->

		<!-- ####################### Start Scroll to Top Area ####################### -->
		<div id="back-top">
			<a title="Go to Top" href="#"></a>
        </div>
        <!-- ####################### End Scroll to Top Area ####################### -->

    `};
