import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Button from '../../components/button/button';

export const metadata = {
  title: 'Certifications | Kunal Walavalkar',
  openGraph: {
    title: 'Certifications | Kunal Walavalkar',
  },
}

const Certifications = () => {
	return (
		<>
			<Navbar
				button="KUNULL"
				buttonClassName="previousPage clickable glitch layers"
				buttonHref="/"
				ariaLabel="Go to KW i.e. home page"
				slash="&nbsp;/&nbsp;"
				slashClassName="slash"
				page="CERTIFICATIONS"
				pageClassName="currentPage"
//				pageOption2="experience clickable"
				pageOption2="projects clickable"
				ariaLabel2="Go to my Projects page"
				// pageOption3="cves clickable"
				// ariaLabel3="Go to my CVEs page"
			/>

			<main>
				<ul>
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="ejpt clickable pages"
								buttonHref="/assets/certifications/eLearnSecurity-Junior-Penetration-Tester.pdf"
								target="_blank"
								aria-label="Check out my EJPT certificate"
							/>
						</div>
						<p className="description">E-LEARN SECURITY JUNIOR PENETRATION TESTER.</p>
						<p className="description">OFFERED BY: INE SECURITY.</p>
					</li>

					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="cnsp clickable pages"
								buttonHref="/assets/certifications/Certified-Network-Security-Practitioner.pdf"
								target="_blank"
								ariaLabel="Check out my CNSP certificate"
							/>
						</div>
						<p className="description">CERTIFIED NETWORK SECURITY PRACTITIONER.</p>
						<p className="description">BY: SECOPS GROUP.</p>
					</li>
     
{/*
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="cc clickable pages"
								buttonHref=""
								target="_blank"
								ariaLabel="Check out my Certified in Cybersecurity certificate"
							/>
						</div>
						<p className="description">ISC2 Certified in Cybersecurity.</p>
					</li>
*/} 

					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="icca clickable pages"
								buttonHref="/assets/certifications/INE-Certified-Cloud-Associate.pdf"
								target="_blank"
								ariaLabel="Check out my ICCA certificate"
							/>
						</div>
						<p className="description">INE CERTIFIED CLOUD ASSOCIATE - INE.</p>
					</li>

					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="nse1 clickable pages"
								buttonHref="/assets/certifications/NSE-Certification.pdf"
								target="_blank"
								ariaLabel="Check out my NSE certificate"
							/>
						</div>
						<p className="description">NETWORK SECURITY EXPERT LEVEL 1 - FORTINET TRAINING INSTITUTE.</p>
					</li>

					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="google clickable pages"
								buttonHref="/assets/certifications/Google-Cybersecurity-Professional-Certificate.pdf"
								target="_blank"
								ariaLabel="Check out my Google Cybersecurity Professional certificate"
							/>
						</div>
						<p className="description">CYBERSECURITY PROFESSIONAL CERTIFICATE - GOOGLE.</p>
					</li>

{/*
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="pnpt clickable pages"
								buttonHref=""
								target="_blank"
								ariaLabel="Check out my Practical Network Penetration Tester certificate"
							/>
						</div>
						<p className="description">TCM Security Practical Network Penetration Tester certificate.</p>
					</li>
*/}

	{/*
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="security-plus clickable pages"
								buttonHref=""
								target="_blank"
								ariaLabel="Check out my CompTIA Security+ certificate"
							/>
						</div>
						<p className="description">CompTIA Security+ (SY0-701) certificate.</p>
					</li>
	*/}

	      			</ul>
			</main>					
			<Footer/>
		</>
	);
};

export default Certifications;
