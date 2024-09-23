import PageIntro from "../components/PageIntro";

function Experience({ experienceRef }) {
	return (
		<section className="experience" ref={experienceRef}>
			<PageIntro num="03." title="Experience" />
			<div className="experience_container">
				<div className="experience_list-container">
					<ul className="experience_list-left">
						<li>
							<h3>Frontend Web Developer</h3>
							<p className="experience_time">June 2023 - Present</p>
						</li>
						<li>
							<p className="experience_description">
								Made various material ordering system and simple but fun games
								for University students.
							</p>
						</li>
					</ul>
					<ul className="experience_list-mid">
						<li className="experience_list-mid-cir1"></li>
						<li className="experience_list-mid-cir2"></li>
					</ul>
					<ul className="experience_list-right">
						<li>
							<p className="experience_description">
								I am currently studying advance level of ReactJS and exploring
								backend technologies through online courses.
							</p>
						</li>
						<li>
							<h3>Visual Basic (VB.net) Feelancer</h3>
							<p className="experience_time">April - May 2023</p>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Experience;
