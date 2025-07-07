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
				previousPage="Kunull"
				previousPageClassName="tertiaryButton clickable glitch layers"
				previousPageAriaLabel=""
				previousPageHref="/"
				
				slash="&nbsp;/&nbsp;"
				slashClassName="tertiaryText slash"
				
				currentPage="projects"
				currentPageClassName="tertiaryText currentPage"
//				option2Page="experience clickable"

				option1Page="certifications"
				option1PageClassName="certifications secondaryButton clickable"
				option1PageAriaLabel=""
	
				option2Page="projects"
				option2PageClassName="projects hidden clickable"
				option2PageAriaLabel=""

				option3Page="CVEs"
				option3PageClassName="cves secondaryButton clickable"
				option3PageAriaLabel=""
			/>

					
			<main>
				<ul className="grid">
					<li>
						<div className="capital">
							<Button
								button="ESREVER"
								buttonClassName="esrever primaryButton clickable"
								buttonHref=""
								target="_blank"
								ariaLabel=""
							/>
						</div>
						<p className="secondaryText">Binary analysis and reverse engineering toolkit. (Coming soon)..</p>
					</li>
					
					<li>
						<div className="capital">
							<Button
								button="EMPOWERSHELL"
								buttonClassName="empower primaryButton clickable"
								buttonHref="https://github.com/Kunull/EmpowerShell"
								target="_blank"
								ariaLabel=""
							/>
						</div>
						<p className="secondaryText">Powershell utility script that compares hashes to check the integrity of files.</p>
					</li>
	
					<li>
						<div className="capital">
							<Button
								button="HEXPLORER"
								buttonClassName="hexplorer primaryButton clickable"
								buttonHref="https://github.com/Kunull/Hexplorer/"
								target="_blank"
								ariaLabel=""
							/>
						</div>
						<p className="secondaryText">Command-line utility to dump the binary and hexadecimal redition of a file.</p>
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
						<p className="secondaryText">Cryptography toolkit that allows users to encode and decode text using an algorithm of their choice.</p>
					</li>
	
					<li>
						<div className="capital">
							<Button
								button="NETSLEUTH"
								buttonClassName="netSleuth primaryButton clickable"
								buttonHref="https://github.com/Kunull/NetSleuth/"
								target="_blank"
								ariaLabel=""
							/>
						</div>
						<p className="secondaryText">Network scanner that finds all the devices connected in the network.</p>
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
						<p className="secondaryText">POC for a free, open-source Security Operations Centre with automation capabilities.</p>
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
								buttonHref="https://github.com/Kunull/Probe"
								target="_blank"
								ariaLabel=""
							/>
						</div>
						<p className="secondaryText">Port scanner that implements multithreading for swift scans.</p>
					</li>

					<li>
						<div className="capital">
							<Button
								button="PROXDUMP"
								buttonClassName="proxdump primaryButton clickable"
								buttonHref="https://github.com/Kunull/proxdump"
								target="_blank"
								ariaLabel=""
							/>
						</div>
						<p className="secondaryText">Dumps readilty usable proxies for multiple purposes.</p>
					</li>
	
	{/*
					<li>
						<h2>
							<Button
								button=""
								buttonClassName="pyrefox clickable"
								buttonHref="https://github.com/Kunull/PyreFox"
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
						<p className="secondaryText">Web application to evaluate risk faced by an organization.</p>
					</li>
				</ul>
			</main>

									
			<Footer/>
		</>
	);
};

export default Projects;
