import React from 'react'

function Header({openBudgetModal, openExpenseModal}) {
  return (
      <div className="w-full mt-8 mb-4 flex items-center justify-between">
          <h5 className="text-headline-small md:text-headline-large text-onBackground-light dark:text-onBackground-dark">BUDGET</h5>
          <div className="space-x-2 flex">
              <button onClick={openBudgetModal} className="btn-primary-filled">Add Budget</button>
              <button onClick={() => openExpenseModal(null)} className="btn-primary-filled">Add Expense</button>
          </div>
      </div>
  )
}

export default Header
