import './JournalAddButton.scss';

function JournalAddButton({children}) {
	return (
		<button className='journal-add-button'>
			{children}
		</button>
	);
}

export default JournalAddButton;
