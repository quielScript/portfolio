import EducDetailsItem from "./EducDetailsitem";

const educationInfoObj = [
	{
		level: "college",
		school: "University of Mindanao",
		time: "Aug 2024 - Present",
		info: [
			"Currently pursuing Bachelor of  Science in Information Technology (BSIT)",
			"First year",
			"Relevant courses: Introduction to Computing, Programming Fundamentals",
		],
	},
	{
		level: "shs",
		school: "Andres Soriano Colleges of Bislig",
		time: "Aug 2021 - May 2023",
		info: [
			"Studied Science, Technology, Enginnering, and Mathematics (STEM).",
			"Graduated with honors",
			"Participated in various science and engineering competitions",
			"Learned foundational programming",
			"Student Council member",
		],
	},
	{
		level: "jhs",
		school: "Andres Soriano Colleges of Bislig",
		time: "June 2017 - May 2021",
		info: ["Learned the basics of computer", "Graduated with honors"],
	},
	{
		level: "elementary",
		school: "Mangagoy South Elementary School",
		time: "June 2011 - April 2017",
		info: ["Contributed to the school's community services"],
	},
];

function EducDetails({ typeOfEducation }) {
	const educationInfo = educationInfoObj.find(
		(obj) => obj.level === typeOfEducation
	);

	if (!educationInfo) return;

	const { school, time, info } = educationInfo;

	return (
		<div className="education-details">
			<h3 className="education-details_title">{school}</h3>
			<p className="education-details_time">{time}</p>
			<ul className="education-details_info-list">
				{info.map((text, i) => (
					<EducDetailsItem text={text} key={i} />
				))}
			</ul>
		</div>
	);
}

export default EducDetails;
