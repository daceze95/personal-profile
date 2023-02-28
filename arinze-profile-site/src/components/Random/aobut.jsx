import React from "react";
import { NavLink } from "react-router-dom";
import mypic from "../../assets/edited.png";
import cv from "../../assets/cv.pdf";
import "./aobut.scss";

const Aobut = () => {
	return (
		<div className="abt">
			{/* <div> */}
				<img src={mypic} alt="me" className="me" />
			{/* </div> */}
			<div className="context">
				<h2>
					<span
						style={{ display: "inline-block", borderTop: "2px solid #3C82F6" }}
					>
						A
					</span>
					bout
				</h2>
				<p className="aboutDesc">
					<strong style={{ color: "#18415C" }}>Arinze Ezeokwuegbu</strong> is a
					highly motivated and driven full-stack software engineer with strong
					interest in developing high-quality web applications. He is confident
					working with both front-end and back-end technologies, such as React,
					Angular, Node.js, and Express.js.
				</p>

				<p className="aboutDesc">
					As a full-stack engineer, with strong problem-solving abilities and the ability
					to work well in a team environment, he oversaw the creation of a web application
					from concept to launch and took part in agile development processes.
					He has a passion for learning new technologies and applying them to
					real-world problems.
				</p>

				<div>
					<NavLink to={cv} download="Arinze Ezeokwuegbu CV">
						<button className="learnMore">
								Download Résumé
						</button>
					</NavLink>
				</div>
			</div>

		</div>
	);
};

export default Aobut;
