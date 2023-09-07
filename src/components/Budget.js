import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, remaining, currency  } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    if(newBudget > 20000)
    {
        alert('The value can not be more than 20,000');
    }

    if(newBudget < budget - remaining)
    {
        alert('You cannot reduce the budget value lower than the spending');
    }

    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange} max="20000"></input>
</div>
    );
};
export default Budget;
