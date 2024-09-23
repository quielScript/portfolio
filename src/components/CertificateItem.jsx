function CertificateItem({ src, title, level, link, description, type }) {
	{
		return (
			<div className={`certificate_item certificate_item--${type}`}>
				{type === "right" ? (
					<>
						<a href={link} target="_blank">
							<img src={src} alt={title} className="certificate_img" />
						</a>
						<div className="certificate_info certificate_info--right">
							<h3>
								<span>{title}&nbsp;</span>({level})
							</h3>
							<p>{description}</p>
						</div>
					</>
				) : (
					<>
						<div className="certificate_info certificate_info--left">
							<h3>
								<span>{title}&nbsp;</span>({level})
							</h3>
							<p>{description}</p>
						</div>
						<a href={link} target="_blank">
							<img src={src} alt={title} className="certificate_img" />
						</a>
					</>
				)}
			</div>
		);
	}
}

export default CertificateItem;
