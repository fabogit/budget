import React from 'react';
import { currencyEuro } from '../config';
export const TransactionList = () => {
	return (
		<div>
			<h3>History</h3>
			<ul className="list">
				<li className="minus">
					Cash <span>-400{currencyEuro}</span>
					<button className="delete-btn">x</button>
				</li>
			</ul>
		</div>
	);
};