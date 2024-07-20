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
							button="CVE-2024-*"
							buttonClassName="cve-2024 primaryButton clickable"
							buttonHref="https://reports-kunull.vercel.app/CVE%20research/2024/"
							target="_blank"
							aria-label=""
						/>
						<p className="secondaryText">ALL OF MY DISCLOSURES FROM 2024 THAT WERE ASSIGNED A CVE ID</p>
					</li>
				</ul>	
			</main>


			<Footer/>
		</>
	);
};

export default CVEs;
