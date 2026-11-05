import "./Polaroid.css";
import profileImg from "../../assets/profile.jpeg";

function Polaroid() {
	return (
		<div className="polaroid paper-pin pin-purple pin-center">
			<img src={profileImg} className="base" width="200" height="275" alt="" />
			<p>Your next hire :)</p>
		</div>
	);
}

export default Polaroid;
