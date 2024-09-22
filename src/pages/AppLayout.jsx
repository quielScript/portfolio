import Navigation from "../components/Navigation";
import About from "./About";
import Education from "./Education";
import Intro from "./Intro";
import Experience from "./Experience";
import Certifications from "./Certifications";
import Projects from "./Projects";

function AppLayout() {
	return (
		<>
			<Navigation />
			<Intro />
			<About />
			<Education />
			<Experience />
			<Certifications />
			<Projects />
		</>
	);
}

export default AppLayout;
