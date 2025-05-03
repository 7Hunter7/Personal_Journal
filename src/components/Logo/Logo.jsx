import styles from './Logo.module.scss';

function Logo({image}) {
	return <img className={styles.logo} src={image} alt="Логотип журнала" />
}

export default Logo;