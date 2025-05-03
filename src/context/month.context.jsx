import { createContext } from 'react';
import { useState } from 'react';

export const MonthContext = createContext({
	monthId: 1,
});

export const MonthContextProvider = ({children}) => {
	const [monthId, setMonthId] = useState(1);

	return <MonthContext.Provider value={{monthId, setMonthId}}>
		{children}
	</MonthContext.Provider>
}