import { useContext } from 'react';
import { MonthContext } from '../../context/month.context';
import styles from'./SelectMonth.module.scss';

function SelectMonth() {
	const { monthId, setMonthId } = useContext(MonthContext);
  
	const changeМonth = (e) => {
		setMonthId(Number(e.target.value))
	}

	return (
		<select name='month' id='month' value={monthId} onChange={changeМonth} className={styles['select']}>
			<option value="1">Январь</option>
			<option value="2">Февраль</option>
			<option value="3">Март</option>
			<option value="4">Апрель</option>
			<option value="5">Май</option>
			<option value="6">Июнь</option>
			<option value="7">Июль</option>
			<option value="8">Август</option>
			<option value="9">Сентябрь</option>
			<option value="10">Октябрь</option>
			<option value="11">Ноябрь</option>
			<option value="12">Декабрь</option>
		</select>
	);
}

export default SelectMonth;