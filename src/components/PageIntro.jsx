function PageIntro({ num, title }) {
	return (
		<div className="pageIntro">
			<span className="pageIntro_number">{num}</span>
			<h2 className="pageIntro_title">{title}</h2>
			<div className="pageIntro_rec"></div>
		</div>
	);
}

export default PageIntro;
