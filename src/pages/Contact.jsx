import PageIntro from "../components/PageIntro";
import Reveal from "../utils/Reveal";

function Contact({ contactRef }) {
	return (
		<section className="contact" ref={contactRef}>
			<Reveal>
				<PageIntro num="06." title="Contacts" />
			</Reveal>
			<div className="contact_info-container">
				<div className="contact_details">
					<Reveal>
						<h3>Email</h3>
					</Reveal>
					<ul>
						<Reveal>
							<li>
								<a href="mailto:exequielarco23@gmail.com">
									exequielarco23@gmail.com
								</a>
							</li>
						</Reveal>
					</ul>
				</div>
				<div className="contact_details">
					<Reveal>
						<h3>Social Medias</h3>
					</Reveal>
					<ul>
						<Reveal>
							<li>
								<a
									href="https://www.linkedin.com/in/exequielarco/"
									target="_blank"
								>
									LinkedIn
								</a>
							</li>
						</Reveal>
						<Reveal>
							<li>
								<a href="https://www.facebook.com/x232426" target="_blank">
									Facebook
								</a>
							</li>
						</Reveal>
					</ul>
				</div>
				<div className="contact_details">
					<Reveal>
						<h3>Others</h3>
					</Reveal>
					<ul>
						<Reveal>
							<li>
								<a href="https://github.com/quielLovesLasagna/" target="_blank">
									GitHub
								</a>
							</li>
						</Reveal>
						<Reveal>
							<li>
								<a
									href="https://www.hackerrank.com/profile/exequielarco23"
									target="_blank"
								>
									HackerRank
								</a>
							</li>
						</Reveal>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Contact;
