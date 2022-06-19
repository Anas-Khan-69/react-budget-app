import React, {useRef} from 'react'
import Modal from './commonComponents/Modal';
import CrossIcon from './HeroIcons/CrossIcon';
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from './../contexts/BudgetsContext';


function AddExpenseModal({isOpen, handleClose, budgetSelectionValue}) {
  const descriptionRef = useRef()
  const amountRef = useRef()
  const budgetIdRef = useRef()

  const {budgets, addExpense} = useBudgets()

  function handleSubmit (e) {
    e.preventDefault()
    addExpense({
      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value), 
      budgetId: budgetIdRef.current.value
    })
    handleClose()
  }
  return (
      <Modal open={isOpen}>
        <div className="w-[95vw] max-w-2xl fixed top-4 right-2/4 translate-x-2/4 bg-surface-light dark:bg-surface-dark p-4 rounded-xl">
          <div className="pb-4 border-b border-outline-primary-dark dark:border-outline-primary-dark flex justify-between items-center">
            <p className="text-title-large text-onSurface-light dark:text-onSurface-dark">New Expense</p>
            <button onClick={handleClose} className="btn-primary-text"><CrossIcon/></button>
          </div>
          <form autoComplete="off" onSubmit={handleSubmit} className="w-full mt-4 space-y-6">
            <div>
              <label htmlFor="description" className="label">Description</label>
              <div className="mt-1">
                <input ref={descriptionRef} id="description" name="description" type="text" required className="input" />
              </div>
            </div>
            <div>
              <label htmlFor="ammount" className="label">Amount</label>
              <div className="mt-1">
                <input ref={amountRef} id="ammount" name="ammount" type="number" required className="input" />
              </div>
            </div>
            <div>
              <label htmlFor="budget" className="label">Budget</label>
              {budgetSelectionValue && 
                <select ref={budgetIdRef} id="budget" name="budget" type="text" required className="input">
                  <option key={budgetSelectionValue.id} value={budgetSelectionValue.id}>{budgetSelectionValue.name}</option>
                </select>
              }
              {!budgetSelectionValue && 
                <select ref={budgetIdRef} id="budget" name="budget" type="text" required className="input"> 
                  <option key={UNCATEGORIZED_BUDGET_ID} value={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
                  {budgets.map(budget => (
                    <option key={budget.id} value={budget.id}>{budget.name}</option>
                  ))}
                </select>
              }
            </div>
            <div className="w-full flex justify-end items-center">
              <button type="submit" className="btn-primary-filled" >Add</button>
            </div>
          </form>
        </div>
      </Modal>
  )
}

export default AddExpenseModal