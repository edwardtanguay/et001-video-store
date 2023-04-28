import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageSearch = () => {
	const {specialDealMessage} = useContext(AppContext);

	return (
		<div className="page pageSearch">
			<p>Don't forget: {specialDealMessage}</p>
			<p>This is the Search page.</p>
		</div>
	);
};