import { Outlet } from "react-router";
import background from "../../assets/images/board.jpg";
import backgroundTop from "../../assets/images/wood.jpg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";

function Layout() {
	return (
		<section>
			<Header />

			<div className="layout" style={{ backgroundImage: `url(${background})` }}>
				<div
					className="subheader"
					style={{ backgroundImage: `url(${backgroundTop})` }}
				></div>
				<Outlet />

				<Footer />
			</div>
		</section>
	);
}

export default Layout;
