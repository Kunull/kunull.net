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
				button=""
				buttonClassName=""
				buttonHref=""
				slash=""
				slashClassName=""
				page="KUNULL"
				pageClassName="currentPage glitch layers"
				pageOption1="certifications clickable"
				ariaLabel1="Go to my Certifications page"
//				pageOption2="experience clickable"
				pageOption2="projects clickable"
				ariaLabel2="Go to my Projects page"
				// pageOption3="cves clickable"
				// ariaLabel3="Go to my CVEs page"
			/>
					
			<main className="capital">
				<p className='spacing'>
					<span className="personal">HELLO. I'M </span>
					<span className="kunal nonClickable pages">
{/*						
						<div class="profilepic">
  							<img src={profilepic} width="200" alt=""/>
						</div>	
*/}					
					</span>	
{/*	
					<span className="personal">, AKA </span>
					<span className="knign nonClickable pages">
*/}	
{/*						
						<div class="profilepic2">
  							<img src={profilepic2} width="200" alt=""/>
						</div>	
					
     					</span>
*/}	
					<span className="personal">, A CYBER SECURITY RESEARCHER AND ENGINEER.</span>
{/*					
					<span className="personal">, A PENETRATION TESTER BY PROFESSION AND CVE RESEARCHER BY AVOCATION.</span>
*/}
    				</p>								
								
				<p className='spacing'>
					<span className="personal">THIS WEBSITE IS A MEANS TO SHOWCASE MY </span>
					<Button 
						button="" 
						buttonClassName="projects clickable pages" 
						buttonHref="/projects" 
						ariaLabel="Go to my Projects page"
					/>
					<span className="personal"> AS WELL AS </span>
					<Button
						button=""
						buttonClassName="certifications clickable pages"
						buttonHref="/certifications"
						ariaLabel="Go to my Certifications page"
					/>
{/*					
					<span className="personal"> AND ALSO SHARE MY </span>
					<Button
						button=""
						buttonClassName="experience clickable pages"
						buttonHref="/experience"
						aria-label="Go to my Experience page"
					/>
*/}
					<span className="personal">.</span>
				</p>								
								
				<p className='spacing'>
					<span className="personal">IN MY FREE TIME I CREATE </span>
					<Button 
						button="" 
						buttonClassName="write-ups clickable pages" 
						buttonHref="https://kunullwrite-ups.vercel.app/" 
						target="_blank"
						ariaLabel="Go to my write-ups"
					/>
					<span className="personal"> FOR CTF CHALLENGES AND BOOT2ROOT MACHINES. I ALSO SHARE MY LEARNINGS AND EXPERIENCES ON MY </span>
					<Button 
						button="" 
						buttonClassName="blog clickable pages" 
						buttonHref="https://kunullblog.vercel.app/" 
						target="_blank"
						ariaLabel="Go to my blog"
					/>
					<span className="personal">.</span>
				</p>								
								
				<p className='spacing'>
					<span className="personal">SEND ME AN </span>
					<Button
						button=""
						buttonClassName="email clickable pages"
						buttonHref="mailto:llunuk@protonmail.com"
						target="_blank"
						ariaLabel="Send me an e-mail"
					/>
					<span className="personal"> IF YOU'D LIKE TO GET IN TOUCH. YOU CAN USE MY PUBLIC </span>
					<Button
						button=""
						buttonClassName="key clickable pages"
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
