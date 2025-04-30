import './Button.scss';
import {useState} from 'react';

function Button() {
	const [text, setText] = useState('Сохранить');

	const save = () => {
		setText('Закрыть')
		console.log('Сохранение...');
	}

	return (
		<button onClick={save} className='button accent'>{text}</button>
	);
}

export default Button;
