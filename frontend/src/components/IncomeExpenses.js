import React from 'react';
import { currencyEuro } from '../config';
export const IncomeExpenses = () => {
	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p className="money plus">+0.00{currencyEuro}</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p className="money minus">-0.00{currencyEuro}</p>
			</div>
		</div>
	);
};