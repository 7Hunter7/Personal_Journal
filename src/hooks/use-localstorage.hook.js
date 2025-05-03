import { useState, useEffect } from 'react';

export function useLocalStorage(key) {
	const [data, setData] = useState();

	// Получение данных из localStorage
	useEffect(() => {
		const res = JSON.parse(localStorage.getItem(key));
		if (res) {
			setData(res);
		}
	}, []);

	// Сохранение новых данных в localStorage
	const saveData = (newData) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	}

	return [data, saveData];
}