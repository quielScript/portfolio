import { useEffect, useRef, useState } from "react";

function Navigation({
	aboutRef,
	educationRef,
	experienceRef,
	certificationsRef,
	projectsRef,
	contactRef,
	handleScrollToTop,
	handleScrollToSection,
}) {
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [scrollingUp, setScrollingUp] = useState(false);
	const [navHeight, setNavHeight] = useState(0);
	const navRef = useRef(null);

	useEffect(() => {
		// Set the initial navigation height
		if (navRef.current) {
			setNavHeight(navRef.current.getBoundingClientRect().height);
		}

		function handleScroll() {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY && currentScrollY > navHeight) {
				// Scrolling down and passed the navbar height
				setIsVisible(false);
				setScrollingUp(false);
			} else if (currentScrollY < lastScrollY && !scrollingUp) {
				// Start scrolling up
				setScrollingUp(true);
				setIsVisible(true);
			}

			setLastScrollY(currentScrollY); // Update last scroll position
		}

		// Add the scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY, scrollingUp, navHeight]);

	return (
		<nav
			className={`navigation ${isVisible ? "visible" : "hidden"}`}
			ref={navRef}
		>
			<a
				href="#"
				className="navigation_logo"
				onClick={(e) => {
					e.preventDefault();
					handleScrollToTop();
				}}
			>
				QUIEL
			</a>
			<ul className="navigation_list">
				<li
					className="navigation_item"
					onClick={(e) => {
						e.preventDefault();
						handleScrollToSection(aboutRef);
					}}
				>
					<a href="#">
						<span>01.</span>About me
					</a>
				</li>
				<li
					className="navigation_item"
					onClick={(e) => {
						e.preventDefault();
						handleScrollToSection(educationRef);
					}}
				>
					<a href="#">
						<span>02.</span>Education
					</a>
				</li>
				<li
					className="navigation_item"
					onClick={(e) => {
						e.preventDefault();
						handleScrollToSection(experienceRef);
					}}
				>
					<a href="#">
						<span>03.</span>Experience
					</a>
				</li>
				<li
					className="navigation_item"
					onClick={(e) => {
						e.preventDefault();
						handleScrollToSection(certificationsRef);
					}}
				>
					<a href="#">
						<span>04.</span>Certifications
					</a>
				</li>
				<li
					className="navigation_item"
					onClick={(e) => {
						e.preventDefault();
						handleScrollToSection(projectsRef);
					}}
				>
					<a href="#">
						<span>05.</span>Projects
					</a>
				</li>
				<li
					className="navigation_item"
					onClick={(e) => {
						e.preventDefault();
						handleScrollToSection(contactRef);
					}}
				>
					<a href="#">
						<span>06.</span>Contacts
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
