import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

export const metadata = {
  title: 'Kunull | Projects',
  openGraph: {
    title: 'Kunull | Projects',
  },
}

const Projects = () => {
	return (
		<>
			<Navbar
				previousPage="KUNULL"
				previousPageClassName="tertiaryButton clickable glitch layers"
				previousPageAriaLabel=""
				previousPageHref="/"
				
				slash="&nbsp;/&nbsp;"
				slashClassName="tertiaryText slash"
				
				currentPage="PROJECTS"
				currentPageClassName="tertiaryText currentPage"
//				option2Page="experience clickable"

				option1Page="CERTIFICATIONS"
				option1PageClassName="certifications secondaryButton clickable"
				option1PageAriaLabel=""
	
				option2Page="PROJECTS"
				option2PageClassName="projects hidden clickable"
				option2PageAriaLabel=""

				option3Page="CVES"
				option3PageClassName="cves secondaryButton clickable"
				option3PageAriaLabel=""
			/>

					
			<main>
				<ul className="grid">
					<li>
						<div className="capital">
							<Button
								button="EMPOWERSHELL"
								buttonClassName="empower primaryButton clickable"
								buttonHref="https://github.com/KuNull/Custos-Shell"
								target="_blank"
								ariaLabel=""
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
								ariaLabel=""
							/>
						</div>
						<p className="secondaryText">COMMAND-LINE UTILITY TO DUMP THE BINARY AND HEXADECIMAL RENDITION OF A FILE.</p>
					</li>

					<li>
						<div className="capital">
							<Button
								button="KRYPTOS"
								buttonClassName="kryptos primaryButton clickable"
								buttonHref="https://kryptos.streamlit.app/"
								target="_blank"
								ariaLabel=""
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
								ariaLabel=""
							/>
						</div>
						<p className="secondaryText">NETWORK SCANNER THAT FINDS ALL THE DEVICES CONNECTED IN THE NETWORK.</p>
					</li>
	
					<li>
						<div className="capital">
							<Button
								button="F.O.S.S.O.C."
								buttonClassName="fossoc primaryButton clickable"
								buttonHref="https://fossoc.gitbook.io/"
								target="_blank"
								ariaLabel=""
							/>
						</div>
						<p className="secondaryText">POC FOR A FREE, OPEN-SOURCE SECURITY OPERATIONS CENTRE WHICH POSSESES AUTOMATION CAPABILITIES.</p>
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
								ariaLabel=""
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
								ariaLabel=""
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
