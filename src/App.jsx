import React from 'react';
import "./App.css";
import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';

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
		<h1>Заголовок</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque at sequi possimus inventore doloribus vel quos aut officiis repellat quod? Ratione esse optio ut commodi quasi explicabo placeat laudantium animi.</p>
		<Button/>
		<CardButton>
			Новое воспоминание
		</CardButton>
		<CardButton>
			<JournalItem title = {data[0].title} date = {data[0].date} text = {data[0].text}/>
		</CardButton>
		<CardButton>
			<JournalItem title = {data[1].title} date = {data[1].date} text = {data[1].text}/>
		</CardButton>
		<CardButton>
			<JournalItem title = {data[2].title} date = {data[2].date} text = {data[2].text}/>
		</CardButton>

	</>; 
}

export default App;
