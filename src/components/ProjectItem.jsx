function ProjectItem({ type, info }) {
	const { name, description, link, repository, img, tech } = info;

	return type === "right" ? (
		<div className="project_item">
			<a
				href={link}
				target="_blank"
				className="project_img-link project_img-link--right"
			>
				<img src={img} alt={name} className="project_img" />
			</a>
			<div className="project_info--right">
				<p className="project_tag">Featured Project</p>
				<h3 className="project_title">
					<a href={link} target="_blank">
						{name}
					</a>
				</h3>
				<div className="project_description-container">
					<p className="project_description">
						<a href={link} target="_blank">
							{name}
						</a>
						&nbsp;{description}
					</p>
				</div>
				<ul className="project_tech project_tech--right">
					{tech.map((tech, i) => (
						<li key={i}>{tech}</li>
					))}
				</ul>
				<ul className="project_links project_links--right">
					<li>
						<a href={repository} target="_blank">
							View Code
						</a>
					</li>
					<li>
						<a href={link} target="_blank">
							View Site
						</a>
					</li>
				</ul>
			</div>
		</div>
	) : (
		<div className="project_item">
			<div className="project_info--left">
				<p className="project_tag">Featured Project</p>
				<h3 className="project_title">
					<a href={link} target="_blank">
						{name}
					</a>
				</h3>
				<div className="project_description-container">
					<p className="project_description">
						<a href={link} target="_blank">
							{name}
						</a>
						&nbsp;{description}
					</p>
				</div>
				<ul className="project_tech project_tech--left">
					{tech.map((tech, i) => (
						<li key={i}>{tech}</li>
					))}
				</ul>
				<ul className="project_links project_links--left">
					<li>
						<a href={repository} target="_blank">
							View Code
						</a>
					</li>
					<li>
						<a href={link} target="_blank">
							View Site
						</a>
					</li>
				</ul>
			</div>
			<a
				href={link}
				target="_blank"
				className="project_img-link project_img-link--left"
			>
				<img src={img} alt={name} className="project_img" />
			</a>
		</div>
	);
}

export default ProjectItem;
