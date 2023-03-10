import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import "./Hero.scss";

const Hero = () => {

	return (
		<div className="hero">
			<div className="main_text">
				<p>Hello. My name is</p>
				<h1 className="">
					<span>Arinze Ezeokwuegbu</span>
				</h1>
				<h2 className="infiniteType">
					I am a
					<TypeAnimation
						sequence={[
							"Full Stack Engineer", // Types 'One'
							2000, // Waits 1s
							"Tech Enthusiast", // Deletes 'One' and types 'Two'
							2000, // Waits 2s
							"Creative Problem Solver",
							2000,
						]}
						wrapper="div"
						cursor={true}
						repeat={Infinity}
						className="typeAnimation"
					/>
				</h2>
				<Link to="/contact">
					<button className="learnMore">Hire Me</button>
				</Link>
			</div>
			{/* <div className="empty_div"></div> */}
		</div>
	);
};

export default Hero;
