import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
	return (
		<footer>
			<section className="footer">
				<div className="footer-content">
					<h5>Ønsker du at komme i kontakt?</h5>
					<p>Email: katinka_hbjerke@hotmail.com</p>
					<p>Mobil: +45 42336477</p>
				</div>
				<div className="flex-col footer-content">
					<h5>Find mig på LinkedIn</h5>
					<a
						href="https://www.linkedin.com/in/katinka-hotvedt-bjerke-a3730595/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Find mig på LinkedIn"
						className="footer-link scale-hover"
					>
						<FaLinkedin />
					</a>
				</div>
			</section>
			<section className="subfooter">
				<p>Designet & kodet af Katinka</p>
				<p>© 2026 Katinka H. Bjerke - All rights reserved</p>
			</section>
		</footer>
	);
}

export default Footer;
