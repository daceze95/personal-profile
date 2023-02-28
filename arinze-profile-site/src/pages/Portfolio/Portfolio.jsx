import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import "./Portfolio.scss";

const Portfolio = () => {
	return (
		<div className="portfolio">
			<Helmet>
				<title>Portfolio page</title>
			</Helmet>
			<Navbar />

			<div className="hero">
				<div className="main_text">
					<h1 className="coloredSide">
						<span>Portfolio</span>
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
