import type { AnchorHTMLAttributes } from "react";
import { Link } from "react-router";
import "./ButtonLink.css";

type ButtonLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
	href: string;
	variant?: "standard" | "cta";
	download?: boolean | string;
};

function ButtonLink({
	href,
	variant = "standard",
	className = "",
	children,
	download,
	...props
}: ButtonLinkProps) {
	const classes = `button-link button-link--${variant} ${className}`.trim();

	// Internal page anchors
	if (href.startsWith("#")) {
		return (
			<a href={href} className={classes} {...props}>
				{children}
			</a>
		);
	}

	// Download link
	if (download !== undefined && download !== false) {
		return (
			<a href={href} className={classes} download={download} {...props}>
				{children}
			</a>
		);
	}

	// React Router navigation
	return (
		<Link to={href} className={classes} {...props}>
			{children}
		</Link>
	);
}

export default ButtonLink;
