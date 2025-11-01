import Link from 'next/link'



export default function Blog2() {
	return (
		<>

			<section id="blog" className="section-blog-2 position-relative pt-60 pb-60">
				<div className="container">
					<div className="text-center">
						<div className="d-flex align-items-center justify-content-center">
							<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
								<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
							</svg>
							<span className="text-linear-4 d-flex align-items-center"> Nieuwste Applicaties </span>
						</div>
						<h3>Web Apps & API's</h3>
					<p className="text-300 mt-2">Functionele applicaties met API integraties en geavanceerde features</p>
					</div>
					<div className="row mt-8 justify-content-center">
						{/*prettier-ignore*/}
						<div className="col-lg-4">
							<div className="blog-card rounded-top-2 mb-lg-3 mb-md-5 mb-3">
								<div className="blog-card__image position-relative">
									<div className="zoom-img rounded-2 overflow-hidden">
										<img className="w-100" src="assets/imgs/home-page-2/projects/auralomera.png" alt="Aura Lomera - AI Afbeeldingsbewerking" />
										<Link className="position-absolute bottom-0 start-0 m-3 text-dark border border-white fw-medium px-3 py-1 fs-7 bg-white rounded-2" href="https://auralomera.com/" target="_blank" rel="noopener noreferrer">Website</Link>
										<Link href="https://auralomera.com/" target="_blank" rel="noopener noreferrer" className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape rounded-circle" aria-label="Bezoek Aura Lomera">
											<i className="ri-arrow-right-up-line" />
										</Link>
									</div>
								</div>
								<div className="blog-card__content position-relative text-center mt-4">
									<span className="blog-card__date fs-7">AI • Gemini API</span>
									<h4 className="blog-card__title mt-2">Aura Lomera</h4>
									<p className="blog-card__description fs-7">Een programma met Gemini API voor het bewerken van afbeeldingen</p>
									<Link href="https://auralomera.com/" target="_blank" rel="noopener noreferrer" className="link-overlay position-absolute top-0 start-0 w-100 h-100" aria-label="Bezoek Aura Lomera website" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
