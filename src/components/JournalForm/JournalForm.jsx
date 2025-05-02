import styles from'./JournalForm.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import cn from 'classnames';

function JournalForm({onSubmit}) {
	const [formValidState, setFormValidState] = useState({
		title: true,
		text: true,
		date: true,

	});

	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData)
		// Валидация данных
		let isValidForm = true;
		if (!formProps.title?.trim().length) {
			setFormValidState(state => ({...state, title: false}));
			isValidForm = false;
		} else {
			setFormValidState(state => ({...state, title: true}));
		}
		if (!formProps.text?.trim().length) {
			setFormValidState(state => ({...state, text: false}));
			isValidForm = false;
		} else {
			setFormValidState(state => ({...state, text: true}));
		}
		if (!formProps.date) {
			setFormValidState(state => ({...state, date: false}));
			isValidForm = false;
		} else {
			setFormValidState(state => ({...state, date: true}));
		}
		if (!isValidForm) return;
		onSubmit(formProps);
		console.log(formProps);
	}

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div className={styles['form-row']}>
				<input type='text' name='title'
					className={cn(styles['input-title'], {
						[styles['invalid']]: !formValidState.title,
					})}/>
				<svg 
					xmlns="http://www.w3.org/2000/svg" 
					viewBox="0 0 24 24">
					<path fill="currentColor" d="m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1zM7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21z"/>
				</svg>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="date" className={styles['form-label']} >
					<svg 
						xmlns="http://www.w3.org/2000/svg" 
						viewBox="0 0 24 24">
						<path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zm7-6q-.425 0-.712-.288T11 13t.288-.712T12 12t.713.288T13 13t-.288.713T12 14m-4 0q-.425 0-.712-.288T7 13t.288-.712T8 12t.713.288T9 13t-.288.713T8 14m8 0q-.425 0-.712-.288T15 13t.288-.712T16 12t.713.288T17 13t-.288.713T16 14m-4 4q-.425 0-.712-.288T11 17t.288-.712T12 16t.713.288T13 17t-.288.713T12 18m-4 0q-.425 0-.712-.288T7 17t.288-.712T8 16t.713.288T9 17t-.288.713T8 18m8 0q-.425 0-.712-.288T15 17t.288-.712T16 16t.713.288T17 17t-.288.713T16 18"/>
					</svg>
					Дата
				</label>
				<input type='date' name='date' id='date'
					className={cn(styles['input'], {
						[styles['invalid']]: !formValidState.date,
					})}/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="tag" className={styles['form-label']}>
					<svg 
						xmlns="http://www.w3.org/2000/svg" 
						viewBox="0 0 24 24">
						<path fill="currentColor" d="M10.85 16.575L16.5 10.9l-1.4-1.4l-4.25 4.25l-2.125-2.125L7.3 13.05zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z"/>
					</svg>
					Метка
				</label>
				<input type='text' name='tag' id='tag' className={styles['input']}/>
			</div>
			<div>
				<textarea name='text' id="" cols='30' rows='10'
					className={cn(styles['input'], {
						[styles['invalid']]: !formValidState.text,
					})}/>
			</div>
			<Button text='Сохранить'/>
		</form>

	); 
}

export default JournalForm;
