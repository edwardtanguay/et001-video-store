/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [searchText, setSearchText] = useState('');
	const [films, setFilms] = useState([]);

	const specialDealMessage = "Get free popcorn with every Star Wars movie.";

	const handleSearchTextChange = (e) => {
		const _searchText = e.target.value;
		setSearchText(_searchText);
	}

	return (
		<AppContext.Provider
			value={{
				specialDealMessage,
				handleSearchTextChange,
				searchText,
				films
			}}
		>
			{children}
		</AppContext.Provider>
	);
};