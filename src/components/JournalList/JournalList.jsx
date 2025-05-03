import './JournalList.scss';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import { useContext, useMemo } from 'react';
import { MonthContext } from '../../context/month.context';

function JournalList({items, setItem}) {
	const { monthId } = useContext(MonthContext);

	// Функция сортировки
	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	};

	// Фильтрация и сортировка записей
	const filteredItems = useMemo(() => items
		.filter(el => el.monthId === monthId)
		.sort(sortItems), [items, monthId]);

	if (items.length === 0) {
		return <p>Записей пока нет, добавьте первую</p>;
	}

	return <>
		{filteredItems.map(el => (
			<CardButton key={el.id} onClick={() => setItem(el)}>
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
