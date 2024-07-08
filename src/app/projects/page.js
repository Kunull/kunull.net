import Button from '../../components/button/button';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

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
				previousPageClassName="tertiaryButton clickable glitch layers"
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
								buttonClassName="empower primaryButton clickable"
								buttonHref="https://github.com/KuNull/Custos-Shell"
								target="_blank"
								ariaLabel="Check out the Empowershell project"
							/>
						</div>
						<p className="secondaryText">POWERSHELL UTILITY SCRIPT THAT COMPARES HASHES TO CHECK THE INTEGRITY OF FILES.</p>
					</li>
	
					<li>
						<div className="capital">
							<Button
								button="HEXPLORER"
								buttonClassName="hexplorer primaryButton clickable"
								buttonHref="https://github.com/KuNull/Hexplorer/"
								target="_blank"
								ariaLabel="Check out the Hexplorer project"
							/>
						</div>
						<p className="secondaryText">COMMAND-LINE UTILITY TO DUMP THE BINARY AND HEXADECIMAL RENDITION OF A FILE.</p>
					</li>

					<li>
						<div className="capital">
							<Button
								button="KRUPTOS"
								buttonClassName="kryptos primaryButton clickable"
								buttonHref="https://kryptos.streamlit.app/"
								target="_blank"
								ariaLabel="Check out the Kryptos project"
							/>
						</div>
						<p className="secondaryText">CRYPTOGRAPHY TOOLKIT THAT ALLOWS USERS TO ENCRYPT AND DECRYPT THEIR TEXT USING AN ALGORITHM OF THEIR CHOICE.</p>
					</li>
	
					<li>
						<div className="capital">
							<Button
								button="NETSLEUTH"
								buttonClassName="netSleuth primaryButton clickable"
								buttonHref="https://github.com/KuNull/NetSleuth/"
								target="_blank"
								ariaLabel="Check out the NetSleuth project"
							/>
						</div>
						<p className="secondaryText">NETWORK SCANNER THAT FINDS ALL THE DEVICES CONNECTED IN THE NETWORK.</p>
					</li>
	
					<li>
						<div className="capital">
							<Button
								button="O.S.S.O.C."
								buttonClassName="ossoc primaryButton clickable"
								buttonHref="https://ossoc.gitbook.io/"
								target="_blank"
								ariaLabel="Check out the OpenSOC project"
							/>
						</div>
						<p className="secondaryText">POC FOR OPEN SOURCE SECURITY OPERATIONS CENTRE WHICH POSSESES AUTOMATION CAPABILITIES.</p>
					</li>
	
	{/*				
					<li>
						<h2>
							<Button
								button=""
								buttonClassName="passward clickable"
								buttonHref=""
								target="_blank"
							/>
						</h2>
						<span className="secondaryText">Local password manager with a built-in web server/interface.</span>
					</li>
	*/}
					<li>
						<div className="capital">
							<Button
								button="PROBE"
								buttonClassName="probe primaryButton clickable"
								buttonHref="https://github.com/KuNull/Probe"
								target="_blank"
								ariaLabel="Check out the Probe project"
							/>
						</div>
						<p className="secondaryText">PORTSCANNER THAT IMPLEMENTS MULTITHREADING FOR SWIFT SCANS.</p>
					</li>
	
	{/*
					<li>
						<h2>
							<Button
								button=""
								buttonClassName="pyrefox clickable"
								buttonHref="https://github.com/KuNull/PyreFox"
								target="_blank"
							/>
						</h2>
						<p className="secondaryText">user.js file for hardening Firefox browser.</p>
					</li>
	*/}

	{/*
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="signum clickable"
								buttonHref="https://signum-mu.vercel.app/"
								target="_blank"
								ariaLabel="Check out the Signum project"
							/>
						</div>
						<p className="secondaryText">WEB APP TO GENERATE PASSWORDS AND CHECK THEIR STRENGTH.</p>
					</li>
     	*/}

	{/*
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="steghound clickable"
								buttonHref=""
								target="_blank"
								ariaLabel="Check out the Steghound project"
							/>
						</div>
						<p className="secondaryText">Steganography tool that allows image, text, audio and video steganography.</p>
					</li>
	*/}

	{/*
					<li>
						<div className="capital">
							<Button
								button=""
								buttonClassName="suiteBox clickable"
								buttonHref=""
								target="_blank"
								aria-label="Check out the SuiteBox project"
							/>
						</div>
						<p className="secondaryText">Collection of Burp Suite extensions to enhace security testing.</p>
					</li>
	*/}
					
					<li>
						<div className="capital">
							<Button
								button="RISKORE"
								buttonClassName="riskore primaryButton clickable"
								buttonHref="https://riskore.vercel.app/"
								target="_blank"
								ariaLabel="Check out the RiSkore project"
							/>
						</div>
						<p className="secondaryText">WEB APP TO EVALUATE THE RISK FACED BY AN ORGANIZATION.</p>
					</li>
				</ul>
			</main>

			<Footer/>
		</>
	);
};

export default Projects;
