import Button from '../button/button';
import './footer.css';
import '../button/button';

const Footer = () => {
	return (
		<footer className="capital">
     			<ul className="footerUl">
				<li className="footerLi">
					<Button 
	          				button="BLOG"
						buttonClassName="blog secondaryButton clickable"
						buttonHref="https://kunullblog.vercel.app"
						target="_blank"
						ariaLabel="Visit my blog"
	        			/>
				</li>
							
				<li className="footerLi">
					<Button 
	          				button="EMAIL"
						buttonClassName="email secondaryButton clickable"
						buttonHref="mailto:llunuk@protonmail.com"
						target="_blank"
						ariaLabel="Send me an email"
	        			/>
				</li>
		
				<li className="footerLi">
	        			<Button 
	    					button="GITHUB"
						buttonClassName="github secondaryButton clickable"
						buttonHref="https://github.com/kunull"
						target="_blank"
			  			ariaLabel="Visit my Github profile"
	  				/>
    				</li>

{/*
					<li className="footerLi">
						<Button 
	            					button=""
							buttonClassName="hackerOne clickable"
							buttonHref="https://hackerone.com/knign?type=user"
							target="_blank"
	    					/>
          				</li>
*/}
{/*
				<li className="footerLi">
					<Button 
	          				button=""
						buttonClassName="hack-the-box clickable"
						buttonHref="https://app.hackthebox.com/profile/1158503"
						target="_blank"
						ariaLabel="Visit my HackTheBox profile"
	    				/>
    				</li>
*/}
{/*								
					<li className="footerLi">
						<Button 
	            					button=""
							buttonClassName="huntr clickable"
							buttonHref="https://huntr.com/users/knign/"
							target="_blank"
	    					/>
          				</li>
*/}

{/*								
					<li className="footerLi">
						<Button 
	            					button=""
							buttonClassName="intigriti clickable"
							buttonHref="https://app.intigriti.com/researcher/profile/knign"
							target="_blank"
	    					/>
          				</li>
*/}
{/*								
					<li className="footerLi">
						<Button 
	            					button=""
							buttonClassName="medium clickable"
							buttonHref="https://medium.com/@Knign"
							target="_blank"
	    					/>
          				</li>	
*/}
				<li className="footerLi">
					<Button 
	          				button="LINKEDIN"
				  		buttonClassName="linkedin secondaryButton clickable"
						buttonHref="https://www.linkedin.com/in/kunalwalavalkar/"
						target="_blank"
						ariaLabel="Visit my LinkedIn profile"
	    				/>
  				</li>

{/*
				<li className="footerLi">
					<Button 
	          				button=""
				  		buttonClassName="notes clickable"
						buttonHref=""
						target="_blank"
						ariaLabel="Visit my LinkedIn profile"
	    				/>
  				</li>
*/}

				<li className="footerLi">
					<Button 
	          				button="PGP KEY"
				  		buttonClassName="key secondaryButton clickable"
						buttonHref="https://kunull.vercel.app/assets/key/kunalwalavalkar_public_key.txt"
						target="_blank"
						ariaLabel="Get my public PGP key"
	    				/>
  				</li>	

{/*
			  	<li className="footerLi">
					<Button 
	    					button=""
						buttonClassName="reports clickable"
						buttonHref=""
						target="_blank"
						ariaLabel="Check out my resume"
	  				/>
				</li>
*/}

			  	<li className="footerLi">
					<Button 
	    					button="RESUME"
						buttonClassName="resume secondaryButton clickable"
						buttonHref="/assets/resume/Kunal-Walavalkar-Resume.pdf"
						target="_blank"
						ariaLabel="Check out my resume"
	  				/>
				</li>		

{/*							
				<li className="footerLi">
					<Button 
	          				button=""
						buttonClassName="try-hack-me clickable"
						buttonHref="https://tryhackme.com/p/Knign"
						target="_blank"
						ariaLabel="Visit my TryHackMe profile"
	    				/>
  				</li>	
*/}

				<li className="footerLi">
					<Button 
	          				button=WRITEUPS""
						buttonClassName="write-ups secondaryButton clickable"
						buttonHref="https://kunullwrite-ups.vercel.app"
						target="_blank"
						ariaLabel="Visit out my CTF write-ups"
	    				/>
      				</li>
  			</ul>
    		</footer>
	);
};

export default Footer;
