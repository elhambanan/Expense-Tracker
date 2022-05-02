import { useEffect, useState } from "react";
import "../App.css"
import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";

const ExpenceApp = () => {
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [transaction, setTransaction] = useState([])


    const addTransaction = (formValues) => {
       const newTransaction = {...formValues, id: Date.now()} //{...spread operatoe}
       setTransaction([...transaction, newTransaction]) 
    };
    useEffect(()=>{
        let exp = 0;
        let inc = 0;
        transaction.forEach((t) => {
            t.type === "expense" ? (exp = exp + parseFloat(t.amount)) : (inc = inc + parseFloat(t.amount))
        });
        setExpense(exp);
        setIncome(inc);
    },[ transaction]);


    return (
        <section className="container">
            <OverviewComponent
                expense={expense}
                income={income}
                addTransaction={addTransaction} 
            />
           <TransactionComponent 
                transaction={transaction} 
                addTransaction={addTransaction} 

            />
        </section>
    );
}
 
export default ExpenceApp;