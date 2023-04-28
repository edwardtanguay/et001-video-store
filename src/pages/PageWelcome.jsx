import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageWelcome = () => {
	const {specialDealMessage} = useContext(AppContext);

	return (
		<div className="page pageWelcome">
			<h2>Special Deal</h2>
			<p>{specialDealMessage}</p>
		</div>
	);
};