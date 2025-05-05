import "./App.css";
import React, { useContext, useState } from 'react';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import Sidebar from './layouts/Sidebar/Sidebar';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { MonthContext, MonthContextProvider } from './context/month.context';

// Создание корректной даты для записи
function mapItems(items) {
	if (!items) return [];
	return items.map(i => ({
		...i,
		date: new Date(i.date)
	}));
}

function App() {
	const { monthId } = useContext(MonthContext);
	const INITIAL_DATA = [
		{
			id: 1,
			title: 'Подготовка к собеседованию',
			post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, vitae dolores, ipsa.',
			date: new Date(2025, 0, 14),
			monthId: 1
		},
		{
			id: 2,
			title: 'Поход в горы',
			post: 'Optio quibusdam unde laboriosam accusantium ratione dolore quasi delectus praesentium a quam quis quo eveniet architecto libero necessitatibus.',
			date: new Date(2025, 1, 25),
			monthId: 2
		},
		{
			id: 3,
			title: 'Собеседование',
			post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio minima animi eos, inventore porro atque non adipisci fuga velit! Dolor harum eius sit, molestias repellendus rem qui sint voluptates possimus.',
			date: new Date(2025, 2, 26),
			monthId: 3
		}
	];

	const [items, setItems] = useLocalStorage('data', INITIAL_DATA);
	const [selectedItem, setSelectedItem] = useState(null);

	// Добавление/редактирование записи
	const addItem = item => {
		const date = (typeof item.date === 'string') ? new Date(item.date) : item.date;
		// Если это новая запись
		if (!item.id) {
			setItems([...mapItems(items), {
				...item,
				date: date,
				monthId: monthId,
				id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
			}]);
		} else {
			// Если уже существующая запись
			setItems([...mapItems(items).map(i => {
				if (i.id === item.id) {
					return {
						...item,
						date: date,
						monthId: monthId
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
				<JournalForm onSubmit={addItem} onDelete={deleteItem} data={selectedItem}/>
			</Body>
		</MonthContextProvider>
	); 
}

export default App;
