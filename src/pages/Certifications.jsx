import CertificateItem from "../components/CertificateItem";
import PageIntro from "../components/PageIntro";

function Certifications() {
	return (
		<section className="certifications">
			<PageIntro num="04." title="Certifications" />
			<div className="certifications_container">
				<CertificateItem
					title="CSS"
					level="Basic"
					src="./assets-for-portfolio/certificates/css-cert-min.png"
					link="https://www.hackerrank.com/certificates/804ca1265a22"
				/>
				<CertificateItem
					title="JavaScript"
					level="Basic"
					src="./assets-for-portfolio/certificates/js-basic-cert-min.png"
					link="https://www.hackerrank.com/certificates/807cb86aabd9"
				/>
				<CertificateItem
					title="JavaScript"
					level="Intermediate"
					src="./assets-for-portfolio/certificates/js-intermediate-cert-min.png"
					link="https://www.hackerrank.com/certificates/148618235314"
				/>
				<CertificateItem
					title="React"
					level="Basic"
					src="./assets-for-portfolio/certificates/react-basic-cert-min.png"
					link="https://www.hackerrank.com/certificates/c2a3ebde43f7"
				/>
			</div>
		</section>
	);
}

export default Certifications;
