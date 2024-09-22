import Navigation from "../components/Navigation";
import About from "./About";
import Education from "./Education";
import Intro from "./Intro";

function AppLayout() {
	return (
		<>
			<Navigation />
			<Intro />
			<About />
			<Education />
		</>
	);
}

export default AppLayout;
