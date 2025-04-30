import './JournalForm.scss';
import {useState} from 'react';
import Button from '../Button/Button';

function JournalForm() {
	const [inputData, setInputData] = useState('');

	const inputText = (e) => {
		console.log(e.target.value);
		setInputData(e.target.value)
	}

	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData)
		console.log(formProps);
	}

	return (
		<form className='journal-form' onSubmit={addJournalItem}>
			<input type='text' name='title'/>
			<input type='date' name='date'/>
			<input type='text' name='tag' value={inputData} onChange={inputText}/>
			<textarea name='post' id="" cols='30' rows='10'></textarea>
			<Button text='Сохранить'/>
		</form>

	);
}

export default JournalForm;
