import Link from "next/link"
import { usePathname } from "next/navigation" // usePathname is more suited for client-side path checking

export default function Menu() {
	const pathname = usePathname()

	return (
		<>
			<ul className="navbar-nav me-auto mb-2 mb-lg-0">
				<li className="nav-item">
					<Link href="/" className={pathname === "/" ? "nav-link active" : "nav-link"}>
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link href="#services" className="nav-link">
						Diensten
					</Link>
				</li>
				<li className="nav-item">
					<Link href="#portfolio" className="nav-link">
						Portfolio
					</Link>
				</li>
				<li className="nav-item">
					<Link href="#skills" className="nav-link">
						Vaardigheden
					</Link>
				</li>
				<li className="nav-item">
					<Link href="#blog" className="nav-link">
						Blog
					</Link>
				</li>
				<li className="nav-item">
					<Link href="#contact" className="nav-link">
						Contact
					</Link>
				</li>
			</ul>
		</>
	)
}
