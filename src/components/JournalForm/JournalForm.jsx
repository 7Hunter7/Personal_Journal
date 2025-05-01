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
		if (!formProps.title?.trim().lenght) {
			setFormValidState(state => ({...state, title: false}));
			isValidForm = false;
		} else {
			setFormValidState(state => ({...state, title: true}));
		}
		if (!formProps.text?.trim().lenght) {
			setFormValidState(state => ({...state, text: false}));
			isValidForm = false;
		} else {
			setFormValidState(state => ({...state, text: true}));
		}
		if (!formProps.date) {
			setFormValidState(state => ({...state, date: false}));
			isValidForm = false;
		} else {
			setFormValidState(state => ({...state, date: true}));
		}
		if (!isValidForm) return;
		onSubmit(formProps);
		console.log(formProps);
	}

	return (
		<form className='journal-form' onSubmit={addJournalItem}>
			<input type='text' name='title' style={{border: formValidState.title ? 'undefined' : '1px solid red'}}/>
			<input type='date' name='date'style={{border: formValidState.date ? 'undefined' : '1px solid red'}}/>
			<input type='text' name='tag'/>
			<textarea name='text' id="" cols='30' rows='10' style={{border: formValidState.text ? 'undefined' : '1px solid red'}}/>
			<Button text='Сохранить'/>
		</form>

	);
}

export default JournalForm;
