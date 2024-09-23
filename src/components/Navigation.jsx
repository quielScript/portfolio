function Navigation({
	introRef,
	aboutRef,
	educationRef,
	experienceRef,
	certificationsRef,
	projectsRef,
	handleScrollToTop,
	handleScrollToSection,
}) {
	return (
		<nav className="navigation">
			<a href="#" className="navigation_logo" onClick={handleScrollToTop}>
				QUIEL
			</a>
			<ul className="navigation_list">
				<li
					className="navigation_item"
					onClick={() => handleScrollToSection(aboutRef)}
				>
					<a href="#">
						<span>01.</span>About me
					</a>
				</li>
				<li
					className="navigation_item"
					onClick={() => handleScrollToSection(educationRef)}
				>
					<a href="#">
						<span>02.</span>Education
					</a>
				</li>
				<li
					className="navigation_item"
					onClick={() => handleScrollToSection(experienceRef)}
				>
					<a href="#">
						<span>03.</span>Experience
					</a>
				</li>
				<li
					className="navigation_item"
					onClick={() => handleScrollToSection(certificationsRef)}
				>
					<a href="#">
						<span>04.</span>Certifications
					</a>
				</li>
				<li
					className="navigation_item"
					onClick={() => handleScrollToSection(projectsRef)}
				>
					<a href="#">
						<span>05.</span>Projects
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
