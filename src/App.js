import ExpenseItem from'./components/ExpenseItem';

function App() {
  const expenses = [
    {title: 'Insurance', 
    amount: 294.56, 
    date: new Date(2021, 2, 28)
  },
  ]
  return (
    <div>
      <h1>Hi i'm a react project</h1>
      <ExpenseItem 
      title = {expenses[0].title}
      amount = {expenses[0].amount}
      date = {expenses[0].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
