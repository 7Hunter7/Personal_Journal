import './CardButton.scss';

function CardButton({children, className, ...props}) {
	const classButton = 'card-button' + ( className ? ' '+ className : '');

	return (
		<button {...props} className={classButton}>
			{children}
		</button>
	);
}

export default CardButton;
