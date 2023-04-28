/* eslint-disable react/prop-types */
import { createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

	const specialDealMessage = "Get free popcorn with every Star Wars movie.";

	return (
		<AppContext.Provider
			value={{
				specialDealMessage
			}}
		>
			{children}
		</AppContext.Provider>
	);
};