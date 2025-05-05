import styles from './Sidebar.module.scss';

function Sidebar({children}) {
	return (
		<div className={styles['sidebar']}>
			{children}
		</div>
	);
}

export default Sidebar;
