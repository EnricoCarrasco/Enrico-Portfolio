import Link from 'next/link'


export default function Experience2() {
	return (
		<>

			<section id="portfolio" className="section-experience pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Ervaring </span>
								</div>
								<h3>
									+8
									<span className="text-300">jaar </span>
									ervaring
									<span className="text-300">
										met <br />
										AI-tools & websites bouwen
									</span>
								</h3>
								<div className="row mt-5">
									<div className="col-lg-4">
										<div className="d-flex flex-column gap-2">
											<Link href="#" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">AI-Assisted Web Developer</h5>
														<span className="text-300">2017 - Present</span>
													</div>
												</div>
											</Link>
											<Link href="#" className="technology border border-1 rounded-3 p-3">
												<div className="d-flex align-items-center gap-2">
													<div className="d-flex flex-column ms-2">
														<h5 className="mb-1">ROC Leiden</h5>
														<span className="text-300">2014 - 2017</span>
													</div>
												</div>
											</Link>
										</div>
									</div>
									<div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
										<h4 className="text-linear-4">AI-Assisted Website Bouwer</h4>
										<ul className="mt-4">
											<li className="text-300 mb-3"><span className="text-secondary-2">Expert in AI-tools</span> zoals Claude Code, Cursor, Codex en Midjourney voor het bouwen van websites en applicaties.</li>
											<li className="text-300 mb-3">Basiskennis van webontwikkeling (HTML, CSS, JavaScript, PHP) + <span className="text-secondary-2">AI-ondersteuning</span> voor complexe functionaliteiten.</li>
											<li className="text-300 mb-3">Realiseerde 20+ websites met Next.js, React, WordPress en Shopify - elk project op maat gemaakt.</li>
											<li className="text-300 mb-3">Kan elke gewenste functionaliteit implementeren en leer snel nieuwe technologieën wanneer het project dit vereist.</li>
											<li className="text-300 mb-3">Afgestudeerd in <span className="text-secondary-2">Applicatie Ontwikkeling</span> bij ROC Leiden (2014-2017).</li>
										</ul>
										<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
											<Link href="#" className="text-300 border border-1 px-3 py-1">Next.js</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">React</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">WordPress</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">Claude Code</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">Midjourney</Link>
											<Link href="#" className="text-300 border border-1 px-3 py-1">Marketing</Link>
										</div>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/services/bg.png" alt="Enrico Portfolio" />
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
