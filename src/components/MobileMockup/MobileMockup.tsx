import { useEffect, useRef, useState } from "react";
import "./MobileMockup.css";

type MobileMockupProps = {
	alt?: string;
} & ({ image: string; video?: never } | { video: string; image?: never });

function MobileMockup(props: MobileMockupProps) {
	const mockupRef = useRef<HTMLDivElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);

	const [isPlaying, setIsPlaying] = useState(false);
	const [manualPause, setManualPause] = useState(false);

	const isVideo = "video" in props;

	useEffect(() => {
		const mockup = mockupRef.current;
		const videoElement = videoRef.current;

		if (!mockup || !videoElement || !isVideo) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];

				if (entry.isIntersecting && !manualPause) {
					videoElement.play().catch(() => {
						setIsPlaying(false);
					});
				} else {
					videoElement.pause();
				}
			},
			{ threshold: 0.4 },
		);

		observer.observe(mockup);

		return () => observer.disconnect();
	}, [isVideo, manualPause]);

	const togglePlayback = () => {
		const videoElement = videoRef.current;
		if (!videoElement) return;

		if (videoElement.paused) {
			setManualPause(false);
			videoElement.play().catch(() => setIsPlaying(false));
		} else {
			setManualPause(true);
			videoElement.pause();
		}
	};

	return (
		<div className="mobile-mockup-wrapper">
			<div className="iphone-frame" ref={mockupRef}>
				<div className="iphone-island" />

				<div className="iphone-screen">
					{isVideo ? (
						<video
							ref={videoRef}
							src={props.video}
							muted
							playsInline
							preload="metadata"
							onPlay={() => setIsPlaying(true)}
							onPause={() => setIsPlaying(false)}
							onEnded={() => setIsPlaying(false)}
						/>
					) : (
						<img
							src={props.image}
							alt={props.alt ?? "Mobilvisning af website"}
						/>
					)}
				</div>
			</div>

			{isVideo && (
				<button
					className="mockup-play-button"
					onClick={togglePlayback}
					aria-label={isPlaying ? "Pause video" : "Afspil video"}
				>
					{isPlaying ? (
						<svg
							viewBox="0 0 24 24"
							width="20"
							height="20"
							fill="currentColor"
							aria-hidden="true"
						>
							<rect x="6" y="4" width="4" height="16" rx="1" />
							<rect x="14" y="4" width="4" height="16" rx="1" />
						</svg>
					) : (
						<svg
							viewBox="0 0 24 24"
							width="20"
							height="20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M7 4.5a1 1 0 0 1 1.5-.86l11 6.36a1 1 0 0 1 0 1.73l-11 6.36A1 1 0 0 1 7 17.23z" />
						</svg>
					)}
				</button>
			)}
		</div>
	);
}

export default MobileMockup;
