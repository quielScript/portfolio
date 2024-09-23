import Navigation from "../components/Navigation";
import About from "./About";
import Education from "./Education";
import Intro from "./Intro";
import Experience from "./Experience";
import Certifications from "./Certifications";
import Projects from "./Projects";
import { useRef } from "react";

function AppLayout() {
	const introRef = useRef(null);
	const aboutRef = useRef(null);
	const educationRef = useRef(null);
	const experienceRef = useRef(null);
	const certificationsRef = useRef(null);
	const projectsRef = useRef(null);

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
		</>
	);
}

export default AppLayout;
