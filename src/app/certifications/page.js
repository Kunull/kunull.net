import Button from '../../components/button/button';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

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
				previousPage="KUNULL"
				previousPageClassName="tertiaryButton clickable glitch layers"
				previousPageAriaLabel="Go to KUNULL i.e. home page"
				previousPageHref="/"
				
				slash="&nbsp;/&nbsp;"
				slashClassName="slash"
				
				currentPage="CERTIFICATIONS"
				currentPageClassName="currentPage"
//				option2Page="experience clickable"

				option1Page="CERTIFICATIONS"
				option1PageClassName="certifications hidden clickable"
				option1PageAriaLabel="Go to my Certifications page"
	
				option2Page="PROJECTS"
				option2PageClassName="projects secondaryButton clickable"
				option2PageAriaLabel="Go to my Projects page"

				option3Page="CVES"
				option3PageClassName="cves hidden clickable"
				option3PageAriaLabel="Go to my CVEs page"
			/>

			<main>
				<ul>
					<li>
						<Button
							button="EJPT"
							buttonClassName="ejpt primaryButton clickable"
							buttonHref="/assets/certifications/eLearnSecurity-Junior-Penetration-Tester.pdf"
							target="_blank"
							aria-label="Check out my EJPT certificate"
						/>
						<p className="secondaryText">E-LEARN SECURITY JUNIOR PENETRATION TESTER.</p>
					</li>

					<li>
						<div className="capital">
							<Button
								button="CNSP"
								buttonClassName="cnsp primaryButton clickable"
								buttonHref="/assets/certifications/Certified-Network-Security-Practitioner.pdf"
								target="_blank"
								ariaLabel="Check out my CNSP certificate"
							/>
						</div>
						<p className="secondaryText">CERTIFIED NETWORK SECURITY PRACTITIONER.</p>
					</li>
     
{/*
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="cc clickable"
								buttonHref=""
								target="_blank"
								ariaLabel="Check out my Certified in Cybersecurity certificate"
							/>
						</div>
						<p className="secondaryText">ISC2 Certified in Cybersecurity.</p>
					</li>
*/} 

					<li>
						<div className="capital">
							<Button
								button="ICCA"
								buttonClassName="icca primaryButton clickable"
								buttonHref="/assets/certifications/INE-Certified-Cloud-Associate.pdf"
								target="_blank"
								ariaLabel="Check out my ICCA certificate"
							/>
						</div>
						<p className="secondaryText">INE CERTIFIED CLOUD ASSOCIATE.</p>
					</li>

					<li>
						<div className="capital">
							<Button
								button="NSE 1"
								buttonClassName="nse1 primaryButton clickable"
								buttonHref="/assets/certifications/NSE-Certification.pdf"
								target="_blank"
								ariaLabel="Check out my NSE certificate"
							/>
						</div>
						<p className="secondaryText">NETWORK SECURITY EXPERT LEVEL 1.</p>
					</li>

					<li>
						<div className="capital">
							<Button
								button="GCP"
								buttonClassName="google primaryButton clickable"
								buttonHref="/assets/certifications/Google-Cybersecurity-Professional-Certificate.pdf"
								target="_blank"
								ariaLabel="Check out my Google Cybersecurity Professional certificate"
							/>
						</div>
						<p className="secondaryText">GOOGLE CYBERSECURITY PROFESSIONAL CERTIFICATE.</p>
					</li>

{/*
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="pnpt clickable"
								buttonHref=""
								target="_blank"
								ariaLabel="Check out my Practical Network Penetration Tester certificate"
							/>
						</div>
						<p className="secondaryText">TCM Security Practical Network Penetration Tester certificate.</p>
					</li>
*/}

	{/*
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="security-plus clickable"
								buttonHref=""
								target="_blank"
								ariaLabel="Check out my CompTIA Security+ certificate"
							/>
						</div>
						<p className="secondaryText">CompTIA Security+ (SY0-701) certificate.</p>
					</li>
	*/}

	      			</ul>
			</main>	
					
			<Footer/>
		</>
	);
};

export default Certifications;
