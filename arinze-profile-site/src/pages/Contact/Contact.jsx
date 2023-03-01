import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Contact.scss";

const Contact = () => {

	return (
		<div className="contact">
			<Helmet>
				<title>Contact page</title>
			</Helmet>
			<Navbar />

			<div className="hero">
				<div className="main_text">
					<h1 className="coloredSide">
						<span>Contact Us</span>
					</h1>
				</div>
			</div>
			<div className="cnctTxtCtn">
        <div className="cnctTxt">Coming soon...</div>
      </div>
      <Footer/>
		</div>
	);
};

export default Contact;
