import Button from '../components/button/button';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
// import profilepic from '../assets/images/profilepic.png';
// import profilepic2 from '../assets/images/image(1).png';

export const metadata = {
  title: 'Kunal Walavalkar | Cybersecurity',
  openGraph: {
    title: 'Kunal Walavalkar | Cybersecurity',
  },
}

const Home = () => {
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
            <h2 className="previous glitch layers" data-text="KW"><div>KW ►</div></h2>
        </div> */}
			
			<Navbar
				button=""
				buttonClassName=""
				buttonHref=""
				slash=""
				slashClassName=""
				page="KW"
				pageClassName="currentPage glitch layers"
				pageOption1="certifications clickable"
				ariaLabel1="Go to my Certifications page"
//				pageOption2="experience clickable"
				pageOption3="projects clickable"
				ariaLabel3="Go to my Projects page"
			/>
					
			<main className="capital">
				<p className='spacing'>
					<span className="personal">HELLO. I'M </span>
					<span className="kunalWalavalkar nonClickable pages">
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
					<span className="personal">, A COMPUTER ENGINEERING AND CYBER SECURITY STUDENT.</span>
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
					<span className="personal">IN MY FREE TIME I LIKE TO SOLVE CTF CHALLENGES AND MAKE </span>
					<Button 
						button="" 
						buttonClassName="writeUps clickable pages" 
						buttonHref="https://kunalwalavalkar.gitbook.io/write-ups/" 
						target="_blank"
						ariaLabel="Go to my Write-Ups page"
					/>
					<span className="personal"> FOR THE SAME.</span>
				</p>								
								
				<p className='spacing'>
					<span className="personal">SEND ME AN </span>
					<Button
						button=""
						buttonClassName="email clickable pages"
						buttonHref="mailto:walavalkarkunal@skiff.com"
						target="_blank"
						ariaLabel="Send me an e-mail"
					/>
					<span className="personal"> IF YOU'D LIKE TO GET IN TOUCH. YOU CAN USE MY PUBLIC </span>
					<Button
						button=""
						buttonClassName="key clickable pages"
						buttonHref="https://kunalwalavalkar.vercel.app/kunalwalavalkar_public_key.txt"
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
