import Button from '../button/button';
import './footer.css';
import '../button/button';

const Footer = () => {
	return (
		<footer className="capital">
     			<ul className="footerUl">
				<ul className="footerGridInner">
				  	<li className="footerLi">
						<Button 
		    					button="REPORTS"
							buttonClassName="reports secondaryButton clickable"
							buttonHref="https://reports-kunull.vercel.app"
							target="_blank"
							ariaLabel=""
		  				/>
					</li>

					<li className="footerLi">
		        			<Button 
		    					button="GITHUB"
							buttonClassName="github secondaryButton clickable"
							buttonHref="https://github.com/kunull"
							target="_blank"
				  			ariaLabel=""
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

				</ul>
				
				<li className="footerLi">
					<Button 
	          				button="WRITEUPS"
						buttonClassName="write-ups secondaryButton clickable"
						buttonHref="https://writeups-kunull.vercel.app"
						target="_blank"
						ariaLabel=""
	    				/>
      				</li>

				<li className="footerLi">
					<Button 
	          				button="LINKEDIN"
				  		buttonClassName="linkedin secondaryButton clickable"
						buttonHref="https://www.linkedin.com/in/kunull/"
						target="_blank"
						ariaLabel=""
	    				/>
  				</li>

				<li className="footerLi">
					<Button 
	          				button="PGP KEY"
				  		buttonClassName="key secondaryButton clickable"
						buttonHref="https://kunull.vercel.app/assets/key/kunalwalavalkar_public_key.txt"
						target="_blank"
						ariaLabel=""
	    				/>
  				</li>	
							
				<li className="footerLi">
					<Button 
	          				button="BLOG"
						buttonClassName="blog secondaryButton clickable"
						buttonHref="https://blog-kunull.vercel.app/"
						target="_blank"
						ariaLabel=""
	        			/>
				</li>

			  	<li className="footerLi">
					<Button 
	    					button="RESUME"
						buttonClassName="resume secondaryButton clickable"
						buttonHref="/assets/resume/Kunal-Walavalkar-Resume.pdf"
						target="_blank"
						ariaLabel="Check out my resume"
	  				/>
				</li>
  			</ul>
    		</footer>
	);
};

export default Footer;
