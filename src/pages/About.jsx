import PageIntro from "../components/PageIntro";
import Reveal from "../utils/Reveal";

function About({ aboutRef }) {
	return (
		<section className="about" ref={aboutRef}>
			<Reveal>
				<PageIntro num="01." title="About me" />
			</Reveal>
			<div className="about_info-container">
				<div className="about_info">
					<div className="about_info-text-container">
						<Reveal>
							<p>
								Hello there! My name is Exequiel, a passionate web developer. My
								interest in web development started as a simple curiosity that
								grew into a passion for crafting web applications. I am actively
								expanding my knowledge by studying backend technologies like
								Node.js and databases like MongoDB.
							</p>
						</Reveal>
						<Reveal>
							<p>
								I am currently studying Bachelor of Science in Information
								Technology (BSIT) in the{" "}
								<a href="https://umindanao.edu.ph/" target="_blank">
									University of Mindanao
								</a>
								.
							</p>
						</Reveal>
						<Reveal>
							<p>
								These are the technologies and tools I have been working with:
							</p>
						</Reveal>
					</div>
					<div className="about_tech-container">
						<Reveal>
							<ul className="about_tech-list">
								<li className="about_tech-item">
									<img
										src="./assets-for-portfolio/technologies-tools/HTML.png"
										alt="HTML"
										className="about_tech-item-logo"
									/>
								</li>
								<li className="about_tech-item">
									<img
										src="./assets-for-portfolio/technologies-tools/CSS.png"
										alt="CSS"
										className="about_tech-item-logo"
									/>
								</li>
								<li className="about_tech-item">
									<img
										src="./assets-for-portfolio/technologies-tools/JavaScript.png"
										alt="JavaScript"
										className="about_tech-item-logo"
									/>
								</li>
								<li className="about_tech-item">
									<img
										src="./assets-for-portfolio/technologies-tools/React-Dark.png"
										alt="React"
										className="about_tech-item-logo"
									/>
								</li>
								<li className="about_tech-item">
									<img
										src="./assets-for-portfolio/technologies-tools/Sass.png"
										alt="Sass"
										className="about_tech-item-logo"
									/>
								</li>
								<li className="about_tech-item">
									<img
										src="./assets-for-portfolio/technologies-tools/Git.png"
										alt="Git"
										className="about_tech-item-logo"
									/>
								</li>
								<li className="about_tech-item">
									<img
										src="./assets-for-portfolio/technologies-tools/Github-Dark.png"
										alt="Github"
										className="about_tech-item-logo"
									/>
								</li>
								<li className="about_tech-item">
									<img
										src="./assets-for-portfolio/technologies-tools/Figma-Dark.png"
										alt="Figma"
										className="about_tech-item-logo"
									/>
								</li>
								<li className="about_tech-item">
									<img
										src="./assets-for-portfolio/technologies-tools/Npm-Dark.png"
										alt="NPM"
										className="about_tech-item-logo"
									/>
								</li>

								<li className="about_tech-item">
									<img
										src="./assets-for-portfolio/technologies-tools/VSCode-Dark.png"
										alt="VSCode"
										className="about_tech-item-logo"
									/>
								</li>
								<li className="about_tech-item">
									<img
										src="./assets-for-portfolio/technologies-tools/Netlify-Dark.png"
										alt="Netlify"
										className="about_tech-item-logo"
									/>
								</li>
								<li className="about_tech-item">
									<img
										src="./assets-for-portfolio/technologies-tools/Vite-Dark.png"
										alt="Vite"
										className="about_tech-item-logo"
									/>
								</li>
							</ul>
						</Reveal>
					</div>
				</div>
				<div className="about_avatar-container">
					<img
						src="./assets-for-portfolio/avatar/me.png"
						alt="A picture of Exequiel wearing an eyeglass with a white background smiling."
						className="about_avatar"
					/>
				</div>
			</div>
		</section>
	);
}

export default About;
