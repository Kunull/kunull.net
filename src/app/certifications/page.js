import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Button from '../../components/button/button';

const Certifications = () => {
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
			{/* <div className="navbarContainer">
            <h2 className="previous glitch layers" data-text="KW"><a class="clickable" href="/">KW</a></h2>
            <h2 className="slash">&nbsp;/&nbsp;</h2>
            <h2 className="current">PROJECTS ►</h2>
        </div> */}
			<Navbar
				button="KW"
				buttonClassName="previousPage clickable glitch layers"
				buttonHref="/"
				ariaLabel="Go to KW i.e. home page"
				slash="&nbsp;/&nbsp;"
				slashClassName="slash"
				page="CERTIFICATIONS"
				pageClassName="currentPage"
//				pageOption2="experience clickable"
				pageOption3="projects clickable"
				ariaLabel3="Go to my Projects page"
			/>

			<main>
				<ul>

{/*					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="ejpt clickable pages"
								buttonHref=""
								target="_blank"
								aria-label="Check out my EJPT certificate"
							/>
						</div>
						<p className="description">eLearnSecurity Junior Penetration Tester.</p>
					</li>
*/}     
	
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="google clickable pages"
								buttonHref="../../../assets/certs/Google_Cybersecurity_Professional_Certificate.pdf"
								target="_blank"
								aria-label="Check out my Google Cybersecurity certificate"
							/>
						</div>
						<p className="description">Google Cybersecurity Professional Certitificate.</p>
					</li>
	
	{/*
					<li>
						<h2>
							<Button
								button=""
								buttonClassName="icca clickable pages"
								buttonHref=""
								target="_blank"
								aria-label="Check out my ICCA certificate"
							/>
						</h2>
						<p className="description">INE Certified Cloud Associate.</p>
					</li>
	
	*/}
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="nse clickable pages"
								buttonHref="https://kunalwalavalkar.vercel.app/assets/certs/NSE_Certification.pdf"
								target="_blank"
								aria-label="Check out my NSE certificate"
							/>
						</div>
						<p className="description">Fortinet Training Institute Network Security Expert.</p>
					</li>
	      			</ul>

			</main>
								
			<Footer
				buttonClassName1="email clickable "	
				buttonClassName2="github clickable "
				buttonClassName3="hackTheBox clickable "
				buttonClassName4="key clickable "
				buttonClassName5="resume clickable "
				buttonClassName6="tryHackMe clickable "
				buttonClassName7="writeUps clickable "
			/>
		</>
	);
};

export default Certifications;
