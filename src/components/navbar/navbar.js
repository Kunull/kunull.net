import Button from '../button/button';
import './navbar.css';
import '../button/button.css';

const Navbar = ({ previousPage, previousPageClassName, previosPageAriaLabel, previousPageHref, slash, slashClassName, currentPage, currentPageClassName, smallSlash1, option1Page, option1PageClassName, option1PageAriaLabel, option2Page, option2PageClassName, option2PageAriaLabel, option3Page, option3PageClassName, option3PageAriaLabel }) => {
	return (
		<header className="capital">
				<nav>
					<div className="currentNav">
						<div>
							<Button 
								button={previousPage} 
								buttonClassName={previousPageClassName} 
								ariaLabel={previosPageAriaLabel}
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
		            					button={option2page}
								buttonClassName={option2pageClassName}
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
