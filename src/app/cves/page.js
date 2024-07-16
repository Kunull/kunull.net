import Button from '../../components/button/button';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

export const metadata = {
  title: 'CVEs | Kunal Walavalkar',
  openGraph: {
    title: 'CVEs | Kunal Walavalkar',
  },
}

const CVEs = () => {
	return (
		<>
			<Navbar
				previousPage="KUNULL"
				previousPageClassName="tertiaryButton clickable glitch layers"
				previousPageAriaLabel=""
				previousPageHref="/"
				
				slash="&nbsp;/&nbsp;"
				slashClassName="tertiaryText slash"
				<p className="secondaryText">CVSS: 5.3, SEVERITY: MEDIUM</p>
				currentPage="CVES"
				currentPageClassName="tertiaryText currentPage"
//				option2Page="experience clickable"

				option1Page="CERTIFICATIONS"
				option1PageClassName="certifications secondaryButton clickable"
				option1PageAriaLabel=""
	
				option2Page="PROJECTS"
				option2PageClassName="projects secondaryButton clickable"
				option2PageAriaLabel=""

				option3Page="CVES"
				option3PageClassName="cves hidden clickable"
				option3PageAriaLabel=""
			/>

					
      			<main className="capital">

				<ul>
					<li>
						<Button
							button="CVE-2024-6732"
							buttonClassName="cve-2024-6732 primaryButton clickable"
							buttonHref="https://vuldb.com/?id.271450"
							target="_blank"
							aria-label=""
						/>
						<p className="secondaryText">BOOLEAN-BASED BLIND SQLI IN STUDENT STUDY CENTER DESK MANAGEMENT (VERSION 1.0)</p>
					</li>
	
					<li>
						<Button
							button="CVE-2024-6731"
							buttonClassName="cve-2024-6731 primaryButton clickable"
							buttonHref="https://vuldb.com/?id.271449"
							target="_blank"
							aria-label=""
						/>
						<p className="secondaryText">ERROR-BASED SQLI IN STUDENT STUDY CENTER DESK MANAGEMENT SYSTEM (VERSION 1.0)</p>
					</li>
	
					<li>
						<Button
							button="CVE-2024-6729"
							buttonClassName="cve-2024-6729 primaryButton clickable"
							buttonHref="https://vuldb.com/?id.271402"
							target="_blank"
							aria-label=""
						/>
						<p className="secondaryText">BOOLEAN-BASED BLIND SQLI IN KORTEX LITE ADVOCATE OFFICE MANAGEMENT SYSTEM (VERSION 1.0)</p>
					</li>
				</ul>	
			</main>


			<Footer/>
		</>
	);
};

export default CVEs;
