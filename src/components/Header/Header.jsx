import { useState } from 'react';
import Button from '../Button/Button';
import SelectMonth from '../SelectMonth/SelectMonth';
import Logo from '../Logo/Logo';

const logos = ['./logo.svg', './vite.svg'];

function Header() {
	const [logoIndex, setLogoIndex] = useState(0);

	const toggleLogo = () => {
		setLogoIndex(state => Number(!state))
	}

	return (
		<>
			<Logo image={logos[logoIndex]}/>
			<h1 className='header'>
				Personal Journal
			</h1>
			<SelectMonth/>
			<Button onClick={toggleLogo}/>
		</>
	);
}

export default Header;