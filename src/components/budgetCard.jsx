import React from 'react'
import { currencyFormatter } from '../utils'

function BudgetCard({name, amount, max, handleViewExpenseModalOpen, handleAddExpenseModalOpen, gray, hideButtons}) {
    const progress = (amount * 100)/max

    function getBgClass(mode) {
        if(mode === "dark" & progress > 95) return "dark:bg-error-dark/[0.05]"
        if(mode === "dark") return "dark:bg-primary-dark/[0.05]"
        if(progress > 95) return "bg-error-light/[0.05]"

        return "bg-primary-light/[0.05]"
    }

    function getProgressBarClass(mode) {
        if(mode === "dark" & progress > 95) return "dark:bg-error-dark"
        if(mode === "dark") return "dark:bg-primary-dark"
        if(progress > 95) return "bg-error-light"

        return "bg-primary-light"
    }
  return (
        <div className="h-fit w-full col-span-1 bg-surface-light dark:bg-surface-dark rounded-xl">
            <div className={`rounded-xl px-2 py-4 md:p-4 ${getBgClass()} ${getBgClass("dark")}`}>
                <div className="mb-4 flex items-baseline justify-between">
                    <p className={`text-title-medium font-medium md:text-title-large md:font-normal text-onSurface-light dark:text-onSurface-dark`}>{name}</p>
                    <div className="flex items-baseline">
                        <span className={`mr-1 text-body-large md:font-medium text-onSurface-light dark:text-onSurface-dark`}>{currencyFormatter.format(amount)}</span>
                        {max && <span className="text-body-medium text-onSurfaceVariant-light dark:text-onSurfaceVariant-dark">/ {currencyFormatter.format(max)}</span>}
                    </div>
                </div>
                {max && 
                    <div className={`w-full h-4 mb-4 bg-primary-light/[0.16] dark:bg-primary-dark/[0.16] rounded-full`}>
                        <div className={`${getProgressBarClass()} ${getProgressBarClass("dark")} h-4 rounded-full`} style={{width : `${progress > 100 ? "100" : progress.toString()}%`}} ></div>
                    </div>
                }
                {!hideButtons && 
                    <div className="w-full flex items-center justify-end space-x-2">
                        <button onClick={handleAddExpenseModalOpen} className={progress && progress > 95 ? "btn-error-text" : "btn-primary-text"}>Add Expense</button>
                        <button onClick={handleViewExpenseModalOpen} className={progress && progress > 95 ? "btn-error-text" : "btn-primary-text"}>View Expense</button>
                    </div>
                }
            </div>
        </div>
  )
}

export default BudgetCard