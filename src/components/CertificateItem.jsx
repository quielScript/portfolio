function CertificateItem({ src, title, level, link }) {
	{
		return (
			<a href={link} target="_blank">
				<div className="certificate_item certificate_item">
					<img src={src} alt={src.split("-")[0]} className="certificate_img" />
					<div className="certificate_info">
						<h3>
							<span>{title}&nbsp;</span>({level})
						</h3>
					</div>
				</div>
			</a>
		);
	}
}

export default CertificateItem;
