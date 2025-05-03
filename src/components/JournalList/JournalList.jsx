import './JournalList.scss';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import { useContext } from 'react';
import { MonthContext } from '../../context/month.context';

function JournalList({items}) {
	const { monthId } = useContext(MonthContext);

	if (items.length === 0) {
		return <p>Записей пока нет, добавьте первую</p>;
	}

	// Функция сортировки
	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	};

	return <>
		{items
			.filter(el => el.monthId === monthId)
			.sort(sortItems)
			.map(el => (
				<CardButton key={el.id}>
					<JournalItem 
						title={el.title}
						post={el.post}
						date={el.date}
					/>
				</CardButton>
			))}
	</>
}

export default JournalList;
