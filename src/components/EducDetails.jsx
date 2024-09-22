import EducDetailsItem from "./EducDetailsitem";

const educationInfoObj = [
	{
		level: "college",
		school: "University of Mindanao",
		time: "Aug 2024 - Present",
		info: [
			"Currently pursuing Bachelor of  Science in Information Technology (BSIT)",
			"First year",
		],
	},
	{
		level: "shs",
		school: "Andres Soriano Colleges of Bislig",
		time: "Aug 2021 - May 2023",
		info: ["Studied Science, Technology, Enginnering, and Mathematics (STEM)."],
	},
	{
		level: "jhs",
		school: "Andres Soriano Colleges of Bislig",
		time: "June 2017 - May 2021",
		info: ["Graduated after 4 years."],
	},
	{
		level: "elementary",
		school: "Mangagoy South Elementary School",
		time: "June 2011 - April 2017",
		info: ["Graduated after 6 years."],
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