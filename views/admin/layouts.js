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
							<div class="navbar-end">
								<div class="navbar-item">
									<ul class="social is-size-5">
										<li><a href="https://github.com/gicodes"><i class="fab fa-github"></i></a></li>
										<li><a href="/"><i class="fab fa-facebook"></i></a></li>
										<li><a href="https://linkedin.com/in/gideon-iduma-5311445a"><i class="fab fa-linkedin"></i></a></li>
										<li><a href="/"><i class="fab fa-dribbble"></i></a></li>
										<li><a href="https://twitter.com/pappichino"><i class="fab fa-twitter"></i></a></li>
									</ul>
								</div>
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