function ProjectItem({ type, info }) {
	const { name, description, link, img, tech } = info;

	return type === "right" ? (
		<div className="project_item">
			<a href={link} className="project_img-link project_img-link--right">
				<img src={img} alt={name} className="project_img" />
			</a>
			<div className="project_info--right">
				<p className="project_tag">Featured Project</p>
				<h3 className="project_title">
					<a href={link}>{name}</a>
				</h3>
				<div className="project_description-container">
					<p className="project_description">
						<a href={link}>{name}</a>&nbsp;{description}
					</p>
				</div>
				<ul className="project_tech project_tech--right">
					{tech.map((tech, i) => (
						<li key={i}>{tech}</li>
					))}
				</ul>
			</div>
		</div>
	) : (
		<div className="project_item">
			<div className="project_info--left">
				<p className="project_tag">Featured Project</p>
				<h3 className="project_title">
					<a href={link}>{name}</a>
				</h3>
				<div className="project_description-container">
					<p className="project_description">
						<a href={link}>{name}</a>&nbsp;{description}
					</p>
				</div>
				<ul className="project_tech project_tech--left">
					{tech.map((tech, i) => (
						<li key={i}>{tech}</li>
					))}
				</ul>
			</div>
			<a href={link} className="project_img-link project_img-link--left">
				<img src={img} alt={name} className="project_img" />
			</a>
		</div>
	);
}

export default ProjectItem;
