import React, {useState} from 'react';
import { BudgetsProvider } from './contexts/BudgetsContext';
import Header from './components/header';
import Body from './components/body';
import Container from './components/container';
import AddExpenseModal from './components/addExpenseModal';
import AddBudgetModal from './components/addBudgetModal';
import ViewExpenseModal from './components/ViewExpenseModal';

function App() {
  const [isBudgetOpen, setIsBudgetOpen] = useState(false)
  const [isExpenseOpen, setIsExpenseOpen] = useState(false)
  const [budgetSelectionValue, setBudgetSelectionValue] = useState()
  const [iseViewExpenseOpen, setIsViewExpenseOpen] = useState(false)
  const [viewExpenseModalBudget, setViewExpenseModalBudget] = useState()

  function openExpenseModal(budget) {
    setIsExpenseOpen(true)
    setBudgetSelectionValue(budget)
  }
  function closeExpenseModal() {
    setIsExpenseOpen(false)
    setBudgetSelectionValue(null)
  }
  function openViewExpenseModal(budget) {
    setIsViewExpenseOpen(true)
    setViewExpenseModalBudget(budget)
  }
  function closeViewExpenseModal () {
    setIsViewExpenseOpen(false)
    setViewExpenseModalBudget()
  }
  return (
    <BudgetsProvider>
      <Container> 
        <Header openBudgetModal={() => setIsBudgetOpen(true)} openExpenseModal={openExpenseModal} ></Header>
        <Body openExpenseModal={openExpenseModal} openViewExpenseModal={openViewExpenseModal}></Body>
        <AddBudgetModal isOpen={isBudgetOpen} handleClose={() => setIsBudgetOpen(false)}/>
        <AddExpenseModal isOpen={isExpenseOpen} handleClose={closeExpenseModal} budgetSelectionValue={budgetSelectionValue} />
        <ViewExpenseModal isOpen={iseViewExpenseOpen} handleClose={closeViewExpenseModal} defaultBudget={viewExpenseModalBudget} />
      </Container>
    </BudgetsProvider>
  );
}

export default App;
