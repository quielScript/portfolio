import { useState, useRef, useEffect } from "react";
import PageIntro from "../components/PageIntro";
import EducDetails from "../components/EducDetails";
import Reveal from "../utils/Reveal";

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
			<Reveal>
				<PageIntro num="02." title="Education" />
			</Reveal>
			<div className="education_info-container">
				<ul className="education_list">
					<Reveal>
						<li className="education_item">
							<button
								className="education_button btn--active"
								onClick={handleActiveBtn}
								ref={(el) => (btnRefs.current[0] = el)}
							>
								COLLEGE
							</button>
						</li>
					</Reveal>
					<Reveal>
						<li>
							<button
								className="education_button"
								onClick={handleActiveBtn}
								ref={(el) => (btnRefs.current[1] = el)}
							>
								S.H.S
							</button>
						</li>
					</Reveal>
					<Reveal>
						<li>
							<button
								className="education_button"
								onClick={handleActiveBtn}
								ref={(el) => (btnRefs.current[2] = el)}
							>
								J.H.S
							</button>
						</li>
					</Reveal>
					<Reveal>
						<li>
							<button
								className="education_button"
								onClick={handleActiveBtn}
								ref={(el) => (btnRefs.current[3] = el)}
							>
								ELEMENTARY
							</button>
						</li>
					</Reveal>
				</ul>
				<Reveal>
					<EducDetails typeOfEducation={typeOfEducation} />
				</Reveal>
			</div>
		</section>
	);
}

export default Education;
