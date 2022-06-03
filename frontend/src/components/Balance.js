import React from 'react';
import { currencyEuro } from '../config';
export const Balance = () => {
	return (
		<div id='balance'>
			<h4>Your Balance</h4>
			<h1>0.00{currencyEuro}</h1>
		</div>
	);
};