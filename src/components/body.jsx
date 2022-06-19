import React from 'react'
import BudgetCard from './budgetCard'
import { useBudgets } from './../contexts/BudgetsContext';
import UncategorizeBudgetCard from './UncategorizeBudgetCard';
import TotalBudgetCard from './TotalBudgetCard';

function Body({openExpenseModal, openViewExpenseModal}) {
  const {budgets, getBudgetExpenses} = useBudgets() 
 
  function returnBudgetCard (budget) {
    const amount = getBudgetExpenses(budget.id).reduce(
      (total, expense) => total + expense.amount, 
      0
    )
    return (
      <BudgetCard 
        key={budget.id} 
        name={budget.name} 
        amount={amount} 
        max={budget.max} 
        handleAddExpenseModalOpen={() => openExpenseModal(budget)} 
        handleViewExpenseModalOpen={() => openViewExpenseModal(budget)} 
      />
    )
  }
  return (
    <div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
      {budgets.map(budget => returnBudgetCard(budget))}
      <UncategorizeBudgetCard handleAddExpenseModalOpen={() => openExpenseModal(null)} handleViewExpenseModalOpen={() => openViewExpenseModal(null)} />
      <TotalBudgetCard />
    </div>
  )
}

export default Body