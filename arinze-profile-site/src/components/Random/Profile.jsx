import React from "react";
import productArr from "./profileArray";
import "./Profile.scss";

const Profile = () => {
	// const =
	return (
		<div className="prfle">
			<h2>My Work</h2>
			<div className="prjtImgCrd">
				{productArr.map((item, index) => {
					return (
						<div className="prjtCrd" key={index}>
							<img src={item.img} alt={item.alt} className="scrnShot" />
							<div className="prjtcrdTxt">
								<h3>{item.h3}</h3>
								<p>{item.p}</p>
								<div className="iconHldr">
									<a href={item.github}>
										<div className="box">
											<i class="bx bxl-github"></i>
											<span>Github</span>
										</div>
									</a>
									<a href={item.site}>
										<div className="box">
											<i class="bx bx-globe"></i>
											<span>Visit Site</span>
										</div>
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Profile;
