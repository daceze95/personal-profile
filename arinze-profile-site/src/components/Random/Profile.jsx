import React from "react";
import "./Profile.scss";
import productArr from "./profileArray";

const Profile = () => {
	const [showMore, setShowMore] = React.useState(true);

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
								<p onClick={() => setShowMore(!showMore)}>
									{item.p.length > 200 && showMore ? `${item.p.slice(0, 181)}...` : item.p}
								</p>
								<div className="iconHldr">
									<a href={item.github}>
										<div className="box">
											<i className="bx bxl-github"></i>
											<span>Github</span>
										</div>
									</a>
									<a href={item.site} target="_blank" rel="noreferrer">
										<div className="box">
											<i className="bx bx-globe"></i>
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
