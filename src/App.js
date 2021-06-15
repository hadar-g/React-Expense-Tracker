import Expenses from'./components/Expenses/Expenses.js';


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
   <Expenses expenses = {expenses} />
  );
}

export default App;
