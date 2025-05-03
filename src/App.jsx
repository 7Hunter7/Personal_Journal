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
			title: 'Подготовка к обновлению курсов',
			post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, vitae dolores, ipsa.',
			date: '25/04/25'
		},
		{
			id: 2,
			title: 'Поход в горы',
			post: 'Optio quibusdam unde laboriosam accusantium ratione dolore quasi delectus praesentium a quam quis quo eveniet architecto libero necessitatibus.',
			date: '01/05/25'
		},
		{
			id: 3,
			title: 'Собеседование',
			post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio minima animi eos, inventore porro atque non adipisci fuga velit! Dolor harum eius sit, molestias repellendus rem qui sint voluptates possimus.',
			date: '28/04/25'
		}
	];

	const [items, setItems] = useLocalStorage('data');
	const [selectedItem, setSelectedItem] = useState({});

	const addItem = item => {
		setItems([...mapItems(items), {
			...item,
			date: new Date(item.date),
			id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
		}]);
	}

	return (
		<MonthContextProvider >
			<Sidebar>
				<Header/>
				<JournalAddButton/>
				<JournalList items={mapItems(items)} setItem={selectedItem}/>
			</Sidebar>
			<Body>
				<JournalForm onSubmit={addItem} data={selectedItem}/>
			</Body>
		</MonthContextProvider>
	); 
}

export default App;
