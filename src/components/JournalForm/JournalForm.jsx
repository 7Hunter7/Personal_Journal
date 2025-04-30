import './JournalForm.scss';
import {useState} from 'react';
import Button from '../Button/Button';

function JournalForm() {
	const [inputData, setInputData] = useState('');

	const inputText = (event) => {
		console.log(event.target.value);
		setInputData(event.target.value)
	}

	return (
		<form className='journal-form'>
			<input type="date"/>
			<input type="text" value={inputData} onChange={inputText}/>
			<textarea name="" id="" cols={30} rows={10}></textarea>
			<Button/>
		</form>

	);
}

export default JournalForm;
