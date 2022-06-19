import React from 'react'
import Modal from './commonComponents/Modal'
import CrossIcon from './HeroIcons/CrossIcon';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from './../contexts/BudgetsContext';
import { currencyFormatter } from './../utils';

function ViewExpenseModal({isOpen, handleClose, defaultBudget}) {
    const {getBudgetExpenses, deleteBudget, deleteExpense} = useBudgets()
    const budget = defaultBudget ? defaultBudget : {id : UNCATEGORIZED_BUDGET_ID, name : "Uncategorized"}

    const expenses = getBudgetExpenses(budget.id)

    function handleDeleteBudgetBtnClick() {
        deleteBudget(budget)
        handleClose()
    }
    return (
    <Modal open={isOpen}>
        <div className="w-[95vw] max-w-2xl fixed top-4 right-2/4 translate-x-2/4 bg-surface-light dark:bg-surface-dark p-4 rounded-xl">
            <div className="pb-4 border-b border-outline-primary-dark dark:border-outline-primary-dark flex justify-between items-center">
                <div className="flex items-center">
                    <p className="text-title-large font-medium text-onSurface-light dark:text-onSurface-dark">Expenses - {budget.name}</p>
                    {budget.id !== UNCATEGORIZED_BUDGET_ID &&
                        <button onClick={handleDeleteBudgetBtnClick} className="ml-2 btn-error-filled">Delete</button>
                    }
                </div>
                <button onClick={handleClose} className="btn-primary-text"><CrossIcon/></button>
            </div>
            <div className="mt-4">
                {expenses.map(expense => (
                    <div key={expense.id} className="flex justify-between items-center py-2">
                        <span className="text text-body-large">{expense.description}</span>
                        <div className="flex items-center">
                            <span className="mr-2 text-body-large text-onSurface-light dark:text-onSurface-dark">{currencyFormatter.format(expense.amount)}</span>
                            <button onClick={() => deleteExpense(expense)} className="btn-error-text">
                                <CrossIcon small/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Modal>
    )
}

export default ViewExpenseModal