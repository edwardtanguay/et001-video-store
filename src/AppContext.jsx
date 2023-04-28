/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [searchText, setSearchText] = useState('');
	const [films, setFilms] = useState([]);

	const specialDealMessage = "Get free popcorn with every Star Wars movie.";

	useEffect(() => {
		const url = `http://www.omdbapi.com/?s=${searchText}&apikey=c3b5f302`;
		(async () => {
			const response = await fetch(url);
			const data = await response.json();
			let _films = data.Search;
			if (_films === undefined) {
				_films = [];
			}
			setFilms(_films);
		})();

	}, [searchText]);


	const handleSearchTextChange = (e) => {
		const _searchText = e.target.value;
		setSearchText(_searchText);
	};

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