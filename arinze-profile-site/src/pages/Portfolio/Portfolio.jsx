import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import "./Portfolio.scss";

const Portfolio = () => {
	return (
		<div className="hero">
			<Helmet>
				<title>Portfolio page</title>
			</Helmet>
			<Navbar />
			<div>Portfolio</div>

			<div className="main_text">
				{/* <p>Hello. My name is</p> */}
				<h1 className="coloredSide">
					<span>Portfolio</span>
				</h1>
				{/* <h2 className="infiniteType"> */}
					{/* <span>
						<span>--</span>
					</span>{" "}
					I am a */}
					{/* <TypeAnimation
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
						style={{ fontSize: "1em", marginLeft: "5px" }}
					/> */}
				{/* </h2> */}
				{/* <Link to="#">
					<button className="learnMore">Learn More</button>
				</Link> */}
			</div>
			{/* <div className="empty_div"></div> */}
		</div>
	);
};

export default Portfolio;
