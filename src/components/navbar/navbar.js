import Button from '../button/button';
import './navbar.css';
import '../button/button.css';

const Navbar = ({ previousPage, previousPageClassName, previousPageHref, slash, slashClassName, currentPage, currentPageClassName, smallSlash1, 
		 pageOption1, pageOption2, pageOption3, pageOption1ClassName, pageOption2ClassName, pageOption3ClassName, ariaLabel, ariaLabel1, ariaLabel3 }) => {
	return (
		<header className="capital">
				<nav>
					<div className="currentNav">
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
					</div>
	
					<ul className="pageOptionUl">
						<li className="pageOptionLi">
							<Button 
		            					button={pageOption1}
								buttonClassName={pageOption1ClassName}
								buttonHref="/certifications"
								ariaLabel={ariaLabel1}
		   					/>
	    					</li>
						

						<li className="pageOptionLi">
							<Button 
		            					button={pageOption2}
								buttonClassName={pageOption2ClassName}
								buttonHref="/projects"
								ariaLabel={ariaLabel3}
		           				/>
	          				</li>


						<li className="pageOptionLi">
							<Button 
		            					button={pageOption3}
								buttonClassName={pageOption3ClassName}
								buttonHref="/cves"
								ariaLabel={ariaLabel3}
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
