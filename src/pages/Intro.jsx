import Reveal from "../utils/Reveal";

function Intro() {
	return (
		<header className="header">
			<div className="header_text-container">
				<Reveal>
					<h1 className="header_primary">Hello, my name is</h1>
				</Reveal>
				<Reveal>
					<h2 className="header_secondary">Exequiel Arco.</h2>
				</Reveal>
				<Reveal>
					<h3 className="header_tertiary">I craft things for the web.</h3>
				</Reveal>
				<Reveal>
					<p className="header_description">
						I am a Frontend Web Developer based in the Philippines. I create
						beautiful and user-friendly web applications.
					</p>
				</Reveal>
			</div>
			<div className="header_button-container">
				<Reveal>
					<a href="mailto:exequielarco23@gmail.com">
						<button className="header_button">Contact me</button>
					</a>
				</Reveal>
				<Reveal>
					<a href="#">
						<button className="header_button">View Resume</button>
					</a>
				</Reveal>
			</div>
		</header>
	);
}

export default Intro;
