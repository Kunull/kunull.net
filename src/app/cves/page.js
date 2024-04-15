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
			<div className="sticky">
				<div className="effectGlitch"></div>
				<div className="effectNoise"></div>
				<div className="scanLine"></div>
				<div className="gradient"></div>
				<div className="noise"></div>
				<div className="backgroundLines"></div>
			</div>
			
			<div className="backgroundEffect"></div>
{/*
   			<div className="navbarContainer">
		            <h2 className="previous glitch layers" data-text="KW"><a class="clickable" href="/">KW</a></h2>
		            <h2 className="slash">&nbsp;/&nbsp;</h2>
		            <h2 className="current">PROJECTS ►</h2>
        		</div> 
*/}
			<Navbar
				button="KUNULL"
				buttonClassName="previousPage clickable glitch layers"
				ariaLabel="Go to KW i.e. home page"
				buttonHref="/"
				slash="&nbsp;/&nbsp;"
				slashClassName="slash"
				page="PROJECTS"
				pageClassName="currentPage"
				pageOption1="certifications clickable"
				ariaLabel1="Go to my Certifications page"
//				pageOption2="experience clickable"
				pageOption3="cves clickable"
				ariaLabel3="Go to my CVEs page"
			/>

      <main className="capital">
				<p className='spacing'>
					<span className="personal">NOTHHING TO SEE HERE YET.</span>
    		</p>								
			</main>


			<Footer/>
		</>
	);
};

export default CVEs;
