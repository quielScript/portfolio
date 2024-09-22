function ProjectItem() {
	return (
		<div className="project_item">
			<a href="#" className="project_img-link">
				<img
					src="./assets-for-portfolio/projects-img/worldwise.png"
					alt="worldwise"
					className="project_img"
				/>
			</a>
			<div className="project_info">
				<p className="project_tag">Featured Project</p>
				<h3 className="project_title">
					<a href="#">WorldWise</a>
				</h3>
				<div className="project_description-container">
					<p className="project_description">
						<a href="#">World Wise</a> is an interactive map app where users can
						mark countries or places they&apos;ve visited. For each location,
						users can add personal notes, such as travel experiences, important
						details, or memories.
					</p>
				</div>
				<ul className="project_tech">
					<li>ReactJS</li>
					<li>SPA</li>
					<li>CSS Modules</li>
				</ul>
			</div>
		</div>
	);
}

export default ProjectItem;
