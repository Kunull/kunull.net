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
				<p className='spacing'>
					<span className="personal">NOTHING TO SEE HERE YET.</span>
    				</p>								
			</main>


			<Footer/>
		</>
	);
};

export default CVEs;
