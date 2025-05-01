import "./App.css";
import React from 'react';
import {useState} from 'react';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import Sidebar from './layouts/Sidebar/Sidebar';
import JournalForm from './components/JournalForm/JournalForm';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';

function App() {
	const INITIAL_DATA = [
		{
			id: 1,
			title: 'Подготовка к обновлению курсов',
			date: new Date(),
			text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, vitae dolores, ipsa.'
		},
		{
			id: 2,
			title: 'Поход в горы',
			date: new Date(),
			text: 'Optio quibusdam unde laboriosam accusantium ratione dolore quasi delectus praesentium a quam quis quo eveniet architecto libero necessitatibus.'
		},
		{
			id: 3,
			title: 'Собеседование',
			date: new Date(),
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio minima animi eos, inventore porro atque non adipisci fuga velit! Dolor harum eius sit, molestias repellendus rem qui sint voluptates possimus.'
		}
	];

	const [items, setItems] = useState(INITIAL_DATA);

	const addItem = item => {
		setItems(oldItems => [...oldItems, {
			id: Math.max(...oldItems.map(i => i.id)) + 1,
			title: item.title,
			date: new Date(item.date),
			text: item.text,

		}])
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
