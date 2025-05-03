import SelectMonth from '../SelectMonth/SelectMonth';
import './Header.scss';

function Header({changedМonth}) {

	return (
		<>
			<h1 className='header'>
				Personal Journal
			</h1>
			<SelectMonth changedМonth={changedМonth}/>
		</>
	);
}

export default Header;