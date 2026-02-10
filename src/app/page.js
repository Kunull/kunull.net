import Button from '../components/Button/Button';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
// import profilepic from '../assets/images/profilepic.png';
// import profilepic2 from '../assets/images/image(1).png';

export const metadata = {
  title: 'Kunull // Kunal Walavalkar',
  openGraph: {
    title: 'Kunull // Kunal Walavalkar',
  },
}

const Home = () => {
	return (
		<>
			<Navbar
				previousPage="Kunull"
				previousPageClassName="hidden"
				previousAriaLabel=""
				previousPageHref="/"
	
				slash=""
				slashClassName=""
	
				currentPage="Kunull"
				currentPageClassName="tertiaryText currentPage glitch layers"
	
				option1Page="certifications"	
				option1PageClassName="certifications secondaryButton clickable"
				option1PageAriaLabel=""
	
//				option2Page="experience clickable"
				option2Page="projects"
				option2PageClassName="projects secondaryButton clickable"
				option2PageAriaLabel=""

				option3Page="CVEs"
				option3PageClassName="cves secondaryButton clickable"
				option3PageAriaLabel=""
					
				// pageOption3="cves clickable"
				// ariaLabel3="Go to my CVEs page"
			/>

					
			<main className="capital">
				<p className='spacing'>
					<span className="primaryText">Hello. I am </span>
					<Button 
						button="kunal" 
						buttonClassName="kunal primaryButton nonClickable" 
						buttonHref="https://en.wikipedia.org/wiki/Personal_name" 
						target="_blank"
						ariaLabel=""
					/>
					<span className="primaryText"> aka </span>
					<Button 
						button="kunull" 
						buttonClassName="kunull primaryButton nonClickable" 
						buttonHref="https://en.wikipedia.org/wiki/Pseudonym" 
						target="_blank"
						ariaLabel=""
					/>
					<span className="primaryText">, a Security Researcher and Engineer.</span>
				</p>		

				<p>
					<span className="primaryText">In my spare time I conduct vulnerability and malware </span>
					<Button 
						button="research" 
						buttonClassName="research primaryButton clickable" 
						buttonHref="https://research.kunull.net/" 
						target="_blank"
						ariaLabel=""
					/>
					<span className="primaryText">, discovering security flaws and analyzing malicious software.</span>
				</p>						
								
				<p className='spacing'>
					<span className="primaryText">This site showcases my </span>
					<Button 
						button="projects" 
						buttonClassName="projects primaryButton clickable" 
						buttonHref="/projects" 
						ariaLabel=""
					/>
					<span className="primaryText"> as well as </span>
					<Button
						button="certifications"
						buttonClassName="certifications primaryButton clickable"
						buttonHref="/certifications"
						ariaLabel=""
					/>
					<span className="primaryText">. in my spare time I conduct vulnerability and malware </span>
					<Button 
						button="research" 
						buttonClassName="research primaryButton clickable" 
						ariaLabel=""
					/>
					<span className="primaryText">.</span>
				</p>	
							
				<p className='spacing'>
					<span className="primaryText">Additionally, I publish </span>
					<Button 
						button="writeups" 
						buttonClassName="write-ups primaryButton clickable" 
						buttonHref="https://writeups.kunull.net/" 
						ariaLabel=""
					/>
					<span className="primaryText"> for CTF challenges and Boot2Root machines, and share interests on my </span>
					<Button 
						button="blog" 
						buttonClassName="blog primaryButton clickable" 
						buttonHref="https://blog.kunull.net/" 
						target="_blank"
						ariaLabel=""
					/>
					<span className="primaryText">.</span>
				</p>								
								
				<p className='spacing'>
					<span className="primaryText">Send me an </span>
					<Button
						button="email"
						buttonClassName="email primaryButton clickable"
						buttonHref="mailto:contact@kunull.net"
						target="_blank"
						ariaLabel=""
					/>
					<span className="primaryText"> or message me through </span>
					<Button
						button="Matrix"
						buttonClassName="matrix primaryButton clickable"
						buttonHref="https://matrix.to/#/@kunull:matrix.org"
						target="_blank"
						ariaLabel=""
					/>			
					<span className="primaryText"> if you'd like to get in touch.</span>
{/*						
					<span className="primaryText"> IF YOU'D LIKE TO GET IN TOUCH. YOU CAN USE MY PUBLIC </span>
					<Button
						button="PGP KEY"
					 	buttonClassName="key primaryButton clickable"
					 	buttonHref="/assets/key/kunalwalavalkar_public_key.txt"
					 	target="_blank"
					 	ariaLabel=""
					 />
					 <span className="primaryText"> FOR ENCRYPTION.</span>
*/}
				</p>
			</main>

							
			<Footer/>
		</>
	);
};

export default Home;
