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
								buttonClassName="google clickable pages"
								buttonHref="/assets/certifications/Google-Cybersecurity-Professional-Certificate.pdf"
								target="_blank"
								ariaLabel="Check out my Google Cybersecurity Professional certificate"
							/>
						</div>
						<p className="description">GOOGLE CYBERSECURITY PROFESSIONAL CERTIFICATE.</p>
					</li>

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
						<p className="description">INE CERTIFIED CLOUD ASSOCIATE.</p>
					</li>

					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="nse clickable pages"
								buttonHref="/assets/certifications/NSE-Certification.pdf"
								target="_blank"
								ariaLabel="Check out my NSE certificate"
							/>
						</div>
						<p className="description">FORTINET TRAINING INSTITUTE NETWORK SECURITY EXPERT.</p>
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
