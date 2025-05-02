import styles from './Input.module.scss';
import cn from 'classnames';


function Input({ className, isValid, appearence, ...props }) {
	return (
		<input className={cn(className, styles['input'], {
			[styles['input-title']]: appearence === 'title',
			[styles['invalid']]: !isValid,
		})} {...props}/> // Передаем остальные свойства
	);
}

export default Input;
