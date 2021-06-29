import './Expenses.css'
import ExpenseItem from './ExpenseItem.js'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter.js'
import React, {useState} from 'react'

function Expenses(props){

    const[year, setYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter(expense =>{
        return expense.date.getFullYear().toString() === year
    })

    let expensesContent = <p>No Expenses found.</p>;

    if(filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map((expense) =>
        ( <ExpenseItem 
        key = {expense.id}
        title = {expense.title}
        amount = {expense.amount}
        date = {expense.date}
        />))
    }

    return(

    <div>

        <Card className = 'expenses'>
        <ExpenseFilter selected = {year} onChangeYear = {filterChangeHandler}/>
        {expensesContent}
        </Card>

    </div>
        
    );

}





export default Expenses