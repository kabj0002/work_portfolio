import "./Project.css";
import { Link } from "react-router";

type ProjectProps = {
	className: string;
	href: string;
	brand: string;
	purpose: string;
	title: string;
	image: string;
	imageAlt: string;
	keywords: string[];
};

function Project({
	className = "",
	href,
	brand,
	purpose,
	title,
	image,
	imageAlt,
	keywords,
}: ProjectProps) {
	return (
		<Link to={href} className="project-link">
			<article className={`project ${className}`}>
				<div className="project-meta">
					<p className="project_purpose">{purpose}</p>
					<span className="separator" aria-hidden="true">
						•
					</span>
					<p className="project_brand">{brand}</p>
				</div>

				<h3 className="project-title">{title}</h3>

				<div className="project-content">
					<img className="project-image" src={image} alt={imageAlt} />

					<div className="project-skills">
						{keywords.map((keyword) => (
							<p className="skill_keyword" key={keyword}>
								{keyword}
							</p>
						))}
					</div>
				</div>
			</article>
		</Link>
	);
}

export default Project;
