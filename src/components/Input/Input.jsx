import styles from './Input.module.scss';
import cn from 'classnames';


function Input({ className, isValid, appearence }) {
	return (
		<input className={cn(className, styles['input'], {
			[styles['input-title']]: appearence === 'title',
			[styles['invalid']]: !isValid,
		})}/>
	);
}

export default Input;
