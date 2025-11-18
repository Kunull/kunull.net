import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export const metadata = {
  title: 'Kunull // Certifications',
  openGraph: {
    title: 'Kunull // Certifications',
  },
}

const Certifications = () => {
	return (
		<>
			<Navbar
				previousPage="Kunull"
				previousPageClassName="tertiaryButton clickable glitch layers"
				previousPageAriaLabel=""
				previousPageHref="/"
				
				slash="&nbsp;/&nbsp;"
				slashClassName="tertiaryText slash"
				
				currentPage="certifications"
				currentPageClassName="tertiaryText currentPage"
//				option2Page="experience clickable"

				option1Page="certifications"
				option1PageClassName="certifications hidden clickable"
				option1PageAriaLabel=""
	
				option2Page="projects"
				option2PageClassName="projects secondaryButton clickable"
				option2PageAriaLabel=""

				option3Page="CVEs"
				option3PageClassName="cves secondaryButton clickable"
				option3PageAriaLabel=""
			/>

					
			<main>
				<ul className="grid">
{/*
					<li>
						<Button
							button="AWS SCS-C02"
							buttonClassName="aws-scs primaryButton clickable"
							buttonHref="/assets/certifications/eLearnSecurity-Junior-Penetration-Tester.pdf"
							target="_blank"
							aria-label=""
						/>
						<p className="secondaryText">AWS Certified Security - Specialty.</p>
					</li>
*/} 
					
					<li>
						<Button
							button="AWS SAA-C03"
							buttonClassName="aws-saa primaryButton clickable"
							buttonHref="/assets/certifications/eLearnSecurity-Junior-Penetration-Tester.pdf"
							target="_blank"
							aria-label=""
						/>
						<p className="secondaryText">AWS Certified Solutions Architect - Associate.</p>
					</li>
					
					<li>
						<Button
							button="EJPT"
							buttonClassName="ejpt primaryButton clickable"
							buttonHref="/assets/certifications/eLearnSecurity-Junior-Penetration-Tester.pdf"
							target="_blank"
							aria-label=""
						/>
						<p className="secondaryText">E-Learn Security Junior Penetration Tester.</p>
					</li>

					<li>
						<div className="capital">
							<Button
								button="CNSP"
								buttonClassName="cnsp primaryButton clickable"
								buttonHref="/assets/certifications/Certified-Network-Security-Practitioner.pdf"
								target="_blank"
								ariaLabel=""
							/>
						</div>
						<p className="secondaryText">Certified Network Security Practitioner.</p>
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
								ariaLabel=""
							/>
						</div>
						<p className="secondaryText">INE Certified Cloud Associate.</p>
					</li>

					<li>
						<div className="capital">
							<Button
								button="NSE 1"
								buttonClassName="nse1 primaryButton clickable"
								buttonHref="/assets/certifications/NSE-Certification.pdf"
								target="_blank"
								ariaLabel=""
							/>
						</div>
						<p className="secondaryText">Network Security Expert Level 1.</p>
					</li>

					<li>
						<div className="capital">
							<Button
								button="GCP"
								buttonClassName="google primaryButton clickable"
								buttonHref="/assets/certifications/Google-Cybersecurity-Professional-Certificate.pdf"
								target="_blank"
								ariaLabel=""
							/>
						</div>
						<p className="secondaryText">Google Cybersecurity Professional Certificate.</p>
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
