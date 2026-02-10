import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export const metadata = {
  title: 'Kunull // CVEs',
  openGraph: {
    title: 'Kunull // CVEs',
  },
}

const CVEs = () => {
	return (
		<>
			<Navbar
				previousPage="Kunull"
				previousPageClassName="tertiaryButton clickable glitch layers"
				previousPageAriaLabel=""
				previousPageHref="/"
				
				slash="&nbsp;/&nbsp;"
				slashClassName="tertiaryText slash"
				currentPage="CVEs"
				currentPageClassName="tertiaryText currentPage"
//				option2Page="experience clickable"

				option1Page="certifications"
				option1PageClassName="certifications secondaryButton clickable"
				option1PageAriaLabel=""
	
				option2Page="projects"
				option2PageClassName="projects secondaryButton clickable"
				option2PageAriaLabel=""

				option3Page="CVEs"
				option3PageClassName="cves hidden clickable"
				option3PageAriaLabel=""
			/>

					
      			<main className="capital">
				<ul className="grid">
					{/* <li>
						<Button
							button="CVE-2024-*"
							buttonClassName="cve-2024 primaryButton clickable"
							buttonHref="https://research.kunull.net/CVEs/2024/"
							target="_blank"
							aria-label=""
						/>
						<p className="secondaryText">All disclosures from 2024.</p>
					</li> */}

					<li>
						<Button
							button="CWE-89"
							buttonClassName="cwe-89 primaryButton clickable"
							buttonHref="https://research.kunull.net/tags/cwe-89"
							target="_blank"
							aria-label=""
						/>
						<p className="secondaryText">IMPROPER NEUTRALIZATION OF SPECIAL ELEMENTS USED IN AN SQL COMMAND ('SQL INJECTION').</p>
					</li>

					<li>
						<Button
							button="CWE-79"
							buttonClassName="cwe-79 primaryButton clickable"
							buttonHref="https://research.kunull.net/tags/cwe-79"
							target="_blank"
							aria-label=""
						/>
						<p className="secondaryText">IMPROPER NEUTRALIZATION OF INPUT DURING WEB PAGE GENERATION ('CROSS-SITE SCRIPTING').</p>
					</li>

					<li>
						<Button
							button="CWE-94"
							buttonClassName="cwe-94 primaryButton clickable"
							buttonHref="https://research.kunull.net/tags/cwe-94"
							target="_blank"
							aria-label=""
						/>
						<p className="secondaryText">IMPROPER CONTROL OF GENERATION OF CODE ('CODE INJECTION').</p>
					</li>

				</ul>	
			</main>


			<Footer/>
		</>
	);
};

export default CVEs;
