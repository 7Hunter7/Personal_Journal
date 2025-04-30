import './CardButton.scss';

function CardButton({children}) {
	return (
		<button className='card-button'>
			{children}
		</button>
	);
}

export default CardButton;
