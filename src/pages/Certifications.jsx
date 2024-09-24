import CertificateItem from "../components/CertificateItem";
import PageIntro from "../components/PageIntro";

const certInfoObj = [
	{
		title: "React",
		level: "Basic",
		description:
			"It covers topics like Basic Routing, Rendering Elements,State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation.",
		type: "right",
		src: "./assets-for-portfolio/certificates/react-basic.png",
		link: "https://www.hackerrank.com/certificates/c2a3ebde43f7",
	},
	{
		title: "JavaScript",
		level: "Intermediate",
		description:
			"It covers topics like Design Patterns, Memory management, concurrency model, and event loops, among others.",
		type: "left",
		src: "./assets-for-portfolio/certificates/javascript-intermediate.png",
		link: "https://www.hackerrank.com/certificates/148618235314",
	},
	{
		title: "JavaScript",
		level: "Basic",
		description:
			"It covers topics like, Functions, Currying, Hoisting, Scope, Inheritance, Events and Error Handling.",
		type: "right",
		src: "./assets-for-portfolio/certificates/javascript-basic.png",
		link: "https://www.hackerrank.com/certificates/807cb86aabd9",
	},
	{
		title: "CSS",
		level: "Basic",
		description:
			"It covers topics like exploring Cascading and Inheritance, exploring text styling fundamentals, understanding the use of layouts in CSS, understand the boxing of elements in CSS, among others.",
		type: "left",
		src: "./assets-for-portfolio/certificates/css-basic.png",
		link: "https://www.hackerrank.com/certificates/804ca1265a22",
	},
];

function Certifications({ certificationsRef }) {
	return (
		<section className="certifications" ref={certificationsRef}>
			<PageIntro num="04." title="Certifications" />
			<div className="certifications_container">
				{certInfoObj.map((item, i) => (
					<CertificateItem
						title={item.title}
						level={item.level}
						description={item.description}
						type={item.type}
						src={item.src}
						link={item.link}
						key={i + 1}
					/>
				))}
			</div>
		</section>
	);
}

export default Certifications;
