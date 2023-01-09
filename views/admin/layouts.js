module.exports = ({ content }) => {
	return `
	  <!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Bale Factory</title>
				<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
				<link href="/css/main.css" rel="stylesheet">
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
			</head>
		
			<body>
				<header>
					<nav class="navbar navbar-top vert-space">
						<div class="container navbar-container">
							<div>
								<div class="social">
									<li>
										<a href=""><i class="fa fa-phone"> </i> +234 807 250 9794</a>
									</li>
									<li>
										<a href=""><i class="fa fa-envelope"></i> gicodes9@gmail.com</a>
									</li>
									<li>
										<a href=""><i class="fa fa-wallet"></i> balefactory@gicode.ng</a>
									</li>
								</div>
							</div>
							<div>
								<ul class="social">
									<li><a href=""><i class="fab fa-facebook"></i></a></li>
									<li><a href=""><i class="fab fa-twitter"></i></a></li>
									<li><a href=""><i class="fab fa-linkedin"></i></a></li>
									<li><a href=""><i class="fab fa-dribbble"></i></a></li>
									<li><a href=""><i class="fab fa-google-plus"></i></a></li>
								</ul>
							</div>
						</div>
					</nav>
				</header>


				<div class="container">
					${content}
				</div>
				
			</body>
	  </html>
	`;
};