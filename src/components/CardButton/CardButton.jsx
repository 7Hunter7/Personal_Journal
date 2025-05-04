import styles from './CardButton.module.scss';

function CardButton({children, className, ...props}) {
	const classButton = [styles.cardButton, className].filter(Boolean).join(' ');

	return (
		<button {...props} className={classButton}>
			{children}
		</button>
	);
}

export default CardButton;
