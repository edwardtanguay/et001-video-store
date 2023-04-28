/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageSearch = () => {
	const {specialDealMessage, handleSearchTextChange} = useContext(AppContext);

	return (
		<div className="page pageSearch">
			<p>Don't forget: {specialDealMessage}</p>
			Search: <input onChange={(e)=>handleSearchTextChange(e)} />
		</div>
	);
};