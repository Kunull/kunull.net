import './Button.css';
import '../Navbar/Navbar.css';
import Link from 'next/link';

const Button = ({ button, buttonClassName, buttonHref, target, ariaLabel }) => {
	return (
		<>
			<Link className={buttonClassName} href={buttonHref} target={target} data-text={button} aria-label={ariaLabel}>
				<span>
					{button}
				</span>
			</Link>
		</>
	);
};

Button.defaultProps = {
	target: '',
};

export default Button;
