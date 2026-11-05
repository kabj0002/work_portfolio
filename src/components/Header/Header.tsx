import { useState } from "react";
import { NavLink } from "react-router";
import "./Header.css";

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	const closeMenu = () => setMenuOpen(false);

	return (
		<header className="header">
			<nav className="nav">
				{/* Burger menu */}
				<button
					className={`burger ${menuOpen ? "active" : ""}`}
					onClick={() => setMenuOpen(!menuOpen)}
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
						<a href="/#mine-projekter" onClick={closeMenu}>
							Projekter
						</a>

						<ul className="dropdown">
							<li>
								<NavLink to="/projects/forlige" onClick={closeMenu}>
									Projekt 1
								</NavLink>
							</li>

							<li>
								<NavLink to="/projects/bandsoftomorrow" onClick={closeMenu}>
									Projekt 2
								</NavLink>
							</li>

							<li>
								<NavLink to="/projects/haircreationsbygaia" onClick={closeMenu}>
									Projekt 3
								</NavLink>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
