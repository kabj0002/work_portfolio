import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router";

function ScrollToHash() {
	const { pathname, hash, key } = useLocation();
	const navigationType = useNavigationType();

	const currentKey = useRef(key);

	// Gem scroll-position løbende
	useEffect(() => {
		const saveScrollPosition = () => {
			sessionStorage.setItem(
				`scroll-${currentKey.current}`,
				JSON.stringify({
					x: window.scrollX,
					y: window.scrollY,
				}),
			);
		};

		window.addEventListener("scroll", saveScrollPosition, {
			passive: true,
		});

		return () => {
			window.removeEventListener("scroll", saveScrollPosition);
		};
	}, []);

	useLayoutEffect(() => {
		currentKey.current = key;

		// Tilbage/frem-navigation
		if (navigationType === "POP") {
			const savedPosition = sessionStorage.getItem(`scroll-${key}`);

			if (savedPosition) {
				const { x, y } = JSON.parse(savedPosition);

				window.scrollTo({
					top: y,
					left: x,
					behavior: "instant",
				});
			}

			return;
		}

		// Hash-navigation
		if (hash) {
			const id = decodeURIComponent(hash.substring(1));

			requestAnimationFrame(() => {
				document.getElementById(id)?.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			});

			return;
		}

		// Ny side
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant",
		});
	}, [pathname, hash, key, navigationType]);

	return null;
}

export default ScrollToHash;
