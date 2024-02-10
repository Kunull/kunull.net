import Button from '../button/button';
import './footer.css';
import '../button/button';

const Footer = () => {
	return (
		<footer className="capital">
     			<ul className="footerUl">
		<		li className="footerLi">
					<Button 
	          				button=""
						buttonClassName="blog clickable"
						buttonHref="https://kunalwalavalkarblog.vercel.app"
						target="_blank"
						ariaLabel="Visit my blog"
	        			/>
				</li>
							
				<li className="footerLi">
					<Button 
	          				button=""
						buttonClassName="email clickable"
						buttonHref="mailto:walavalkarkunal@skiff.com"
						target="_blank"
						ariaLabel="Send me an email"
	        			/>
				</li>
		
				<li className="footerLi">
	        			<Button 
	    					button=""
						buttonClassName="github clickable"
						buttonHref="https://github.com/knign"
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
	          				button=""
				  		buttonClassName="linkedin clickable"
						buttonHref="https://www.linkedin.com/in/kunalwalavalkar/"
						target="_blank"
						ariaLabel="Visit my LinkedIn profile"
	    				/>
  				</li>	

				<li className="footerLi">
					<Button 
	          				button=""
				  		buttonClassName="key clickable"
						buttonHref="https://kunalwalavalkar.vercel.app/assets/key/kunalwalavalkar_public_key.txt"
						target="_blank"
						ariaLabel="Get my public PGP key"
	    				/>
  				</li>		

			  	<li className="footerLi">
					<Button 
	    					button=""
						buttonClassName="resume clickable"
						buttonHref="https://kunalwalavalkar.vercel.app/assets/resume/Kunal Walavalkar Resume.pdf"
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
	          				button=""
						buttonClassName="write-ups clickable"
						buttonHref="https://kunalwalavalkarwrite-ups.vercel.app"
						target="_blank"
						ariaLabel="Visit out my CTF write-ups"
	    				/>
      				</li>
  			</ul>
    		</footer>
	);
};

export default Footer;
