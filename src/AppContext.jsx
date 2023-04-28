/* eslint-disable react/prop-types */
import { createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

	const specialDealMessage = "Get free popcorn with every Star Wars movie.";

	const handleSearchTextChange = (e) => {
		const searchText = e.target.value;
		console.log(searchText);
	}

	return (
		<AppContext.Provider
			value={{
				specialDealMessage,
				handleSearchTextChange
			}}
		>
			{children}
		</AppContext.Provider>
	);
};