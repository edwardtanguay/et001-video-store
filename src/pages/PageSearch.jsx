/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageSearch = () => {
	const {specialDealMessage, handleSearchTextChange, searchText, films} = useContext(AppContext);

	return (
		<div className="page pageSearch">
			<p>Don't forget: {specialDealMessage}</p>
			Search: <input onChange={(e)=>handleSearchTextChange(e)} />
			<div className="films">
				{films.map((film, i) => {
					return (
						<div className="film" key={i}>
							<div className="title">{film.title}</div>
						</div>
					)
				})}
			</div>
		</div>
	);
};