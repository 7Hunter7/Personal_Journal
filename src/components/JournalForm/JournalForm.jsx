import styles from'./JournalForm.module.scss';
import Button from '../Button/Button';
import { useReducer, useEffect, useRef, useContext } from 'react';
import cn from 'classnames';
import { INITIAL_STATE, formReducer } from './JournalForm.state';
import Input from '../Input/Input';
import { MonthContext } from '../../context/month.context';

function JournalForm({onSubmit, data, onDelete}) {
	const [ formState, dispatchForm ] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, values, isFormReadyToSubmit } = formState;
	const titleRef = useRef();
	const dateRef = useRef();
	const postRef = useRef();
	const { monthId } = useContext(MonthContext);

	// Установка фокуса на незаполненном поле ввода
	const focusError = (isValid) => {
		switch (true) {
		case !isValid.title:
			titleRef.current.focus();
			break;
		case !isValid.date:
			dateRef.current.focus();
			break;
		case !isValid.post:
			postRef.current.focus();
			break;
		}
	};

	// Сброс ошибки полей формы
	useEffect(() => {
		let timerId;
		if (!isValid.title || !isValid.post || !isValid.date)
		{
			timerId = setTimeout(() => {
				console.log('Очистка состояния');
				focusError(isValid);
				dispatchForm({type: 'RESET_VALIDITY'})
			}, 2000); // Сброс через 2 секунды
		};
		// Очистка таймера
		return () => {
			clearTimeout(timerId)
		};
	}, [isValid]);

	// Очистка содержимлого полей формы
	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values);
			dispatchForm({type: 'CLEAR'});
			dispatchForm({type: 'SET_VALUE', payload: {monthId}});
		}
	}, [isFormReadyToSubmit, values, onSubmit, monthId] );

	// Установка новых значений monthId
	useEffect(() => {
		dispatchForm({type: 'SET_VALUE', payload: {monthId}});
	}, [monthId]);

	// Установка данных в поля формы с выбранной записи
	useEffect(() => {
		if (!data) {
			dispatchForm({type: 'CLEAR'});
			dispatchForm({type: 'SET_VALUE', payload: {monthId}});
		} else {
			// Преобразуем дату в строку в формате YYYY-MM-DD
			const formattedDate = data.date ? new Date(data.date).toISOString().slice(0, 10) : '';
			dispatchForm({type: 'SET_VALUE', payload: {...data, date: formattedDate}});
		}
	}, [data, monthId]);

	// Установка новых значений из полей формы
	const onChange = (e) => {
		dispatchForm({type: 'SET_VALUE', payload: {
			[e.target.name]: e.target.value
		}});
	};

	// Добавление новой записи
	const addJournalItem = (e) => {
		e.preventDefault();
		dispatchForm({type: 'SUBMIT'})
	}

	// Очистка полей при удалении записи
	const deleteJournalItem = (id) => {
		onDelete(id);
		dispatchForm({type: 'CLEAR'});
		dispatchForm({type: 'SET_VALUE', payload: {monthId}});
	}

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<div className={styles['form-row']}>
				<Input type='text' ref={titleRef} isValid={isValid.title} value={values.title} onChange={onChange} name='title' appearence='title'/>
				{data?.id && <button className={styles['form-delete']} type='button' onClick={() => deleteJournalItem(data.id)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="#fff">
						<path d="m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1zM7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21z"/>
					</svg>
				</button>}
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="date" className={styles['form-label']} >
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="#fff">
						<path d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V3q0-.425.288-.712T7 2t.713.288T8 3v1h8V3q0-.425.288-.712T17 2t.713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zm7-6q-.425 0-.712-.288T11 13t.288-.712T12 12t.713.288T13 13t-.288.713T12 14m-4 0q-.425 0-.712-.288T7 13t.288-.712T8 12t.713.288T9 13t-.288.713T8 18m8 0q-.425 0-.712-.288T15 13t.288-.712T16 12t.713.288T17 13t-.288.713T16 18"/>
					</svg>
					Дата
				</label>
				<Input type='date' ref={dateRef} isValid={isValid.date} value={values.date} onChange={onChange} name='date' id='date'/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="tag" className={styles['form-label']}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="#fff">
						<path d="M10.85 16.575L16.5 10.9l-1.4-1.4l-4.25 4.25l-2.125-2.125L7.3 13.05zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h6l2 2h8q.825 0 1.413.588T22 8v10q0 .825-.587 1.413T20 20z"/>
					</svg>
					Метка
				</label>
				<Input type='text' value={values.tag} onChange={onChange} name='tag' id='tag'/>
			</div>
			<div className={styles['form-row']}>
				<textarea ref={postRef} value={values.post} onChange={onChange} name='post' id='post' cols='30' rows='10'
					className={cn(styles['input'], {
						[styles['invalid']]: !isValid.post,
					})}/>
			</div>
			<div className={styles['form-button']}>
				<Button text='Сохранить' />
			</div>
		</form>
	);
}

export default JournalForm;