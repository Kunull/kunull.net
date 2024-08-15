import Button from '../components/button/button';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
// import profilepic from '../assets/images/profilepic.png';
// import profilepic2 from '../assets/images/image(1).png';

export const metadata = {
  title: 'Kunull | Kunal Walavalkar',
  openGraph: {
    title: 'Kunull | Kunal Walavalkar',
  },
}

const Home = () => {
	return (
		<>
			<Navbar
				previousPage="KUNULL"
				previousPageClassName="hidden"
				previousAriaLabel=""
				previousPageHref="/"
	
				slash=""
				slashClassName=""
	
				currentPage="KUNULL"
				currentPageClassName="tertiaryText currentPage glitch layers"
	
				option1Page="CERTIFICATIONS"	
				option1PageClassName="certifications secondaryButton clickable"
				option1PageAriaLabel=""
	
//				option2Page="experience clickable"
				option2Page="PROJECTS"
				option2PageClassName="projects secondaryButton clickable"
				option2PageAriaLabel=""

				option3Page="CVES"
				option3PageClassName="cves secondaryButton clickable"
				option3PageAriaLabel=""
					
				// pageOption3="cves clickable"
				// ariaLabel3="Go to my CVEs page"
			/>

					
			<main className="capital">
				<p className='spacing'>
					<span className="primaryText">HELLO. I AM </span>
					<span className="kunal primaryButton nonClickable">KUNAL WALAVALKAR</span>	
					<span className="primaryText">, A CYBER SECURITY RESEARCHER AND ENGINEER.</span>
    				</p>								
								
				<p className='spacing'>
					<span className="primaryText">THIS WEBSITE IS A MEANS TO SHOWCASE MY </span>
					<Button 
						button="PROJECTS" 
						buttonClassName="projects primaryButton clickable" 
						buttonHref="/projects" 
						ariaLabel=""
					/>
					<span className="primaryText"> AS WELL AS </span>
					<Button
						button="CERTIFICATIONS"
						buttonClassName="certifications primaryButton clickable"
						buttonHref="/certifications"
						ariaLabel=""
					/>
					<span className="primaryText">. IN MY FREE TIME I HUNT FOR </span>
					<Button 
						button="CVEs" 
						buttonClassName="cves primaryButton clickable" 
						buttonHref="https://kunull.vercel.app/cves" 
						ariaLabel=""
					/>
					<span className="primaryText"> AND PUBLISH </span>
					<Button 
						button="REPORTS" 
						buttonClassName="reports primaryButton clickable" 
						buttonHref="https://reports-kunull.vercel.app/" 
						target="_blank"
						ariaLabel=""
					/>
					<span className="primaryText"> FOR THE SAME.</span>
				</p>	
							
				<p className='spacing'>
					<span className="primaryText">ADDITIONALLY, I CREATE </span>
					<Button 
						button="WRITEUPS" 
						buttonClassName="write-ups primaryButton clickable" 
						buttonHref="https://writeups-kunull.vercel.app/" 
						target="_blank"
						ariaLabel=""
					/>
					<span className="primaryText"> FOR CTF CHALLENGES AND BOOT2ROOT MACHINES AND ALSO MAINTAIN A </span>
					<Button 
						button="BLOG" 
						buttonClassName="blog primaryButton clickable" 
						buttonHref="https://blog-kunull.vercel.app/" 
						target="_blank"
						ariaLabel=""
					/>
					<span className="primaryText"> WHERE I WRITE ABOUT MY INTERESTS.</span>
				</p>								
								
				<p className='spacing'>
					<span className="primaryText">SEND ME AN </span>
					<Button
						button="EMAIL"
						buttonClassName="email primaryButton clickable"
						buttonHref="mailto:kunull.contact@protonmail.com"
						target="_blank"
						ariaLabel=""
					/>
					<span className="primaryText"> IF YOU'D LIKE TO GET IN TOUCH. YOU CAN USE MY PUBLIC </span>
					<Button
						button="PGP KEY"
						buttonClassName="key primaryButton clickable"
						buttonHref="/assets/key/kunalwalavalkar_public_key.txt"
						target="_blank"
						ariaLabel=""
					/>
					<span className="primaryText"> FOR ENCRYPTION.</span>
				</p>
			</main>

							
			<Footer/>
		</>
	);
};

export default Home;
