import Navigation from "../components/Navigation";
import About from "./About";
import Intro from "./Intro";

function AppLayout() {
	return (
		<>
			<Navigation />
			<Intro />
			<About />
		</>
	);
}

export default AppLayout;
