import './button.css';
import '../navbar/navbar.css';
import Link from 'next/link';

const Button = ({ button, buttonClassName, buttonHref, target, ariaLabel }) => {
	return (
		<>
			<Link className={buttonClassName} href={buttonHref} target={target} data-text={button} aria-label={ariaLabel}>
				<span>
					{button}
				</span>
				// {button}
			</Link>
		</>
	);
};

Button.defaultProps = {
	target: '',
};

export default Button;
