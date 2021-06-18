import './Expenses.css'
import ExpenseItem from './ExpenseItem.js'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter.js'
import {useState} from 'react'

function Expenses(props){

    const[year, setYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setYear(selectedYear)
    }

    return(

    <div>

        <Card className = 'expenses'>

        <ExpenseFilter selected = {year} onChangeYear = {filterChangeHandler}/>

        <ExpenseItem 
        title = {props.expenses[0].title}
        amount = {props.expenses[0].amount}
        date = {props.expenses[0].date}
        ></ExpenseItem>

         <ExpenseItem 
         title = {props.expenses[1].title}
         amount = {props.expenses[1].amount}
         date = {props.expenses[1].date}
         ></ExpenseItem>

        </Card>

    </div>
        
    );

}





export default Expenses