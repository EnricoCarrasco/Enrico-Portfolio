import Link from 'next/link'

export default function OffCanvas({ isOffCanvas, handleOffCanvas }: any) {
	return (
		<>
			{/* offCanvas-menu */}
			<div className={`offCanvas__info ${isOffCanvas ? 'active' : ''}`}>
					<div className="offCanvas__close-icon menu-close" onClick={handleOffCanvas}>
						<button aria-label="Sluit zijmenu"><i className="ri-close-line" /></button>
					</div>
					<div className="offCanvas__logo mb-5">
						<h3 className="mb-0">Neem contact op</h3>
					</div>
					<div className="offCanvas__side-info mb-30">
						<div className="contact-list mb-30">
							<p className="fs-6 fw-medium text-200 mb-5">Ik ben altijd enthousiast om nieuwe projecten aan te nemen en samen te werken met innovatieve mensen.</p>
							<div className="mb-3">
								<span className="text-400 fs-5">Telefoon</span>
								<p className="mb-0">+31650743968</p>
							</div>
							<div className="mb-3">
								<span className="text-400 fs-5">E-mail</span>
								<p className="mb-0">enricocarrasconetwork@gmail.com</p>
							</div>
							<div className="mb-3">
								<span className="text-400 fs-5">Bedrijf</span>
								<p className="mb-0">Enrico Carrasco Network</p>
							</div>
							<div className="mb-3">
								<span className="text-400 fs-5">Adres</span>
								<p className="mb-0">Westkanaalweg 96, Ter Aar</p>
							</div>
						</div>
						<div className="contact-list">
							<p className="text-400 fs-5 mb-2">Social Media</p>
							<div className="d-md-flex d-none gap-3">
								<Link href="https://www.linkedin.com/in/enrico-carrasco-486046aa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profiel van Enrico Carrasco">
									<i className="ri-linkedin-fill fs-18" />
								</Link>
								<Link href="https://www.instagram.com/enrico.r.carrasco/?hl=nl" target="_blank" rel="noopener noreferrer" aria-label="Instagram profiel van Enrico Carrasco">
									<i className="ri-instagram-fill fs-18" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			<div className={`offCanvas__overly ${isOffCanvas ? 'active' : ''}`}  onClick={handleOffCanvas}/>
		</>
	)
}
