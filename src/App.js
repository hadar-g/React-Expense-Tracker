import Expenses from'./components/Expenses/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense.js';
import React, {useState} from 'react'

const DUMMY_EXPENSES = [
  {id: 'e1',
  title: 'Insurance', 
  amount: 294.56, 
  date: new Date(2021, 2, 28)
},
{id: 'e2',
title: 'car',
amount: 54.90,
date: new Date(2021,3,27)
},
]

function App() {

  const[expenses, setExpenses] = useState(DUMMY_EXPENSES)
  

  const addExpenseHandler = (expense) => {
    //setExpenses((prevExpenses) =>{
    //  return[expense, ...prevExpenses]
    //})
    setExpenses(prevExpenses => {
      return[expense, ...prevExpenses]
    })
  }
  return (

    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses expenses = {expenses} />
    </div>
   
  );
}

export default App;
