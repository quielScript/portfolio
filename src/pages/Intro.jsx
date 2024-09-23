function Intro() {
	return (
		<header className="header">
			<div className="header_text-container">
				<h1 className="header_primary">Hello, my name is</h1>
				<h2 className="header_secondary">Exequiel Arco.</h2>
				<h3 className="header_tertiary">I craft things for the web.</h3>
				<p className="header_description">
					I am a Frontend Web Developer based in the Philippines. I create
					beautiful and user-friendly web applications.
				</p>
			</div>
			<div className="header_button-container">
				<a href="mailto:exequielarco23@gmail.com">
					<button className="header_button">Contact me</button>
				</a>
				<a href="#">
					<button className="header_button">View Resume</button>
				</a>
			</div>
		</header>
	);
}

export default Intro;
