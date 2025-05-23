import styles from './JournalItem.module.scss'

function JournalItem({title, post, date}) {
	const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date);

	return (
		<>
			<h2 className={styles['journal-item__header']}>{title}</h2>
			<div className={styles['journal-item__body']}>
				<div className={styles['journal-item__date']}>{formatedDate}</div>
				<div className={styles['journal-item__text']}>{post}</div>
			</div>
		</>
	);
}

export default JournalItem;
