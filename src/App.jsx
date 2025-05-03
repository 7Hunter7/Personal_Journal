import "./App.css";
import React from 'react';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import Sidebar from './layouts/Sidebar/Sidebar';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import { useLocalStorage } from './hooks/use-localstorage.hook';

function App() {
	const INITIAL_DATA = [
		{
			id: 1,
			title: 'Подготовка к обновлению курсов',
			post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, vitae dolores, ipsa.',
			date: new Date(),
		},
		{
			id: 2,
			title: 'Поход в горы',
			post: 'Optio quibusdam unde laboriosam accusantium ratione dolore quasi delectus praesentium a quam quis quo eveniet architecto libero necessitatibus.',
			date: new Date(),
		},
		{
			id: 3,
			title: 'Собеседование',
			post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio minima animi eos, inventore porro atque non adipisci fuga velit! Dolor harum eius sit, molestias repellendus rem qui sint voluptates possimus.',
			date: new Date(),
		}
	];

	const [items, setItems] = useLocalStorage(INITIAL_DATA);

	const addItem = items => {
		setItems([...items.map(i => ({
			...i,
			date: new Date(item.date),
		})), {
			id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
			title: item.title,
			post: item.post,
			date: new Date(item.date),
		}]);
	}

	return <>
		<Sidebar>
			<Header/>
			<JournalAddButton/>
			<JournalList items={items}/>
		</Sidebar>
		<Body>
			<JournalForm onSubmit={addItem}/>
		</Body>
	</>; 
}

export default App;
