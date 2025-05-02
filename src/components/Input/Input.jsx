import { forwardRef } from 'react';
import styles from './Input.module.scss';
import cn from 'classnames';

const Input = forwardRef(function Input({ className, isValid = true, appearence, ...props }, ref) {
	return (
		<input ref={ref} className={cn(className, styles['input'], {
			[styles['input-title']]: appearence === 'title',
			[styles['invalid']]: !isValid,
		})} {...props}/> // Передаем остальные свойства
	);
});

export default Input;
