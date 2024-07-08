import Button from '../components/button/button';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
// import profilepic from '../assets/images/profilepic.png';
// import profilepic2 from '../assets/images/image(1).png';

export const metadata = {
  title: 'Kunull / Kunal Walavalkar',
  openGraph: {
    title: 'Kunull / Kunal Walavalkar',
  },
}

const Home = () => {
	return (
		<>
			<Navbar
				previousPage=""
				previousPageClassName=""
				previousPageHref=""
				slash=""
				slashClassName=""
				currentPage="KUNULL"
				currentPageClassName="tertiary currentPage glitch layers"
				pageOption1="CERTIFICATIONS"	
				pageOption1ClassName="certifications secondaryButton clickable"
				ariaLabel1="Go to my Certifications page"
//				pageOption2="experience clickable"
				pageOption2="PROJECTS"
				pageOption2ClassName="projects secondaryButton clickable"
				ariaLabel2="Go to my Projects page"
				// pageOption3="cves clickable"
				// ariaLabel3="Go to my CVEs page"
			/>
					
			<main className="capital">
				<p className='spacing'>
					<span className="personal">HELLO. I'M </span>
					<span className="kunal nonClickable pages"></span>	
					<span className="personal">, A CYBER SECURITY RESEARCHER AND ENGINEER.</span>
    				</p>								
								
				<p className='spacing'>
					<span className="personal">THIS WEBSITE IS A MEANS TO SHOWCASE MY </span>
					<Button 
						button="PROJECTS" 
						buttonClassName="projects primaryButton clickable pages" 
						buttonHref="/projects" 
						ariaLabel="Go to my Projects page"
					/>
					<span className="personal"> AS WELL AS </span>
					<Button
						button="CERTIFICATIONS"
						buttonClassName="certifications primaryButton clickable pages"
						buttonHref="/certifications"
						ariaLabel="Go to my Certifications page"
					/>
					<span className="personal">.</span>
				</p>								
								
				<p className='spacing'>
					<span className="personal">IN MY FREE TIME I CREATE </span>
					<Button 
						button="WRITEUPS" 
						buttonClassName="write-ups primaryButton clickable pages" 
						buttonHref="https://kunullwrite-ups.vercel.app/" 
						target="_blank"
						ariaLabel="Go to my write-ups"
					/>
					<span className="personal"> FOR CTF CHALLENGES AND BOOT2ROOT MACHINES. I ALSO SHARE MY LEARNINGS AND EXPERIENCES ON MY </span>
					<Button 
						button="BLOG" 
						buttonClassName="blog primaryButton clickable pages" 
						buttonHref="https://kunullblog.vercel.app/" 
						target="_blank"
						ariaLabel="Go to my blog"
					/>
					<span className="personal">.</span>
				</p>								
								
				<p className='spacing'>
					<span className="personal">SEND ME AN </span>
					<Button
						button="EMAIL"
						buttonClassName="email primaryButton clickable pages"
						buttonHref="mailto:llunuk@protonmail.com"
						target="_blank"
						ariaLabel="Send me an e-mail"
					/>
					<span className="personal"> IF YOU'D LIKE TO GET IN TOUCH. YOU CAN USE MY PUBLIC </span>
					<Button
						button="PGP KEY"
						buttonClassName="key primaryButton clickable pages"
						buttonHref="/assets/key/kunalwalavalkar_public_key.txt"
						target="_blank"
						ariaLabel="Use my pgp key"
					/>
					<span className="personal"> FOR ENCRYPTION.</span>
				</p>
			</main>

			<Footer/>
		</>
	);
};

export default Home;
