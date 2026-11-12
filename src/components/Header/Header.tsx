import { useState } from "react";
import { NavLink } from "react-router";
import logo from "../../assets/kb.svg";
import "./Header.css";

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [projectsOpen, setProjectsOpen] = useState(false);

	// Check om viewport er mobile
	const isMobile = window.matchMedia("(max-width: 768px)").matches;

	// Open eller close burger menu
	const toggleMenu = () => {
		const nextMenuOpen = !menuOpen;

		setMenuOpen(nextMenuOpen);

		// Automatisk open projects på mobile
		if (nextMenuOpen && isMobile) {
			setProjectsOpen(true);
		} else {
			setProjectsOpen(false);
		}
	};

	// Close navigation
	const closeMenu = () => {
		setMenuOpen(false);
		setProjectsOpen(false);
	};

	// Toggle projects dropdown
	const toggleProjects = () => {
		setProjectsOpen(!projectsOpen);
	};

	return (
		<header className="header">
			<nav className="nav-outer">
				<NavLink to="/" onClick={closeMenu} className="header-logo">
					<img src={logo} alt="KB - Forside" />
				</NavLink>

				<div className="nav">
					{/* Burger menu */}
					<button
						className={`burger ${menuOpen ? "active" : ""}`}
						onClick={toggleMenu}
						aria-label={menuOpen ? "Luk menu" : "Åbn menu"}
						aria-expanded={menuOpen}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>

					{/* Navigation */}
					<ul className={`nav-links ${menuOpen ? "open" : ""}`}>
						<li>
							<NavLink to="/" end onClick={closeMenu}>
								Forside
							</NavLink>
						</li>

						<li>
							<a href="/#unik" onClick={closeMenu}>
								Om mig
							</a>
						</li>

						<li>
							<NavLink to="/MitCV" end onClick={closeMenu}>
								CV
							</NavLink>
						</li>

						{/* Projects */}
						<li className="projects">
							<div className="projects-header">
								<a href="/#mine-projekter" onClick={closeMenu}>
									Projekter
								</a>

								<button
									className={`dropdown-toggle ${projectsOpen ? "open" : ""}`}
									onClick={toggleProjects}
									aria-label={
										projectsOpen ? "Luk projektmenu" : "Åbn projektmenu"
									}
									aria-expanded={projectsOpen}
								>
									<svg
										viewBox="0 0 24 24"
										width="18"
										height="18"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										aria-hidden="true"
									>
										<path d="m6 9 6 6 6-6" />
									</svg>
								</button>
							</div>

							{/* Dropdown */}
							<ul className={`dropdown ${projectsOpen ? "open" : ""}`}>
								<li>
									<NavLink to="/projects/forlige" onClick={closeMenu}>
										Udvikling af en fleksibel digital platform
									</NavLink>
								</li>

								<li>
									<NavLink to="/projects/bandsoftomorrow" onClick={closeMenu}>
										Redesign af et digitalt musikmedie
									</NavLink>
								</li>

								<li>
									<NavLink
										to="/projects/haircreationsbygaia"
										onClick={closeMenu}
									>
										Digitalt univers til en personlig frisørbrand
									</NavLink>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Header;
