import ButtonLink from "../../components/ButtonLink/ButtonLink";
import Polaroid from "../../components/Polaroid/Polaroid";
import "./Home.css";
import Projects from "../../components/Projects/Projects";

function Home() {
	return (
		<section id="center" className="home-layout">
			{/* Hero og navigation */}
			<div className="hero-layout">
				<div className="hero-card paper-green paper-base paper-tape paper-width-lg paper-md">
					<div className="hero-content">
						<h1>Portfolio</h1>
						<p>Frontendudvikling med blik for UX og tilgængelighed</p>
					</div>
					<Polaroid />
				</div>

				<nav className="navigation-card paper-base paper-yellow paper-width-xs paper-lg rotate-4 paper-pin pin-red pin-center">
					<ButtonLink href="#unik" variant="standard">
						Hvad gør mig unik
					</ButtonLink>
					<ButtonLink href="/mitcv" variant="standard">
						Læs mit CV
					</ButtonLink>
					<ButtonLink href="#mine-projekter" variant="cta">
						Mine projekter
					</ButtonLink>
				</nav>
			</div>

			{/* Fortælling */}
			<div className="story-layout">
				<div className="note-card paper-base paper-yellow paper-width-sm paper-lg paper-tape arrow-note">
					<h2 className="post-it-content">Se her!</h2>
					<svg
						className="handdrawn-arrow"
						viewBox="0 0 160 120"
						aria-hidden="true"
					>
						<path
							d="M 140 15 C 135 75, 80 100, 25 85"
							fill="none"
							stroke="currentColor"
							strokeWidth="4"
							strokeLinecap="round"
						/>
						<path
							d="M 45 70 L 25 85 L 50 100"
							fill="none"
							stroke="currentColor"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>

				<div
					id="unik"
					className="story-card paper-pink paper-base rotate-2 paper-width-lg paper-lg paper-pin pin-yellow pin-center"
				>
					<h2>Min fortælling</h2>

					<p>
						Jeg er frontendudvikler med interesse for samspillet mellem
						mennesker, design og teknologi. Jeg er nysgerrig på, hvorfor noget
						fungerer - eller ikke fungerer - og kan godt lide at undersøge
						problemer, stille spørgsmål og finde løsninger, der giver mening i
						praksis.
					</p>
					<p>
						Min baggrund som fysioterapeut har lært mig at lytte og være
						nysgerrig på menneskers forskellige behov og perspektiver. Det tager
						jeg med ind i mit arbejde med frontend, hvor jeg lægger vægt på
						brugervenlighed, tilgængelighed og løsninger, der fungerer i
						praksis.
					</p>
					<p>
						Jeg trives med at lære nyt, tage ansvar og samarbejde med andre om
						at finde gode løsninger. For mig handler godt frontendarbejde ikke
						kun om kode, men også om at forstå, hvem vi bygger til, og hvorfor.
					</p>
				</div>
			</div>

			{/* Projekter */}
			<section id="mine-projekter" className="projects-section">
				<div className="projects-heading-wrapper">
					<h2 className="paper-purple paper-base paper-tape paper-width-lg paper-lg">
						Udvalgte projekter
					</h2>
				</div>
				<Projects />
			</section>
		</section>
	);
}

export default Home;
