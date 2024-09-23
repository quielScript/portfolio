import { useState } from "react";
import PageIntro from "../components/PageIntro";
import { useRef } from "react";
import { useEffect } from "react";
import EducDetails from "../components/EducDetails";

function Education({ educationRef }) {
	const [activeBtn, setActiveBtn] = useState(null);
	const btnRefs = useRef([]);
	const typeOfEducation = activeBtn?.textContent
		.toLowerCase()
		.split(".")
		.join("");

	useEffect(function () {
		btnRefs.current.forEach((btn) => {
			if (btn.classList.contains("btn--active")) {
				setActiveBtn(btn);
			}
		});
	}, []);

	function handleActiveBtn(e) {
		const clickedBtn = e.target;

		if (activeBtn && activeBtn !== clickedBtn) {
			activeBtn.classList.remove("btn--active");
		}

		clickedBtn.classList.add("btn--active");

		setActiveBtn(clickedBtn);
	}

	return (
		<section className="education" ref={educationRef}>
			<PageIntro num="02." title="Education" />
			<div className="education_info-container">
				<ul className="education_list">
					<li className="education_item">
						<button
							className="education_button btn--active"
							onClick={handleActiveBtn}
							ref={(el) => (btnRefs.current[0] = el)}
						>
							COLLEGE
						</button>
					</li>
					<li>
						<button
							className="education_button"
							onClick={handleActiveBtn}
							ref={(el) => (btnRefs.current[1] = el)}
						>
							S.H.S
						</button>
					</li>
					<li>
						<button
							className="education_button"
							onClick={handleActiveBtn}
							ref={(el) => (btnRefs.current[2] = el)}
						>
							J.H.S
						</button>
					</li>
					<li>
						<button
							className="education_button"
							onClick={handleActiveBtn}
							ref={(el) => (btnRefs.current[3] = el)}
						>
							ELEMENTARY
						</button>
					</li>
				</ul>
				<EducDetails typeOfEducation={typeOfEducation} />
			</div>
		</section>
	);
}

export default Education;
