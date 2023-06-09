
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import  './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses =(props)=> {
  const [filteredYear,setFilteredYear] = useState('2022')
  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear)
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {props.items.map((expense)=>(
          <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          />
        ))}
      {/*  <ExpenseItem title={props.items[0].title}
       date={props.items[0].date}
       amount={props.items[0].amount}/>
      <ExpenseItem title={props.items[1].title}
       date={props.items[1].date}
       amount={props.items[1].amount}/>
       <ExpenseItem title={props.items[2].title}
       date={props.items[2].date}
       amount={props.items[2].amount}/>
       <ExpenseItem title={props.items[3].title}
       date={props.items[3].date}
       amount={props.items[3].amount}/>  */}
      </Card> 
      </div>    
  )
}

export default Expenses
