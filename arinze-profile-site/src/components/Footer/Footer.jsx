import React from "react";
import "./Footer.scss";

const Footer = () => {
	const icon = [
		{
      name: "bxl-facebook-circle",
      url: ""
    },
		{
      name: "bxl-twitter",
      url: ""
    },
		{
      name: "bxl-linkedin-square",
      url: "https://www.linkedin.com/in/arinze-ezeokwuegbu/"
    },
		{
      name: "bxl-whatsapp",
      url: "https://wa.me/+2348134014148"
    }
	].reverse();

	return (
		<>
			<div className="footerCtner">
        <div className="footerNav">
          <div></div>
          <div className="services">
            <p className="title">Services</p>
            <ul>
              <li>Web Application</li>
              <li>Mobile Development</li>
              {/* <li>UI/UX Design</li> */}
              <li>Cloud Computing</li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="textIconHlder">
          <p className="footerText">copyright&#64;2023 Arinze Ezeokwuegbu. All Rights Reserved.</p>
          <div className="iconBox">
            {icon.map((icn, index) => {
            return <a href={icn.url} key={index}><i className={`bx ${icn.name}`}></i></a>;
          })}
          </div>
        </div>
			</div>
		</>
	);
};

export default Footer;
