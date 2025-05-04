import styles from './Button.module.scss';
import cn from 'classnames';

function Button({text, onClick}) {
	return (
		<button className={cn(styles['button'], styles['accent'])} onClick={onClick}>{text}</button>
	);
}

export default Button;
