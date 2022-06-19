import React from 'react'
import { useBudgets } from '../contexts/BudgetsContext';
import BudgetCard from './budgetCard';

function TotalBudgetCard() {
    const {expenses, budgets} = useBudgets()

    const amount = expenses.reduce(
      (total, expense) => total + expense.amount, 
      0
    )
    const max = budgets.reduce(
      (total, budget) => total + budget.max, 
      0
    )

    if(max === 0) return null
    return (
        <BudgetCard amount={amount} max={max} name="Total" gray hideButtons />
    )
}

export default TotalBudgetCard