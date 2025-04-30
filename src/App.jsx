import React from 'react';
import "./App.css";
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import Sidebar from './layouts/Sidebar/Sidebar';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';

function App() {

	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			date: new Date(),
			text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, vitae dolores, ipsa.'
		},
		{
			title: 'Поход в горы',
			date: new Date(),
			text: 'Optio quibusdam unde laboriosam accusantium ratione dolore quasi delectus praesentium a quam quis quo eveniet architecto libero necessitatibus.'
		},
		{
			title: 'Собеседование',
			date: new Date(),
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio minima animi eos, inventore porro atque non adipisci fuga velit! Dolor harum eius sit, molestias repellendus rem qui sint voluptates possimus.'
		}
	];

	return <>
		<Sidebar>
			<Header/>
			<JournalAddButton/>
			<JournalList>
				<CardButton>
					<JournalItem title = {data[0].title} date = {data[0].date} text = {data[0].text}/>
				</CardButton>
				<CardButton>
					<JournalItem title = {data[1].title} date = {data[1].date} text = {data[1].text}/>
				</CardButton>
				<CardButton>
					<JournalItem title = {data[2].title} date = {data[2].date} text = {data[2].text}/>
				</CardButton>
			</JournalList>
		</Sidebar>
		<Body>
			<JournalForm/>
		</Body>
	</>; 
}

export default App;
