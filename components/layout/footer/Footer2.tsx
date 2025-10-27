
export default function Footer2() {
	return (
		<>
			<footer>
				<div className="section-footer-2 position-relative">
					<div className="container position-relative z-1 border-top border-1 pb-2 pt-4">
						<div className="text-center">
							<a className="d-flex main-logo align-items-center justify-content-center mb-3">
								<img src="assets/imgs/home-page-2/template/favicon.svg" alt="Enrico Portfolio" />
								<span className="fs-4 ms-2">Enrico.dev</span>
							</a>
							<div className="d-flex justify-content-center gap-3">
								<a href="https://www.linkedin.com/in/enrico-carrasco-486046aa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profiel van Enrico Carrasco">
									<i className="ri-linkedin-fill fs-18" />
								</a>
								<a href="https://www.instagram.com/enrico.r.carrasco/?hl=nl" target="_blank" rel="noopener noreferrer" aria-label="Instagram profiel van Enrico Carrasco">
									<i className="ri-instagram-fill fs-18" />
								</a>
							</div>
							<div className="navigation d-flex align-items-center justify-content-center flex-wrap gap-4 my-4">
								<a href="#about" className="fs-6"> Over mij </a>
								<a href="#resume" className="fs-6"> CV </a>
								<a href="#services" className="fs-6"> Diensten </a>
								<a href="#portfolio" className="fs-6"> Portfolio </a>
								<a href="#blog" className="fs-6"> Blog </a>
								<a href="#contact" className="fs-6"> Contact </a>
							</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
