import './Button.scss';

function Button() {
	const save = () => console.log('Сохранение...')

	return (
		<button onClick={save} className='button accent'>Сохранить</button>
	);
}

export default Button;
