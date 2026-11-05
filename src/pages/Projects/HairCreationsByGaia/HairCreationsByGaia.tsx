import ButtonLink from "../../../components/ButtonLink/ButtonLink";
import "../ProjectDetails.css";

function HairCreationsByGaia() {
	return (
		<main>
			<div className="post-it paper-base-project paper-pin pin-red pin-center paper-white">
				OBS! Denne case study mangler billeder/illustrationer. Siden er under
				udarbejdelse. Billeder tilføjes senest onsdag d. 11.11.26.
			</div>
			<section className="case-study paper-base-project paper-orange paper paper-pin pin-green pin-center">
				<h1>Hair Creations by Gaia</h1>
				<p>UX/UI · Frontend Development · Digital Brand Identity</p>
				<p className="case-study-intro">
					Et digitalt univers til en ny frisørsalon med fokus på personlighed,
					visuel identitet og en intuitiv brugeroplevelse.
				</p>
				<div className="faktaboks paper-base-project paper-yellow post-it paper-tape">
					<h3>Fakta</h3>
					<ul>
						<li>
							Min rolle: Projektplanlægning, UX-tests og frontendudvikling
						</li>
						<li>Team: 4 multimediedesignstuderende</li>
						<li>Periode: November - December 2024</li>
						<li>
							Teknologier: Astro, JavaScript, CSS, Supabase, GitHub, Figma
						</li>
						<li>
							Fagligt fokus: UX/UI, responsivt design, komponentbaseret
							udvikling, animationer og digital brand identity
						</li>
						<li>Projekt: Afsluttende studieprojekt · 2. semester</li>
					</ul>
					<ButtonLink
						href="https://haircreationsbygaia.netlify.app/"
						variant="cta"
					>
						Jeg vil se sitet
					</ButtonLink>
				</div>
				<div className="case-study-content flex">
					<div>
						<div className="case-study-row">
							<h4>Projektet</h4>
							<div>
								<p>
									Hair Creations by Gaia er en frisørsalon i Næstved, der
									ønskede at skabe en stærkere digital tilstedeværelse og en
									tydelig visuel identitet. Gaia havde primært brugt Instagram
									til at præsentere sit arbejde og kommunikere med kunder, men
									manglede en samlet platform, hvor potentielle kunder nemt
									kunne finde information om behandlinger, priser, produkter og
									booking.
								</p>
								<p>
									Som afsluttende projekt på 2. semester udviklede vi i en
									gruppe på fire multimediedesignstuderende et website, der
									skulle afspejle Gaias personlige og professionelle tilgang til
									frisørfaget.
								</p>
							</div>
						</div>
						<div className="pencil-divider pencil-divider--1" />
						<div className="case-study-row">
							<h4>Min rolle</h4>
							<div>
								<p>
									Jeg havde særligt fokus på projektplanlægning, UX-tests og
									frontendudvikling. Jeg var involveret gennem hele processen og
									arbejdede primært med styling, animationer og responsivitet i
									frontend.
								</p>
								<p>
									Som projektplanlægger strukturerede jeg vores arbejdsproces
									gennem ugentlige sprintplanlægninger, retrospectives og
									opfølgning på projektets fremdrift. Jeg faciliterede vores
									møder og hjalp med at skabe overblik over opgaver, deadlines
									og ugens mål.
								</p>
								<p>
									I frontend havde jeg særligt ansvar for at omsætte vores
									design til kode og sikre, at komponenter og layouts fungerede
									på tværs af skærmstørrelser.
								</p>
							</div>
						</div>
						<div className="pencil-divider pencil-divider--2" />
						<div className="case-study-row">
							<h4>Fra brandidentitet til digital oplevelse</h4>
							<div>
								<p>
									Med udgangspunkt i Gaias værdier og målgruppens behov
									arbejdede vi med at skabe en sammenhængende digital oplevelse.
									Gennem UX-research, visuel identitet og frontendudvikling
									omsatte vi vores indsigter til et responsivt website med fokus
									på intuitiv navigation, personlig branding og genanvendelig
									kode.
								</p>
								<h5>01 - Fra brugerindsigter til en intuitiv oplevelse</h5>
								<p>
									Vi undersøgte Gaias eksisterende digitale tilstedeværelse og
									gennemførte brugerundersøgelser samt tests af andre
									frisørsaloners websites. Her blev det tydeligt, hvor vigtigt
									det er, at besøgende hurtigt kan finde priser, behandlinger,
									information om frisøren og booking.
								</p>
								<p>
									På baggrund af vores research arbejdede vi med en tydeligere
									informationsarkitektur, hvor indholdet blev organiseret i
									overskuelige sektioner. Vi gjorde booking mere synlig og
									prioriterede de informationer, som potentielle kunder havde
									størst behov for.
								</p>
								<p>
									Gennem prototypetests og feedback fra målgruppen justerede vi
									blandt andet navigationen og placeringen af Om Gaia, så
									brugerne lettere kunne finde relevant information.
								</p>

								<h5>02 - En visuel identitet inspireret af Gaias krøller</h5>
								<p>
									Den visuelle identitet tog udgangspunkt i Gaias værdier:
									jordnær, personlig, ung og professionel.
								</p>
								<p>
									Et af mine egne designbidrag var idéen om at bruge organiske
									bølger i baggrunden. Bølgerne skulle skabe en fornemmelse af
									flere lag og samtidig referere til Gaias karakteristiske lange
									krøller, som fylder meget i hendes billeder.
								</p>
								<p>
									Jeg udviklede illustrationselementet, så det kunne genbruges
									på både websitet og sociale medier. På den måde blev det et
									gennemgående visuelt element, der binder hendes digitale
									univers sammen.
								</p>

								<h5>03 - Fra design til responsiv frontend</h5>
								<p>
									Jeg arbejdede primært med frontendudviklingen, hvor jeg
									omsatte vores Figma-design til kode med fokus på styling,
									animationer og responsivitet.
								</p>
								<p>
									Vi udviklede websitet i Astro og arbejdede komponentbaseret,
									så elementer kunne genbruges på tværs af sider. Det gjorde det
									muligt at skabe en mere konsistent løsning og effektivisere
									udviklingen.
								</p>
								<p>
									Projektet var samtidig første gang, hvor vi for alvor oplevede
									fordelene ved at arbejde med en database og dynamisk indhold.
									Vi opbyggede en produktdatabase i Supabase, som gjorde det
									muligt at generere produktsider ud fra data frem for at
									oprette hver side manuelt.
								</p>
								<p>
									Jeg havde desuden fokus på, at komponenter og layouts
									fungerede på tværs af skærmstørrelser, så brugeroplevelsen
									forblev sammenhængende på både mobil og desktop.
								</p>
								<h5>04 - UX-tests og teknisk kvalitetssikring</h5>
								<p>
									Brugertests var en vigtig del af projektet. Vi testede både
									vores prototype og den færdige løsning for at undersøge, om
									brugerne kunne navigere intuitivt og finde de informationer,
									de havde brug for.
								</p>
								<p>
									I den tekniske kvalitetssikring arbejdede vi blandt andet med
									Lighthouse, hvor vi identificerede og forbedrede problemer med
									performance, tilgængelighed og best practices.
								</p>
								<p>
									Vi optimerede blandt andet billeder, arbejdede med alt-tekster
									og forbedrede elementer som knapper og links med fokus på
									tilgængelighed.
								</p>
							</div>
						</div>
						<div className="pencil-divider pencil-divider--3" />
						<div className="case-study-row">
							<h4>Resultatet</h4>
							<div>
								<p>
									Resultatet blev et samlet digitalt univers, der kombinerer
									Gaias visuelle identitet med en mere struktureret og intuitiv
									brugeroplevelse.
								</p>
								<p>
									Selvom websitet blev færdigudviklet, valgte Gaia efterfølgende
									at fortsætte med Instagram som sin primære digitale platform.
									Hendes eksisterende tilstedeværelse dækkede på daværende
									tidspunkt hendes behov for kunder og booking.
								</p>
								<p>
									Projektet gav mig derfor ikke blot erfaring med at udvikle en
									digital løsning, men også en forståelse for, at digitale
									platforme skal skabe reel værdi og passe til virksomhedens
									aktuelle behov.
								</p>
								<p>
									Samtidig var det første projekt, hvor jeg for alvor oplevede
									værdien af en komponentbaseret struktur og dynamisk data –
									både i forhold til genbrug, konsistens og vedligeholdelse.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default HairCreationsByGaia;
