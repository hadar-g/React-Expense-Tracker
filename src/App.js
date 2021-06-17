import Expenses from'./components/Expenses/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense.js';


function App() {
  const expenses = [
    {title: 'Insurance', 
    amount: 294.56, 
    date: new Date(2021, 2, 28)
  },
  {title: 'car',
  amount: 54.90,
  date: new Date(2021,3,27)
  },
  ]
  return (
    <div>
      <NewExpense />
      <Expenses expenses = {expenses} />
    </div>
   
  );
}

export default App;
