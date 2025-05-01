import './JournalForm.scss';
import Button from '../Button/Button';
import { useState } from 'react';

function JournalForm({onSubmit}) {
	const [formValidState, setFormValidState] = useState({
		title: true,
		text: true,
		date: true,

	});

	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData)
		// Валидация данных
		let isValidForm = true;
		if(!formProps.title.trim().lenght){
			setFormValidState(state => ({...state, title: false}));
			isValidForm = false;
		}
		if(!formProps.text.trim().lenght){
			setFormValidState(state => ({...state, text: false}));
			isValidForm = false;
		}
		if(!formProps.date){
			setFormValidState(state => ({...state, date: false}));
			isValidForm = false;
		}
		if (!isValidForm) return;
		onSubmit(formProps);
		console.log(formProps);
	}

	return (
		<form className='journal-form' onSubmit={addJournalItem}>
			<input type='text' name='title'/>
			<input type='date' name='date'/>
			<input type='text' name='tag'/>
			<textarea name='text' id="" cols='30' rows='10'></textarea>
			<Button text='Сохранить'/>
		</form>

	);
}

export default JournalForm;
