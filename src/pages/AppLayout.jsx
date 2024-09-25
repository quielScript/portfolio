import { useEffect, useRef, useState } from "react";
import Navigation from "../components/Navigation";
import About from "./About";
import Education from "./Education";
import Intro from "./Intro";
import Experience from "./Experience";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Contact from "./Contact";
import Preloader from "../components/Preloader";

function AppLayout() {
	const [loading, setIsloading] = useState(true);
	const introRef = useRef(null);
	const aboutRef = useRef(null);
	const educationRef = useRef(null);
	const experienceRef = useRef(null);
	const certificationsRef = useRef(null);
	const projectsRef = useRef(null);

	// For preloader
	useEffect(function () {
		const timer = setTimeout(() => {
			setIsloading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	function scrollToSection(elementRef) {
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: "smooth",
		});
	}

	return (
		<>
			{loading ? (
				<Preloader />
			) : (
				<>
					<Navigation
						introRef={introRef}
						aboutRef={aboutRef}
						educationRef={educationRef}
						experienceRef={experienceRef}
						certificationsRef={certificationsRef}
						projectsRef={projectsRef}
						handleScrollToTop={scrollToTop}
						handleScrollToSection={scrollToSection}
					/>
					<Intro />
					<About aboutRef={aboutRef} />
					<Education educationRef={educationRef} />
					<Experience experienceRef={experienceRef} />
					<Certifications certificationsRef={certificationsRef} />
					<Projects projectsRef={projectsRef} />
					<Contact />
				</>
			)}
		</>
	);
}

export default AppLayout;
