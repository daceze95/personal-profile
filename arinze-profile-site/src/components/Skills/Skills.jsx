import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import Carousel from "react-elastic-carousel";
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import angular from "../../assets/angular-icon.svg";
import docker from "../../assets/docker-icon.svg";
import nodejs from "../../assets/nodejs-icon.svg";
import javascript from "../../assets/js-icon.png";
import typescript from "../../assets/ts-icon.svg";
import reactjs from "../../assets/reactjs-icon.svg";
import aws from "../../assets/aws.png";
// import kubernetes from "../../assets/kubernetes-icon.svg";
import gcp from "../../assets/google_cloud-icon.svg";
import "./Skills.scss";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/scss/autoplay";

const breakPoints = [
	{ width: 200, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 780, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 },
];

const Skills = () => {
	const [show, setShow] = React.useState(false);
   const carouselRef = React.useRef(null); // declare at state level
   let resetTimeout; //decalre at state level

	const skills = [
		{ img: angular, alt: "Angular logo", level: "90%" },
		{ img: docker, alt: "Docker logo", level: "80%" },
		{ img: javascript, alt: "Javascript logo", level: "95%" },
		{ img: nodejs, alt: "Nodejs logo", level: "90%" },
		{ img: typescript, alt: "Typescript logo", level: "80%" },
		{ img: reactjs, alt: "Reactjs logo", level: "90%" },
		{ img: aws, alt: "AWS logo", level: "80%" },
		// { img: kubernetes, alt: "Kubernetes logo", level: "90%" },
		{ img: gcp, alt: "GCP logo", level: "80%" },
	];

	return (
		<div className="skills">
			<div className="title">
				<h2>Skills</h2>
			</div>
			<Carousel
				breakPoints={breakPoints}
				// modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
				// slidesPerView={3}
				// autoplay={{ delay: 3000 }}
				// navigation
				enableAutoPlay={false}
				pagination={false}
				focusOnSelect={true}
            isRTL={false}
            onNextEnd={({ index }) => {
              if (
                carouselRef?.current.state.activePage ===
                carouselRef?.current.state.pages.length - 1
              ) {
                const itemsPerPage = Math.floor(
                  carouselRef?.current.props.children.length /
                    carouselRef?.current.getNumOfPages()
                );
    
                if (itemsPerPage === carouselRef?.current.state.activeIndex) {
                  clearTimeout(resetTimeout);
                  resetTimeout = setTimeout(() => {
                    carouselRef?.current?.goTo(0);
                  }, 2000); // same time
                }
              }
            }}
				className="slideHolder"
			>
				{skills.map((skill, index) => {
						return (
							<div
								className="main-logo-ctner"
								key={index}
								onMouseOver={() => setShow(true)}
								onMouseOut={() => setShow(false)}
							>
								<div className="logo-ctner">
									<img src={skill.img} alt={skill.alt} />
									{show && (
										<div className="modal">{skill.alt.split(" ")[0]}</div>
									)}
								</div>
								{/* <div id="progressBar">
									<div id="progress" style={{ width: `${skill.level}` }}>
										{skill.level}
									</div>
								</div> */}
								<p></p>
							</div>
						);
				})}
			</Carousel>
		</div>
	);
};
export default Skills;
