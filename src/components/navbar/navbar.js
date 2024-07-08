import Button from '../button/button';
import './navbar.css';
import '../button/button.css';

const Navbar = ({ previousPage, previousPageClassName, previousPageAriaLabel, previousPageHref, slash, slashClassName, currentPage, currentPageClassName, smallSlash1, option1Page, option1PageClassName, option1PageAriaLabel, option2Page, option2PageClassName, option2PageAriaLabel, option3Page, option3PageClassName, option3PageAriaLabel }) => {
	return (
		<header className="capital">
				<nav>
					<div className="currentNav">
						<Button 
							button={previousPage} 
							buttonClassName={previousPageClassName} 
							ariaLabel={previousPageAriaLabel}
							buttonHref={previousPageHref} 
						/>
						<span className={slashClassName}>
							{slash}
						</span>
						<span className={currentPageClassName} data-text={currentPage}>
							{currentPage}
						</span>
						<span>
							&nbsp;►
						</span>

							
		/*
						<div>
							<Button 
								button={previousPage} 
								buttonClassName={previousPageClassName} 
								ariaLabel={previousPageAriaLabel}
								buttonHref={previousPageHref} 
							/>
						</div>
						<div className={slashClassName}>
							{slash}
						</div>
						<div className={currentPageClassName} data-text={currentPage}>
							<span>
								{currentPage}
							</span>
							&nbsp;►
						</div>
      		*/
					</div>
	
					<ul className="pageOptionUl">
						<li className="pageOptionLi">
							<Button 
		            					button={option1Page}
								buttonClassName={option1PageClassName}
								buttonHref="/certifications"
								ariaLabel={option1PageAriaLabel}
		   					/>
	    					</li>
						

						<li className="pageOptionLi">
							<Button 
		            					button={option2Page}
								buttonClassName={option2PageClassName}
								buttonHref="/projects"
								ariaLabel={option2PageAriaLabel}
		           				/>
	          				</li>


						<li className="pageOptionLi">
							<Button 
		            					button={option3Page}
								buttonClassName={option3PageClassName}
								buttonHref="/cves"
								ariaLabel={option2PageAriaLabel}
		    					/>
    						</li>
					</ul>
				</nav>
		</header>
	);
};

Navbar.defaultProps = {
	title: '',
	list1: '',
	list2: '',
};

export default Navbar;
