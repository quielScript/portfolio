import PageIntro from "../components/PageIntro";
import ProjectItem from "../components/ProjectItem";

function Projects() {
	return (
		<section className="projects">
			<PageIntro num="05." title="Projects" />
			<div className="projects_container">
				<ProjectItem />
			</div>
		</section>
	);
}

export default Projects;
