import SelectMonth from '../SelectMonth/SelectMonth';
import styles from './Header.module.scss';

const logos = ['./logo.svg', './vite.svg'];

function Header() {
	const [logoIndex, setLogoIndex] = useState(0);

	return (
		<>
			<img className={styles.logo} src={logos[logoIndex]} alt="Логотип журнала" />
			<h1 className='header'>
				Personal Journal
			</h1>
			<SelectMonth/>
		</>
	);
}

export default Header;