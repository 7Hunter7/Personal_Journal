import { useState, useEffect } from 'react';

export function useLocalStorage(key, defaultValue) {
	const [data, setData] = useState(() => {

		try {
			// Получение данных из localStorage
			const storedValue = localStorage.getItem(key);
			return storedValue ? JSON.parse(storedValue) : defaultValue;
		} catch (error) {
			console.error(`Ошибка при парсинге данных из localStorage (${key}):`, error);
			return defaultValue;
		}
	});

	// Сохранение текущего значения data в localStorage
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(data));
	}, [key, data]);

	return [data, setData];
}