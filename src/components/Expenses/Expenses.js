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
    return(

    <div>

        <Card className = 'expenses'>

        <ExpenseFilter selected = {year} onChangeYear = {filterChangeHandler}/>
        
        {filteredExpenses.map((expense) =>( <ExpenseItem 
        title = {expense.title}
        amount = {expense.amount}
        date = {expense.date}
        />))}
        
        </Card>

    </div>
        
    );

}





export default Expenses