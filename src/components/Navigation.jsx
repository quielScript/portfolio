function Navigation() {
	return (
		<nav className="navigation">
			<a href="#" className="navigation_logo">
				QUIEL
			</a>
			<ul className="navigation_list">
				<li className="navigation_item">
					<a href="#">
						<span>01.</span>About me
					</a>
				</li>
				<li className="navigation_item">
					<a href="#">
						<span>02.</span>Education
					</a>
				</li>
				<li className="navigation_item">
					<a href="#">
						<span>03.</span>Experience
					</a>
				</li>
				<li className="navigation_item">
					<a href="#">
						<span>04.</span>Certifications
					</a>
				</li>
				<li className="navigation_item">
					<a href="#">
						<span>05.</span>Projects
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
