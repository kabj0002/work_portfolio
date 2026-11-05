import ButtonLink from "../../../components/ButtonLink/ButtonLink";
import "../ProjectDetails.css";

function ForLige() {
	return (
		<main>
			<div className="post-it paper-base-project paper-pin pin-red pin-center paper-white">
				OBS! Denne case study mangler billeder/illustrationer. Siden er under
				udarbejdelse. Billeder tilføjes senest onsdag d. 11.11.26.
			</div>
			<section className="case-study paper-base-project paper-blue paper paper-tape">
				<h1>For Lige Vilkår</h1>
				<p>Frontend Development · Drupal CMS</p>
				<p className="case-study-intro">
					Udvikling af en fleksibel digital platform med genanvendelige
					komponenter, et redaktørvenligt CMS og fokus på tilgængelighed.
				</p>
				<div className="faktaboks paper-base-project paper-orange post-it rotate-1 paper-tape">
					<h3>Fakta</h3>
					<ul>
						<li>
							Min rolle: Frontendudviklerpraktikant med hovedansvar for
							frontendudviklingen
						</li>
						<li>Team: Frontend, backend, UX/UI-design og projektledelse</li>
						<li>Periode: September - December 2025</li>
						<li>Teknologier: Drupal, Twig, Sass/SCSS, JavaScript, Figma</li>
						<li>
							Fagligt fokus: Responsivt design, komponentbaseret udvikling, CMS
							og WCAG
						</li>
					</ul>
					<ButtonLink href="https://forlige.dk/" variant="cta">
						Jeg vil se sitet
					</ButtonLink>
				</div>
				<div className="case-study-content flex">
					<div>
						<div className="case-study-row">
							<h4>Projektet</h4>
							<div>
								<p>
									For Lige Vilkår havde behov for en ny digital platform, der
									kunne formidle organisationens indhold og gøre det lettere for
									frivillige og pårørende at finde relevant information.
								</p>
								<p>
									Løsningen skulle samtidig give organisationen mulighed for
									selv at administrere og udbygge hjemmesidens indhold gennem et
									fleksibelt CMS, uden at gå på kompromis med det visuelle
									udtryk eller brugeroplevelsen.
								</p>
							</div>
						</div>
						<div className="pencil-divider pencil-divider--1" />
						<div className="case-study-row">
							<h4>Min rolle</h4>
							<div>
								<p>
									Som frontendudviklerpraktikant havde jeg hovedansvaret for
									frontendudviklingen af hjemmesiden. Med udgangspunkt i et
									Figma-design fra en senior designer implementerede jeg den
									visuelle løsning og videreudviklede den eksisterende kodebase
									i samarbejde med backendudvikleren.
								</p>
								<p>
									En væsentlig del af mit arbejde bestod i at udvikle en
									fleksibel komponentstruktur i Drupal, implementere forskellige
									content variations og sikre en responsiv og tilgængelig
									brugeroplevelse.
								</p>
							</div>
						</div>
						<div className="pencil-divider pencil-divider--2" />
						<div className="case-study-row">
							<h4>Fra eksisterende kodebase til fleksibelt komponentdesign</h4>
							<div>
								<p>
									Da jeg startede på projektet, havde jeg ingen erfaring med
									CMS-systemer. Samtidig skulle jeg navigere i en eksisterende
									kodebase, hvor jeg både skulle forstå den etablerede struktur
									og videreudvikle den.
								</p>
								<h5>01 - At forstå og videreudvikle kodebasen</h5>
								<p>
									Jeg startede med at sætte mig ind i den eksisterende
									frontendstruktur og forstå samspillet mellem Drupal, Twig
									templates og de forskellige komponenter.
								</p>
								<p>
									Det krævede en ny tilgang til udvikling, hvor jeg ikke byggede
									alt fra bunden, men i stedet lærte at navigere i, forstå og
									videreudvikle eksisterende kode.
								</p>

								<h5>02 - Genanvendelige ribbons og content variations</h5>
								<p>
									Hjemmesidens designsystem var opbygget omkring forskellige
									ribbons, som hver havde deres specifikke formål og
									indholdstype.
								</p>
								<p>
									Jeg arbejdede med implementeringen af blandt andet Hero
									Ribbons, Campaign Ribbons, Text Ribbons, Media Ribbons og List
									Ribbons.
								</p>
								<p>
									For at gøre løsningen fleksibel udviklede jeg forskellige
									content variations, hvor redaktøren eksempelvis kunne vælge
									mellem forskellige baggrundsfarver, tilhørende tekst- og
									knapfarver samt alternative layouts med centreret, venstre-
									eller højrestillet indhold.
								</p>
								<p>
									På den måde kunne organisationen sammensætte indhold på tværs
									af hjemmesiden, samtidig med at det visuelle udtryk forblev
									konsistent.
								</p>
								<h5>03 - Udvikling af den mobile oplevelse</h5>
								<p>
									Desktopdesignet var udleveret i Figma, men mobilversionen
									skulle udvikles fra bunden.
								</p>
								<p>
									Jeg tog derfor selv ansvar for at tilpasse layouts, indhold og
									funktioner til mindre skærme. Et eksempel var CTA-knappen,
									hvor jeg foreslog en fixed placering i bunden af skærmen
									kombineret med en scroll-animation, der gjorde knappen
									tilgængelig uden at fylde unødigt under navigation.
								</p>
								<h5>04 - Tilgængelighed som en del af udviklingsprocessen</h5>
								<p>
									Jeg arbejdede løbende med tilgængelighed gennem Chrome
									DevTools og WAVE Contrast Checker og afsluttede projektet med
									en screening i QualWeb.
								</p>
								<p>
									Særligt de mange content variations krævede opmærksomhed på
									kontraster, da ikke alle ønskede farvekombinationer var
									defineret i det oprindelige design. Her sparrede jeg med
									UX-designeren om valg af kontrastfarver for at sikre, at
									tekst, taglines og CTA-knapper forblev tilgængelige på tværs
									af variationerne.
								</p>
							</div>
						</div>
						<div className="pencil-divider pencil-divider--3" />
						<div className="case-study-row">
							<h4>Resultatet</h4>
							<div>
								<p>
									Resultatet blev en responsiv hjemmeside med en fleksibel
									frontendstruktur og et CMS, der gør det muligt for
									organisationen selv at administrere og sammensætte indhold.
								</p>
								<p>
									Projektet gav mig erfaring med at udvikle i et komplekst CMS,
									arbejde med genanvendelige komponenter og videreudvikle en
									eksisterende kodebase.
								</p>
								<p>
									Særligt lærte jeg at arbejde struktureret i et større
									udviklingsprojekt, hvor frontend, CMS, design og redaktørens
									behov skulle fungere som en samlet løsning.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default ForLige;
