import SelectMonth from '../SelectMonth/SelectMonth';

function Header() {

	return (
		<>
			<h1 className='header'>
				Personal Journal
			</h1>
			<SelectMonth/>
		</>
	);
}

export default Header;