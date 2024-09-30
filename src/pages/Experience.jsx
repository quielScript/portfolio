import PageIntro from "../components/PageIntro";
import Reveal from "../utils/Reveal";

function Experience({ experienceRef }) {
	return (
		<section className="experience" ref={experienceRef}>
			<Reveal>
				<PageIntro num="03." title="Experience" />
			</Reveal>
			<div className="experience_container">
				<div className="experience_list-container">
					<ul className="experience_list-left">
						<Reveal>
							<li>
								<h3>Frontend Web Developer</h3>
								<p className="experience_time">June 2023 - Present</p>
							</li>
						</Reveal>
						<Reveal>
							<li>
								<p className="experience_description">
									Made various material ordering system and simple but fun games
									for University students.
								</p>
							</li>
						</Reveal>
					</ul>
					<ul className="experience_list-mid">
						<li className="experience_list-mid-cir1"></li>
						<li className="experience_list-mid-cir2"></li>
					</ul>
					<ul className="experience_list-right">
						<Reveal>
							<li>
								<p className="experience_description">
									Worked with other Front-end Web Developers internationally on
									activity projects from online courses, developed dynamic and
									interactive websites from Frontend Mentor challenges, and
									experienced working with APIs and developing responsive
									applications.
								</p>
							</li>
						</Reveal>
						<Reveal>
							<li>
								<h3>Visual Basic (VB.net) Feelancer</h3>
								<p className="experience_time">April 2023 - May 2023</p>
							</li>
						</Reveal>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Experience;
