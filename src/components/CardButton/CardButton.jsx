import './CardButton.scss';

function CardButton({children, className}) {
	const classButton = 'card-button' + ( className ? ' '+ className : '');

	return (
		<button className={classButton}>
			{children}
		</button>
	);
}

export default CardButton;
