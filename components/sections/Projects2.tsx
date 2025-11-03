'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"



const reactSwiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	pagination: {
		el: '.react-swiper-pagination',
	},
	navigation: {
		nextEl: '.react-swiper-button-next',
		prevEl: '.react-swiper-button-prev',
	},
}

const wordpressSwiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 4000,
	},
	pagination: {
		el: '.wordpress-swiper-pagination',
	},
	navigation: {
		nextEl: '.wordpress-swiper-button-next',
		prevEl: '.wordpress-swiper-button-prev',
	},
}

export default function Projects2() {
	return (
		<>
			<div className="section-projects-2 pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Projecten </span>
								</div>
								<h3>Recent Gemaakte Websites</h3>
								<p className="text-300">Mijn recent ontwikkelde websites - van concept tot realisatie</p>

								{/* React/Next.js Projects Section */}
								<div className="mt-5">
									<div className="d-flex align-items-center mb-3">
										<h4 className="text-linear-4 mb-0">React / Next.js Projecten</h4>
										<span className="ms-3 badge bg-primary-2 text-dark">Gebouwd met Claude Code AI hulp</span>
									</div>
									<p className="text-300 mb-4">Cutting-edge React en Next.js projecten met moderne technologieën</p>
									<div className="position-relative">
										<Swiper {...reactSwiperOptions} className="swiper slider-two pb-3 position-relative" style={{ paddingBottom: '80px' }}>
											<div className="swiper-wrapper">
												{/* Studio Joshi */}
												<SwiperSlide>
													<div className="p-lg-5 p-md-4 p-3 border border-1 bg-3">
														<div className="row">
															<div className="col-lg-5">
																<img className="w-100" src="assets/imgs/home-page-2/projects/StudioJoshi.png" alt="Studio Joshi Website" />
															</div>
															<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
																<h4 className="text-linear-4">
																	Studio Joshi <br />
																	Hair Extensions Expert
																</h4>
																<p>Cutting-edge React/Next.js website voor hair extensions expert met moderne portfolio showcase</p>
																<ul className="mt-4 list-unstyled">
																	<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Klant</p>
																			<p className="text-300 mb-0 text-end">Studio Joshi</p>
																		</div>
																	</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Categorie</p>
																			<p className="text-300 mb-0 text-end">Kapsalon / Beauty</p>
																		</div>
																	</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Technologieën</p>
																			<p className="text-300 mb-0 text-end">React, Next.js, TypeScript</p>
																		</div>
																	</li>
																</ul>
																<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																	<Link href="https://www.studiojoshi.nl" target="_blank" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																		<svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
																			<path d="M11.0037 3.91421L2.39712 12.5208L0.98291 11.1066L9.5895 2.5H2.00373V0.5H13.0037V11.5H11.0037V3.91421Z" fill="#8F8F92" />
																		</svg>
																		Bezoek Website
																	</Link>
																</div>
															</div>
														</div>
													</div>
												</SwiperSlide>

												{/* First Born Society */}
												<SwiperSlide>
													<div className="p-lg-5 p-md-4 p-3 border border-1 bg-3">
														<div className="row">
															<div className="col-lg-5">
																<img className="w-100" src="assets/imgs/home-page-2/projects/firstborn.png" alt="First Born Society Website" />
															</div>
															<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
																<h4 className="text-linear-4">
																	First Born Society <br />
																	Kraamzorg Platform
																</h4>
																<p>Community platform voor aanstaande moeders met professionele kraamzorg begeleiding en events</p>
																<ul className="mt-4 list-unstyled">
																	<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Klant</p>
																			<p className="text-300 mb-0 text-end">First Born Society</p>
																		</div>
																	</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Categorie</p>
																			<p className="text-300 mb-0 text-end">Kraamzorg / Gezondheidszorg</p>
																		</div>
																	</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Technologieën</p>
																			<p className="text-300 mb-0 text-end">React, Next.js, TypeScript</p>
																		</div>
																	</li>
																</ul>
																<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																	<Link href="https://www.firstbornsociety.nl" target="_blank" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																		<svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
																			<path d="M11.0037 3.91421L2.39712 12.5208L0.98291 11.1066L9.5895 2.5H2.00373V0.5H13.0037V11.5H11.0037V3.91421Z" fill="#8F8F92" />
																		</svg>
																		Bezoek Website
																	</Link>
																</div>
															</div>
														</div>
													</div>
												</SwiperSlide>

												{/* Zoekdierenverzekering */}
												<SwiperSlide>
													<div className="p-lg-5 p-md-4 p-3 border border-1 bg-3">
														<div className="row">
															<div className="col-lg-5">
																<img className="w-100" src="assets/imgs/home-page-2/projects/zoekdierenverzekering.png" alt="Zoekdierenverzekering Website" />
															</div>
															<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
																<h4 className="text-linear-4">
																	Zoekdierenverzekering <br />
																	Vergelijkingsplatform
																</h4>
																<p>Vergelijkingsplatform voor dierenverzekeringen in Nederland met realtime prijsvergelijking</p>
																<ul className="mt-4 list-unstyled">
																	<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Klant</p>
																			<p className="text-300 mb-0 text-end">Zoekdierenverzekering</p>
																		</div>
																	</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Categorie</p>
																			<p className="text-300 mb-0 text-end">Verzekeringen / Vergelijking</p>
																		</div>
																	</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Technologieën</p>
																			<p className="text-300 mb-0 text-end">React, Next.js, Vergelijkingsengine</p>
																		</div>
																	</li>
																</ul>
																<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																	<Link href="https://www.zoekdierenverzekering.nl" target="_blank" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																		<svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
																			<path d="M11.0037 3.91421L2.39712 12.5208L0.98291 11.1066L9.5895 2.5H2.00373V0.5H13.0037V11.5H11.0037V3.91421Z" fill="#8F8F92" />
																		</svg>
																		Bezoek Website
																	</Link>
																</div>
															</div>
														</div>
													</div>
												</SwiperSlide>

												{/* SaaSFlowHQ */}
												<SwiperSlide>
													<div className="p-lg-5 p-md-4 p-3 border border-1 bg-3">
														<div className="row">
															<div className="col-lg-5">
																<img className="w-100" src="assets/imgs/home-page-2/projects/SAASFLOWHQ.png" alt="SaaSFlowHQ Website" />
															</div>
															<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
																<h4 className="text-linear-4">
																	SaaSFlowHQ <br />
																	SaaS Marketing Platform
																</h4>
																<p>Moderne Next.js landingspagina voor TidyCal met prijsvergelijkingen, testimonials en conversie-geoptimaliseerd design</p>
																<ul className="mt-4 list-unstyled">
																	<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Klant</p>
																			<p className="text-300 mb-0 text-end">SaaSFlowHQ</p>
																		</div>
																	</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Categorie</p>
																			<p className="text-300 mb-0 text-end">SaaS / Marketing</p>
																		</div>
																	</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Technologieën</p>
																			<p className="text-300 mb-0 text-end">React, Next.js, TypeScript</p>
																		</div>
																	</li>
																</ul>
																<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																	<Link href="https://www.saasflowhq.com" target="_blank" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																		<svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
																			<path d="M11.0037 3.91421L2.39712 12.5208L0.98291 11.1066L9.5895 2.5H2.00373V0.5H13.0037V11.5H11.0037V3.91421Z" fill="#8F8F92" />
																		</svg>
																		Bezoek Website
																	</Link>
																</div>
															</div>
														</div>
													</div>
												</SwiperSlide>

												{/* Casa Sueño */}
												<SwiperSlide>
													<div className="p-lg-5 p-md-4 p-3 border border-1 bg-3">
														<div className="row">
															<div className="col-lg-5">
																<img className="w-100" src="assets/imgs/home-page-2/projects/CasaSueno.png" alt="Casa Sueño Website" />
															</div>
															<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
																<h4 className="text-linear-4">
																	Casa Sueño <br />
																	Luxe Villa Verhuur
																</h4>
																<p>Luxe villa verhuurwebsite in Ibiza met moderne Next.js architectuur, galerijen, boekingsintegratie en meertalige ondersteuning</p>
																<ul className="mt-4 list-unstyled">
																	<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Klant</p>
																			<p className="text-300 mb-0 text-end">Casa Sueño</p>
																		</div>
																	</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Categorie</p>
																			<p className="text-300 mb-0 text-end">Horeca / Vastgoed</p>
																		</div>
																	</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Technologieën</p>
																			<p className="text-300 mb-0 text-end">React, Next.js, TypeScript</p>
																		</div>
																	</li>
																</ul>
																<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																	<Link href="https://casasueno.growinity.nl" target="_blank" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																		<svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
																			<path d="M11.0037 3.91421L2.39712 12.5208L0.98291 11.1066L9.5895 2.5H2.00373V0.5H13.0037V11.5H11.0037V3.91421Z" fill="#8F8F92" />
																		</svg>
																		Bezoek Website
																	</Link>
																</div>
															</div>
														</div>
													</div>
												</SwiperSlide>
											</div>
										</Swiper>
										<div className="position-absolute bottom-0 end-0 gap-2 pb-7 pe-5 d-none d-md-flex">
											<div className="react-swiper-button-prev end-0 shadow position-relative" style={{ cursor: 'pointer', zIndex: 10 }}>
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" fill="white" />
												</svg>
											</div>
											<div className="react-swiper-button-next end-0 shadow position-relative" style={{ cursor: 'pointer', zIndex: 10 }}>
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#A8FF53" />
												</svg>
											</div>
										</div>
									</div>
								</div>

								{/* WordPress Projects Section */}
								<div className="mt-8">
									<h4 className="text-linear-4 mb-3">WordPress Projecten</h4>
									<p className="text-300 mb-4">Professionele WordPress websites met premium templates en aangepaste functionaliteiten</p>
									<div className="position-relative">
										<Swiper {...wordpressSwiperOptions} className="swiper slider-two pb-3 position-relative" style={{ paddingBottom: '80px' }}>
											<div className="swiper-wrapper">
												{/* Body Motion */}
												<SwiperSlide>
													<div className="p-lg-5 p-md-4 p-3 border border-1 bg-3">
														<div className="row">
															<div className="col-lg-5">
																<img className="w-100" src="assets/imgs/home-page-2/projects/BodyMotion.png" alt="Body Motion Website" />
															</div>
															<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
																<h4 className="text-linear-4">
																	Body Motion by Rus <br />
																	Fitness & Wellness Centrum
																</h4>
																<p>Professionele WordPress website voor fitnesscentrum met personal training, bedrijfsfitness, groepstraining en massagediensten</p>
																<ul className="mt-4 list-unstyled">
																	<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Klant</p>
																			<p className="text-300 mb-0 text-end">Body Motion by Rus</p>
																		</div>
																	</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Categorie</p>
																			<p className="text-300 mb-0 text-end">Fitness / Wellness</p>
																		</div>
																	</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Technologieën</p>
																			<p className="text-300 mb-0 text-end">WordPress, Template</p>
																		</div>
																	</li>
																</ul>
																<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																	<Link href="https://bodymotionbyrus.nl" target="_blank" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																		<svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
																			<path d="M11.0037 3.91421L2.39712 12.5208L0.98291 11.1066L9.5895 2.5H2.00373V0.5H13.0037V11.5H11.0037V3.91421Z" fill="#8F8F92" />
																		</svg>
																		Bezoek Website
																	</Link>
																</div>
															</div>
														</div>
													</div>
												</SwiperSlide>

												{/* Eden Barbershop */}
												<SwiperSlide>
													<div className="p-lg-5 p-md-4 p-3 border border-1 bg-3">
														<div className="row">
															<div className="col-lg-5">
																<img className="w-100" src="assets/imgs/home-page-2/projects/Edenbarbershop.png" alt="Eden Barbershop Website" />
															</div>
															<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
																<h4 className="text-linear-4">
																	Eden Barbershop <br />
																	Premium Barbershop
																</h4>
																<p>Moderne WordPress website voor barbershop gericht op service en kwaliteit, met online boekingssysteem en barber profielen</p>
																<ul className="mt-4 list-unstyled">
																	<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Klant</p>
																			<p className="text-300 mb-0 text-end">Eden Barbershop</p>
																		</div>
																	</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Categorie</p>
																			<p className="text-300 mb-0 text-end">Barbershop / Beauty</p>
																		</div>
																	</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Technologieën</p>
																			<p className="text-300 mb-0 text-end">WordPress, Template</p>
																		</div>
																	</li>
																</ul>
																<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																	<Link href="https://edenbarbershop.nl" target="_blank" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																		<svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
																			<path d="M11.0037 3.91421L2.39712 12.5208L0.98291 11.1066L9.5895 2.5H2.00373V0.5H13.0037V11.5H11.0037V3.91421Z" fill="#8F8F92" />
																		</svg>
																		Bezoek Website
																	</Link>
																</div>
															</div>
														</div>
													</div>
												</SwiperSlide>

												{/* Remis Trim Salon */}
												<SwiperSlide>
													<div className="p-lg-5 p-md-4 p-3 border border-1 bg-3">
														<div className="row">
															<div className="col-lg-5">
																<img className="w-100" src="assets/imgs/home-page-2/projects/Remi.png" alt="Remis Trim Salon Website" />
															</div>
															<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
																<h4 className="text-linear-4">
																	Remis Trim Salon <br />
																	Professionele Kapsalon
																</h4>
																<p>Elegante WordPress website voor professionele kapsalon met diensten overzicht, prijslijst en online boekingssysteem</p>
																<ul className="mt-4 list-unstyled">
																	<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Klant</p>
																			<p className="text-300 mb-0 text-end">Remis Trim Salon</p>
																		</div>
																	</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Categorie</p>
																			<p className="text-300 mb-0 text-end">Kapsalon / Beauty</p>
																		</div>
																	</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Technologieën</p>
																			<p className="text-300 mb-0 text-end">WordPress, Template, Boekingssysteem</p>
																		</div>
																	</li>
																</ul>
																<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																	<Link href="https://remistrimsalon.nl" target="_blank" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																		<svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
																			<path d="M11.0037 3.91421L2.39712 12.5208L0.98291 11.1066L9.5895 2.5H2.00373V0.5H13.0037V11.5H11.0037V3.91421Z" fill="#8F8F92" />
																		</svg>
																		Bezoek Website
																	</Link>
																</div>
															</div>
														</div>
													</div>
												</SwiperSlide>

												{/* Core Keys */}
												<SwiperSlide>
													<div className="p-lg-5 p-md-4 p-3 border border-1 bg-3">
														<div className="row">
															<div className="col-lg-5">
																<img className="w-100" src="assets/imgs/home-page-2/projects/CoreKeys.png" alt="Core Keys Website" />
															</div>
															<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
																<h4 className="text-linear-4">
																	Core Keys <br />
																	Luxe Villa Verhuur Griekenland
																</h4>
																<p>Premium WordPress website voor luxe boutique villa verhuur in Griekenland, met galerijen, boekingssysteem en gastrecensies</p>
																<ul className="mt-4 list-unstyled">
																	<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Klant</p>
																			<p className="text-300 mb-0 text-end">Core Keys</p>
																		</div>
																	</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Categorie</p>
																			<p className="text-300 mb-0 text-end">Horeca / Vastgoed</p>
																		</div>
																	</li>
																	<li className="text-dark mb-3 border-bottom pb-3">
																		<div className="d-flex justify-content-between">
																			<p className="text-dark mb-0 text-end">Technologieën</p>
																			<p className="text-300 mb-0 text-end">WordPress, Template</p>
																		</div>
																	</li>
																</ul>
																<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																	<Link href="https://corekeys.gr" target="_blank" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																		<svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
																			<path d="M11.0037 3.91421L2.39712 12.5208L0.98291 11.1066L9.5895 2.5H2.00373V0.5H13.0037V11.5H11.0037V3.91421Z" fill="#8F8F92" />
																		</svg>
																		Bezoek Website
																	</Link>
																</div>
															</div>
														</div>
													</div>
												</SwiperSlide>
											</div>
										</Swiper>
										<div className="position-absolute bottom-0 end-0 gap-2 pb-7 pe-5 d-none d-md-flex">
											<div className="wordpress-swiper-button-prev end-0 shadow position-relative" style={{ cursor: 'pointer', zIndex: 10 }}>
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" fill="white" />
												</svg>
											</div>
											<div className="wordpress-swiper-button-next end-0 shadow position-relative" style={{ cursor: 'pointer', zIndex: 10 }}>
												<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
													<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#A8FF53" />
												</svg>
											</div>
										</div>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/projects/bg.png" alt="Enrico Portfolio" />
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
