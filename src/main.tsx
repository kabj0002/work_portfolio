import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import ScrollToHash from "./components/ScrollToHash";
import "./index.css";
import "./styles/utilities.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root element not found");
}

createRoot(rootElement).render(
	<StrictMode>
		<BrowserRouter>
			<ScrollToHash />
			<App />
		</BrowserRouter>
	</StrictMode>,
);
