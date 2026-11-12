import { useEffect, useRef, useState } from "react";
import "./DesktopMockUp.css";

type DesktopMockupProps = {
	alt?: string;
} & ({ image: string; video?: never } | { video: string; image?: never });

function DesktopMockup(props: DesktopMockupProps) {
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
		<div className={`desktop-mockup-wrapper ${isVideo ? "has-video" : ""}`}>
			<div className="desktop-frame" ref={mockupRef}>
				<div className="desktop-camera" />

				<div className="desktop-screen">
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
							alt={props.alt ?? "Desktopvisning af website"}
						/>
					)}
				</div>
			</div>

			<div className="desktop-stand" />

			{isVideo && (
				<button
					className="mockup-play-button"
					onClick={togglePlayback}
					aria-label={isPlaying ? "Pause video" : "Afspil video"}
				>
					{isPlaying ? "Ⅱ" : "▶"}
				</button>
			)}
		</div>
	);
}

export default DesktopMockup;
