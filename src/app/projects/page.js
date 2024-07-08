import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Button from '../../components/button/button';

export const metadata = {
  title: 'Projects | Kunal Walavalkar',
  openGraph: {
    title: 'Projects | Kunal Walavalkar',
  },
}

const Projects = () => {
	return (
		<>
			<Navbar
				previousPage="KUNULL"
				previousPageClassName="previousPage clickable glitch layers"
				previousPageAriaLabel="Go to KW i.e. home page"
				previousPageHref="/"
				slash="&nbsp;/&nbsp;"
				slashClassName="slash"
				currentPage="PROJECTS"
				currentPageClassName="currentPage"
				option1Page="CERTIFICATIONS"
				option1PageClassName="certifications secondaryButton clickable"
				option1PageAriaLabel="Go to my Certifications page"
//				pageOption2="experience clickable"
				// pageOption3="cves clickable"
				// ariaLabel3="Go to my CVEs page"
			/>
			<main>
				<ul>
					<li>
						<div className="capital">
							<Button
								button="EMPOWERSHELL"
								buttonClassName="empower primaryButton clickable pages"
								buttonHref="https://github.com/KuNull/Custos-Shell"
								target="_blank"
								ariaLabel="Check out the Empowershell project"
							/>
						</div>
						<p className="description">POWERSHELL UTILITY SCRIPT THAT COMPARES HASHES TO CHECK THE INTEGRITY OF FILES.</p>
					</li>
	
					<li>
						<div className="capital">
							<Button
								button="HEXPLORER"
								buttonClassName="hexplorer primaryButton clickable pages"
								buttonHref="https://github.com/KuNull/Hexplorer/"
								target="_blank"
								ariaLabel="Check out the Hexplorer project"
							/>
						</div>
						<p className="description">COMMAND-LINE UTILITY TO DUMP THE BINARY AND HEXADECIMAL RENDITION OF A FILE.</p>
					</li>

					<li>
						<div className="capital">
							<Button
								button="KRUPTOS"
								buttonClassName="kryptos primaryButton clickable pages"
								buttonHref="https://kryptos.streamlit.app/"
								target="_blank"
								ariaLabel="Check out the Kryptos project"
							/>
						</div>
						<p className="description">CRYPTOGRAPHY TOOLKIT THAT ALLOWS USERS TO ENCRYPT AND DECRYPT THEIR TEXT USING AN ALGORITHM OF THEIR CHOICE.</p>
					</li>
	
					<li>
						<div className="capital">
							<Button
								button="NETSLEUTH"
								buttonClassName="netSleuth primaryButton clickable pages"
								buttonHref="https://github.com/KuNull/NetSleuth/"
								target="_blank"
								ariaLabel="Check out the NetSleuth project"
							/>
						</div>
						<p className="description">NETWORK SCANNER THAT FINDS ALL THE DEVICES CONNECTED IN THE NETWORK.</p>
					</li>
	
					<li>
						<div className="capital">
							<Button
								button="O.S.S.O.C."
								buttonClassName="ossoc primaryButton clickable pages"
								buttonHref="https://ossoc.gitbook.io/"
								target="_blank"
								ariaLabel="Check out the OpenSOC project"
							/>
						</div>
						<p className="description">POC FOR OPEN SOURCE SECURITY OPERATIONS CENTRE WHICH POSSESES AUTOMATION CAPABILITIES.</p>
					</li>
	
	{/*				
					<li>
						<h2>
							<Button
								button=""
								buttonClassName="passward clickable pages"
								buttonHref=""
								target="_blank"
							/>
						</h2>
						<span className="description">Local password manager with a built-in web server/interface.</span>
					</li>
	*/}
					<li>
						<div className="capital">
							<Button
								button="PROBE"
								buttonClassName="probe primaryButton clickable pages"
								buttonHref="https://github.com/KuNull/Probe"
								target="_blank"
								ariaLabel="Check out the Probe project"
							/>
						</div>
						<p className="description">PORTSCANNER THAT IMPLEMENTS MULTITHREADING FOR SWIFT SCANS.</p>
					</li>
	
	{/*
					<li>
						<h2>
							<Button
								button=""
								buttonClassName="pyrefox clickable pages"
								buttonHref="https://github.com/KuNull/PyreFox"
								target="_blank"
							/>
						</h2>
						<p className="description">user.js file for hardening Firefox browser.</p>
					</li>
	*/}

	{/*
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="signum clickable pages"
								buttonHref="https://signum-mu.vercel.app/"
								target="_blank"
								ariaLabel="Check out the Signum project"
							/>
						</div>
						<p className="description">WEB APP TO GENERATE PASSWORDS AND CHECK THEIR STRENGTH.</p>
					</li>
     	*/}

	{/*
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="steghound clickable pages"
								buttonHref=""
								target="_blank"
								ariaLabel="Check out the Steghound project"
							/>
						</div>
						<p className="description">Steganography tool that allows image, text, audio and video steganography.</p>
					</li>
	*/}

	{/*
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="suiteBox clickable pages"
								buttonHref=""
								target="_blank"
								aria-label="Check out the SuiteBox project"
							/>
						</div>
						<p className="description">Collection of Burp Suite extensions to enhace security testing.</p>
					</li>
	*/}
					
					<li>
						<div className="capital">
							<Button
								button="RISKORE"
								buttonClassName="riskore primaryButton clickable pages"
								buttonHref="https://riskore.vercel.app/"
								target="_blank"
								ariaLabel="Check out the RiSkore project"
							/>
						</div>
						<p className="description">WEB APP TO EVALUATE THE RISK FACED BY AN ORGANIZATION.</p>
					</li>
				</ul>
			</main>

			<Footer/>
		</>
	);
};

export default Projects;
