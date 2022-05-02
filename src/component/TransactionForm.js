import { useState } from "react";

const TransactionForm = ({addTransaction, setIsShow}) => {
    // const [type, setType] = useState(["income", "expense"]);
    // const [amount, setAmount] = useState(0);
    // const [desc, setDesc] = useState([""]);

    const [formValues, setFormValues] = useState({
        type : "expense",
        amount : 0,
        desc : "",
    });
    const changeHandler = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }
    const submitHandler = (e) => {
        if(!formValues.desc || !formValues.amount){
            alert("all fields are mandatory !")
            return
        }
        e.preventDefault();
        addTransaction(formValues);
        setIsShow(false)

    }
    
    return ( 
        <form className="form" onSubmit={submitHandler}> 
            <input 
                type="text" 
                name="desc" 
                placeholder="desc" 
                onChange={changeHandler} 
                value={formValues.desc}
            />
            <input 
                type="number"
                name="amount" 
                min="0"
                placeholder="amount" 
                onChange={changeHandler}
                value={formValues.amount}
            />    
            <div className="radioBox">
                <input 
                    type="radio" 
                    value="expense" 
                    name="type"
                    onChange={changeHandler}
                    id="expense"
                />
                <label htmlFor="expense">Expense</label>

                <input 
                    type="radio" 
                    value="income" 
                    name="type" 
                    onChange={changeHandler}
                    id="income"
                />
                <label htmlFor="income">Income</label>
            </div>
            <button type="submit" className="btn primary-btn">Add Transaction</button>
        </form>
     );
}
 
export default TransactionForm;