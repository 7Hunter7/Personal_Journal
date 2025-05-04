import CardButton from '../CardButton/CardButton';
import styles from './JournalAddButton.module.scss';

function JournalAddButton({clearForm}) {
	return (
		<CardButton className={styles['journal-add']} onClick={clearForm}>
			<svg 
				xmlns="http://www.w3.org/2000/svg" 
				width="32" 
				height="32" 
				viewBox="0 0 24 24"
				fill="#fff">
				<path d="M12 21q-.425 0-.712-.288T11 20v-7H4q-.425 0-.712-.288T3 12t.288-.712T4 11h7V4q0-.425.288-.712T12 3t.713.288T13 4v7h7q.425 0 .713.288T21 12t-.288.713T20 13h-7v7q0 .425-.288.713T12 21"/>
			</svg>
			Новое воспоминание
		</CardButton>
	);
}

export default JournalAddButton;
