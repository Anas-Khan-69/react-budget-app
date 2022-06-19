import React , {useContext} from 'react'
import {v4 as uuidV4} from 'uuid'
import useLocalStorage from './../hooks/useLocalStorage';

const BudgetsContext = React.createContext()

export const UNCATEGORIZED_BUDGET_ID = "uncategorized"

export function useBudgets() {
    return useContext(BudgetsContext)
}

export function BudgetsProvider({children}) {
    const [budgets , setBudgets] = useLocalStorage("budgets", [])
    const [expenses , setExpenses] = useLocalStorage("expenses", [])

    function getBudgetExpenses (budgetId) {
      return expenses.filter(expense => expense.budgetId === budgetId)
    }
    function addExpense ({description, amount, budgetId}) {
      setExpenses(previousExpenses => {
        return [...previousExpenses , {id : uuidV4(), budgetId, description, amount}]
      })
    }
    function addBudget ({name, max}) {
      setBudgets(previousBudgets => {
        if(previousBudgets.find(budget => budget.name === name)) {
          return previousBudgets
        }
        return [...previousBudgets , {id : uuidV4(), name, max}]
      })
    }
    function deleteBudget ({id}) {
      setExpenses(previousExpenses => {
        return previousExpenses.map(expense => {
          if(expense.budgetId !== id) return expense
          return {...expense, budgetId : UNCATEGORIZED_BUDGET_ID}
        })
      })
      setBudgets(previousBudgets => {
        return [...previousBudgets.filter(budget => budget.id !== id)]
      })
    }
    function deleteExpense ({id}) {
      setExpenses(previousExpenses => {
        return [...previousExpenses.filter(expense => expense.id !== id)]
      })
    }

  return (
    <BudgetsContext.Provider value={{
        budgets ,
        expenses ,
        getBudgetExpenses ,
        addExpense ,
        addBudget ,
        deleteBudget ,
        deleteExpense
    }}>
        {children}
    </BudgetsContext.Provider>
  )
}
