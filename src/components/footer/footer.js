import Button from '../button/button';
import './footer.css';
import '../button/button';

const Footer = () => {
	return (
		<footer className="capital">
     			<ul className="footerUl">
				<li className="footerLi">
					<Button 
	          				button=""
						buttonClassName="email"
						buttonHref="mailto:walavalkarkunal@skiff.com"
						target="_blank"
						ariaLabel="Send me an email"
	        			/>
				</li>
		
				<li className="footerLi">
	        			<Button 
	    					button=""
						buttonClassName="github"
						buttonHref="https://github.com/knign"
						target="_blank"
			  			ariaLabel="Go to my Github account"
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

				<li className="footerLi">
					<Button 
	          				button=""
						buttonClassName="hackTheBox"
						buttonHref="https://app.hackthebox.com/profile/1158503"
						ariaLabel="Go to my Hack the Box account"
	    				/>
    				</li>

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
				  		buttonClassName="key"
						buttonHref="https://kunalwalavalkar.vercel.app/assets/key/kunalwalavalkar_public_key.txt"
						target="_blank"
						ariaLabel="Get my public PGP key"
	    				/>
  				</li>		

			  	<li className="footerLi">
					<Button 
	    					button=""
						buttonClassName="resume"
						buttonHref="https://kunalwalavalkar.vercel.app/assets/resume/Kunal Walavalkar Resume.pdf"
						target="_blank"
						ariaLabel="Check out my resume"
	  				/>
				</li>		

				<li className="footerLi">
					<Button 
	          				button=""
						buttonClassName="tryHackMe"
						buttonHref="https://tryhackme.com/p/Knign"
						target="_blank"
						ariaLabel="Go to my TryHackMe account"
	    				/>
  				</li>	

				<li className="footerLi">
					<Button 
	          				button=""
						buttonClassName="writeUps"
						buttonHref="https://kunalwalavalkar.gitbook.io/write-ups/"
						target="_blank"
						ariaLabel="Check out my CTF write-ups"
	    				/>
      				</li>
  			</ul>
    		</footer>
	);
};

export default Footer;
