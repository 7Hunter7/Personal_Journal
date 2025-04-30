import './JournalForm.scss';
import {useState} from 'react';

function JournalForm() {
	const [inputData, setInputData] = useState('');

	const inputText = (event) => {
		console.log(event.target.value);
		setInputData(event.target.value)
	}

	return (
		<>
			<input type="text" value={inputData} onChange={inputText}/>
		</>
	);
}

export default JournalForm;
