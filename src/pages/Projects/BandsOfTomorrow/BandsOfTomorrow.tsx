import ButtonLink from "../../../components/ButtonLink/ButtonLink";
import "../ProjectDetails.css";

function BandsOfTomorrow() {
	return (
		<main>
			<div className="post-it paper-base-project paper-pin pin-red pin-center paper-white">
				OBS! Denne case study mangler billeder/illustrationer. Siden er under
				udarbejdelse. Billeder tilføjes senest fredag d. 13.11.26.
			</div>
			<section className="case-study paper-base-project paper-pink paper paper-tape">
				<h1>Bands of Tomorrow</h1>
				<p>Frontend Development · UX · Payload CMS</p>
				<p className="case-study-intro">
					Redesign af en digital musikplatform med fokus på brugeroplevelse,
					visuel identitet og teknisk implementering.
				</p>
				<div className="faktaboks paper-base-project paper-blue post-it rotate-4 paper-pin pin-yellow pin-center">
					<h3>Fakta</h3>
					<ul>
						<li>Min rolle: Projektplanlægger og frontendudvikler</li>
						<li>Team: 3 multimediedesignere</li>
						<li>Periode: November - December 2025</li>
						<li>
							Teknologier: React, Tailwind CSS, React Motion, Payload CMS,
							Github, Figma
						</li>
						<li>
							Fagligt fokus: Responsivt design, komponentbaseret udvikling,
							animationer, UX og performance
						</li>
						<li>Projekt: Afsluttende studieprojekt · 4. semester</li>
					</ul>
					<ButtonLink href="https://mmd-4sem-eksamen.vercel.app/" variant="cta">
						Jeg vil se sitet
					</ButtonLink>
				</div>
				<div className="case-study-content flex">
					<div>
						<div className="case-study-row">
							<h4>Projektet</h4>
							<div>
								<p>
									Bands of Tomorrow er et frivilligt musikmedie, der formidler
									musikrelaterede artikler, koncerter og upcoming artister.
								</p>
								<p>
									Den eksisterende WordPress-løsning havde udfordringer med
									navigation, informationsstruktur og brugeroplevelse. Gennem
									brugertests blev det tydeligt, at brugerne oplevede
									hjemmesiden som forvirrende og havde svært ved at orientere
									sig mellem de forskellige indholdstyper.
								</p>
								<p>
									Vi indledte derfor et samarbejde med Bands of Tomorrow om at
									udvikle en ny digital løsning med en tydeligere visuel
									identitet, forbedret informationsstruktur og en mere intuitiv
									brugeroplevelse.
								</p>
							</div>
						</div>
						<div className="pencil-divider pencil-divider--1" />
						<div className="case-study-row">
							<h4>Min rolle</h4>
							<div>
								<p>
									I projektet havde jeg en dobbeltrolle som projektplanlægger og
									frontendudvikler.
								</p>
								<p>
									Jeg stod primært for frontendimplementeringen med React og
									Tailwind CSS, hvor jeg omsatte Figma-designs til kode med
									fokus på styling, animationer og responsive layouts.
								</p>
								<p>
									Derudover havde jeg ansvar for projektets planlægning og
									fremdrift gennem ugentlige sprints, sprint planning og
									retrospektive møder. Jeg deltog i UX-tests og stod for den
									afsluttende tekniske kvalitetssikring gennem Lighthouse.
								</p>
							</div>
						</div>
						<div className="pencil-divider pencil-divider--2" />
						<div className="case-study-row">
							<h4>Fra brugerproblemer til ny digital løsning</h4>
							<div>
								<p>
									Da jeg startede på projektet, havde jeg ingen erfaring med
									Payload CMS.
								</p>
								<h5>01 - En tydeligere informationsstruktur</h5>
								<p>
									Gennem research og brugertests identificerede vi udfordringer
									i den eksisterende løsning, særligt omkring navigation,
									informationsstruktur og overblik over indhold.
								</p>
								<p>
									Vi reorganiserede hjemmesiden, så de forskellige indholdstyper
									fik deres egne sektioner og labels. Målet var at skabe et mere
									overskueligt univers, hvor brugerne lettere kunne navigere
									mellem artikler, koncerter og musikudgivelser.
								</p>
								<p>
									Samtidig gjorde vi muligheden for at blive frivillig mere
									synlig for at understøtte organisationens ønske om at
									tiltrække flere frivillige.
								</p>

								<h5>02 - Fra Figma til kode</h5>
								<p>
									Jeg havde hovedansvaret for frontendimplementeringen og
									omsatte designs til responsive layouts med React og Tailwind
									CSS.
								</p>
								<p>
									Jeg arbejdede med genanvendelige React-komponenter og
									udviklede animationer med CSS, JavaScript og React Motion for
									at skabe en sammenhængende visuel oplevelse på tværs af
									hjemmesidens sider og interaktioner.
								</p>

								<h5>03 - En ny koncertoplevelse</h5>
								<p>
									Som en del af den nye informationsstruktur udviklede vi en
									koncertkalender med en oversigt over kommende koncerter, som
									Bands of Tomorrow kunne anbefale deres læsere.
								</p>
								<p>
									Kalenderen blev en selvstændig del af platformen, der gjorde
									det lettere at opdage kommende musikoplevelser og skabte en ny
									måde at formidle musikrelateret indhold på.
								</p>
								<h5>04 - Teknisk kvalitetssikring</h5>
								<p>
									Jeg stod for den tekniske kvalitetssikring gennem
									Lighthouse-tests, der analyserede performance, accessibility,
									best practices og SEO.
								</p>
								<p>
									Testene identificerede blandt andet udfordringer med
									kontraster, tilgængelige navne på knapper og enkelte
									performance-relaterede forbedringsmuligheder.
								</p>
								<p>
									På baggrund af rapporterne implementerede jeg relevante
									rettelser, og efterfølgende viste Lighthouse forbedrede
									resultater inden for performance, SEO og best practices.
								</p>
							</div>
						</div>
						<div className="pencil-divider pencil-divider--3" />
						<div className="case-study-row">
							<h4>Resultatet</h4>
							<div>
								<p>
									Projektet resulterede i en ny digital platform for Bands of
									Tomorrow med en sammenhængende visuel identitet, forbedret
									informationsstruktur og et CMS tilpasset organisationens
									behov.
								</p>
								<p>
									UX-tests indikerede, at den nye løsning blev oplevet som mere
									intuitiv, overskuelig og tilgængelig, særligt på mobil, hvor
									størstedelen af målgruppen benytter hjemmesiden.
								</p>
								<p>
									Projektet gav mig erfaring med at kombinere frontendudvikling,
									UX og projektledelse i et tværfagligt udviklingsforløb, hvor
									både brugeroplevelse, teknisk kvalitet og samarbejde var
									afgørende for resultatet.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default BandsOfTomorrow;
