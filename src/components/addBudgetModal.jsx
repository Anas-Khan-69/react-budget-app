import React, {useRef} from 'react'
import Modal from './commonComponents/Modal';
import CrossIcon from './HeroIcons/CrossIcon';
import { useBudgets } from './../contexts/BudgetsContext';

function AddBudgetModal({isOpen, handleClose}) {
    const nameRef = useRef()
    const amountRef = useRef()

    const {addBudget} = useBudgets()

    function handleSubmit(e) {
        e.preventDefault()

        addBudget({
        name : nameRef.current.value ,
        max : parseFloat(amountRef.current.value)
        })

        handleClose()
    }
  return (
    <Modal open={isOpen}>
        <div className="w-[95vw] max-w-2xl fixed top-4 right-2/4 translate-x-2/4 bg-surface-light dark:bg-surface-dark p-4 rounded-xl">
          <div className="pb-4 border-b border-outline-primary-dark dark:border-outline-primary-dark flex justify-between items-center">
            <p className="text-title-large text-onSurface-light dark:text-onSurface-dark">New Budget</p>
            <button onClick={handleClose} className="btn-primary-text"><CrossIcon/></button>
          </div>
          <form autoComplete="off" onSubmit={handleSubmit} className="w-full mt-4 space-y-6">
            <div>
              <label htmlFor="name" className="label">Name</label>
              <div className="mt-1">
                <input ref={nameRef} id="name" name="name" type="text" required className="input" />
              </div>
            </div>
            <div>
              <label htmlFor="ammount" className="label">Maximum Spending</label>
              <div className="mt-1">
                <input ref={amountRef} id="ammount" name="ammount" type="number" min={0} step={0.01} required className="input" />
              </div>
            </div>
            <div className="w-full flex justify-end items-center">
              <button className="btn-primary-filled">Add</button>
            </div>
          </form>
        </div>
    </Modal>
  )
}

export default AddBudgetModal