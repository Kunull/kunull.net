import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Button from '../../components/button/button';

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
				button="KUNULL"
				buttonClassName="previousPage clickable glitch layers"
				ariaLabel="Go to KW i.e. home page"
				buttonHref="/"
				slash="&nbsp;/&nbsp;"
				slashClassName="slash"
				page="CVES"
				pageClassName="currentPage"
				pageOption1="certifications clickable"
				ariaLabel1="Go to my Certifications page"
//				pageOption2="experience clickable"
				pageOption2="projects clickable"
				ariaLabel2="Go to my Projects page"
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
