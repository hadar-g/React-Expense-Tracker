import './Expenses.css'
import ExpensesList from './ExpensesList.js'
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

    <li>

        <Card className = 'expenses'>
        <ExpenseFilter selected = {year} onChangeYear = {filterChangeHandler}/>
        <ExpensesList items = {filteredExpenses} />
        </Card>

    </li>
        
    );

}





export default Expenses