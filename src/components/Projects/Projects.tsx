import projectTwoImage from "../../assets/images/bot.png";
import projectOneImage from "../../assets/images/forlige.png";
import projectThreeImage from "../../assets/images/gaia.png";
import Project from "./Project";

function Projects() {
	return (
		<section id="projects">
			<div className="projects-layout">
				<Project
					className="scale-hover-sm paper-base paper-yellow paper-md rotate-1 paper-tape"
					href="/projects/forlige"
					brand="For Lige Vilkår"
					purpose="Frontendudvikler"
					title="Udvikling af en fleksibel digital platform"
					image={projectOneImage}
					imageAlt="Screenshot af Projekt For Lige Vilkår"
					keywords={[
						"Frontend Development",
						"Figma-to-Code",
						"Drupal",
						"CMS",
						"SCSS",
						"JavaScript",
						"Usability",
						"Web accessibility",
					]}
				/>

				<Project
					className="scale-hover-sm paper-base paper-orange paper-md rotate-2 paper-pin pin-blue pin-center"
					href="/projects/bandsoftomorrow"
					brand="Bands of Tomorrow"
					purpose="Projektleder & Frontendudvikler"
					title="Redesign og udvikling af et digitalt musikmedie"
					image={projectTwoImage}
					imageAlt="Screenshot af Projekt Bands of Tomorrow"
					keywords={[
						"Frontend Development",
						"React",
						"Payload",
						"Headless CMS",
						"Tailwind CSS",
						"Figma",
						"UX Design",
						"UI",
						"Research",
					]}
				/>
				<Project
					className="scale-hover-sm paper-base paper-blue paper-md rotate-3 paper-tape"
					href="/projects/haircreationsbygaia"
					brand="Hair Creations by Gaia"
					purpose="Projektleder & Frontendudvikler"
					title="Definere visuel identitet og utvikle digitalt univers"
					image={projectThreeImage}
					imageAlt="Screenshot af Projekt Hair Creations by Gaia"
					keywords={[
						"Frontend Development",
						"Astro",
						"Rest API via Supabase",
						"Visual identity",
						"Customer Journey",
						"Digital Appearance",
						"Figma",
						"UX Design",
						"UI",
						"Research",
					]}
				/>
			</div>
		</section>
	);
}

export default Projects;
