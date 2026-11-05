import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import MitCV from "./pages/MitCV/MitCV";
import BandsOfTomorrow from "./pages/Projects/BandsOfTomorrow/BandsOfTomorrow";
import ForLige from "./pages/Projects/ForLige/ForLige";
import HairCreationsByGaia from "./pages/Projects/HairCreationsByGaia/HairCreationsByGaia";

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/mitcv" element={<MitCV />} />
				<Route path="/projects/forlige" element={<ForLige />} />
				<Route path="/projects/bandsoftomorrow" element={<BandsOfTomorrow />} />
				<Route
					path="/projects/haircreationsbygaia"
					element={<HairCreationsByGaia />}
				/>
			</Route>
		</Routes>
	);
}

export default App;
