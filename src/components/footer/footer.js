import Button from '../button/button';
import './footer.css';
import '../button/button';

const Footer = ({ button, buttonClassName1, buttonClassName2, buttonClassName3, buttonClassName4, buttonClassName5, buttonClassName6, buttonClassName7, buttonHref, slash, page, pageClassName}) => {
	return (
		<footer className="capital">
      <ul className="footerUl">
				<li className="footerLi">
					<Button 
	          button=""
						buttonClassName={buttonClassName1}
						buttonHref="mailto:walavalkarkunal@skiff.com"
						target="_blank"
						ariaLabel="Send me an email"
	        />
				</li>
		
				<li className="footerLi">
	        <Button 
	    			button=""
						buttonClassName={buttonClassName2}
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
						buttonClassName={buttonClassName3}
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
				  	buttonClassName={buttonClassName4}
						buttonHref="https://kunalwalavalkar.vercel.app/assets/key/kunalwalavalkar_public_key.txt"
						target="_blank"
						ariaLabel="Get my public PGP key"
	    		/>
  			</li>		

			  <li className="footerLi">
					<Button 
	    			button=""
						buttonClassName={buttonClassName5}
						buttonHref="https://kunalwalavalkar.vercel.app/Kunal Walavalkar Resume.pdf"
						target="_blank"
						ariaLabel="Check out my resume"
	  			/>
				</li>		

				<li className="footerLi">
					<Button 
	          button=""
						buttonClassName={buttonClassName6}
						buttonHref="https://tryhackme.com/p/Knign"
						target="_blank"
						ariaLabel="Go to my TryHackMe account"
	    		/>
  			</li>	

				<li className="footerLi">
					<Button 
	          button=""
						buttonClassName={buttonClassName7}
						buttonHref="https://kunalwalavalkarwrite-ups.vercel.app"
						target="_blank"
						ariaLabel="Check out my CTF write-ups"
	    		/>
      	</li>
  		</ul>
    </footer>

	);
};

export default Footer;
