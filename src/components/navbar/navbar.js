import Button from '../button/button';
import './navbar.css';
import '../button/button.css';

const Navbar = ({ button, buttonClassName, buttonHref, slash, slashClassName, page, pageClassName, smallSlash1, pageOption1, pageOption2, pageOption3, ariaLabel, ariaLabel1, ariaLabel3 }) => {
	return (
		<header className="capital">
				<div className="stickyNav">
					<nav>
						<div>
							<Button button={button} buttonClassName={buttonClassName} buttonHref={buttonHref} ariaLabel={ariaLabel}/>
						</div>
						<div className={slashClassName}>
							{slash}
						</div>
						<div className={pageClassName} data-text={page}>
							<span>
								{page}
							</span>
							&nbsp;►
						</div>
					</nav>
	
					<ul className="pageOptionUl">
						<li className="pageOptionLi">
							<Button 
		            button=""
								buttonClassName={pageOption1}
								buttonHref="/certifications"
								ariaLabel={ariaLabel1}
		   				/>
	    			</li>
						
{/*
						<li className="pageOptionLi">
							<Button 
		            					button=""
								buttonClassName={pageOption2}
								buttonHref="https://kunalwalavalkar.vercel.app/experience"
		           				/>
	          				</li>
*/}

						<li className="pageOptionLi">
							<Button 
		            button=""
								buttonClassName={pageOption3}
								buttonHref="/projects"
								ariaLabel={ariaLabel3}
		    			/>
    				</li>
					</ul>
				</div>
		</header>
	);
};

Navbar.defaultProps = {
	title: '',
	list1: '',
	list2: '',
};

export default Navbar;
