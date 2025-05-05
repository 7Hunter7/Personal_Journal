import "./App.css";
import React, { useState } from 'react';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import Sidebar from './layouts/Sidebar/Sidebar';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { MonthContextProvider } from './context/month.context';

// Создание корректной даты для записи
function mapItems(items) {
	if (!items) return [];
	return items.map(i => ({
		...i,
		date: new Date(i.date)
	}));
}

function App() {
	const INITIAL_DATA = [
		{
			id: 1,
			title: 'Подготовка к собеседованию',
			post: 'Сегодня просматривал типичные вопросы для собеседований. Особенно сложно даются вопросы про мои слабые стороны. Нужно хорошо подготовиться, чтобы не растеряться.',
			date: new Date(2025, 0, 14),
			monthId: 1
		},
		{
			id: 2,
			title: 'Поход в горы',
			post: 'Наконец-то выбрались в горы! Погода была отличная, виды просто захватывающие. Обязательно повторим этот поход в следующем году!',
			date: new Date(2025, 1, 25),
			monthId: 2
		},
		{
			id: 3,
			title: 'Собеседование',
			post: 'Прошел собеседование в IT-компанию. Задавали много технических вопросов, на некоторые ответить не смог. Надеюсь, что мои навыки все равно оценят и предложат работу)',
			date: new Date(2025, 2, 26),
			monthId: 3
		},
		{
			id: 4,
			title: 'Свидание на Елисейских полях',
			post: 'Париж прекрасен! Прогулка по Елисейским полям была очень романтичной. Надеюсь, это только начало наших кругосветных путешествий!',
			date: new Date(2025, 6, 7),
			monthId: 7
		}
	];

	const [items, setItems] = useLocalStorage('data', INITIAL_DATA);
	const [selectedItem, setSelectedItem] = useState(null);

	// Добавление/редактирование записи
	const addItem = item => {
		const date = (typeof item.date === 'string') ? new Date(item.date) : item.date;
		const itemMonth = date.getMonth() + 1;

		// Если это новая запись
		if (!item.id) {
			setItems([...mapItems(items), {
				...item,
				date: date,
				monthId: itemMonth,
				id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
			}]);
		} else {
			// Если уже существующая запись
			setItems([...mapItems(items).map(i => {
				if (i.id === item.id) {
					return {
						...item,
						date: date,
						monthId: itemMonth
					};
				}
				return i;
			})]);
		}
	};
	
	// Удаление записи  
	const deleteItem = (id) => {
		setItems([...items.filter(i => i.id !== id)]);
	}

	return (
		<MonthContextProvider >
			<Sidebar>
				<Header/>
				<JournalAddButton clearForm={() => setSelectedItem(null)}/>
				<JournalList items={mapItems(items)} setItem={setSelectedItem}/>
			</Sidebar>
			<Body>
				<JournalForm
					onSubmit={addItem}
					onDelete={deleteItem}
					data={selectedItem}
					clearForm={() => setSelectedItem(null)}
				/>
			</Body>
		</MonthContextProvider>
	); 
}

export default App;
