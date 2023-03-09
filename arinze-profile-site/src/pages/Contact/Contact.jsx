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
		    <div className="container cnctTxt">
      <h1>FormSubmit Demo</h1>
      <form target="_blank" action="https://formsubmit.co/060ed68156ac1fe61ee779821bb25524" method="POST">
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <input type="text" name="name" className="form-control" placeholder="Full Name" required />
            </div>
            <div className="col">
              <input type="email" name="email" className="form-control" placeholder="Email Address" required />
            </div>
          </div>
        </div>
	<div className="form-group">
             <input type="text" name="Subject" className="form-control" placeholder="Subject" required />
        </div>
        <div className="form-group">
          <textarea placeholder="Your Message" className="form-control" name="message" rows="8" required></textarea>
        </div>
        <button type="submit" className="btn btn-lg btn-primary btn-block">Submit Form</button>
      </form>
    </div>
      </div>
      <Footer/>
		</div>
	);
};

export default Contact;
