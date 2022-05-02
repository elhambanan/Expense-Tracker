import { useState } from "react";
import TransactionForm from "./TransactionForm";

const OverviewComponent = ({income, expense, addTransaction}) => {
    const [isShow, setIsShow] = useState(false);

    
    return ( 
        <div>
            <section className="overview">
                <div className="topsection">
                    <p>Balance : {income - expense}</p>
                    <button 
                        onClick={()=>setIsShow((prevState) => !prevState)}
                        className={`btn ${isShow && "cancel"}`}
                    > 
                        {isShow ? "Cancle" : "Add"}
                    </button>
                </div>
                { isShow && <TransactionForm addTransaction={addTransaction} setIsShow={setIsShow}/>}
                <div className="resultsection"> 
                    <div className="expenseBox">Expense <span style={{color: "red"}}>{expense} $</span></div>
                    <div className="expenseBox">Income  <span>{income} $</span></div>
                </div>
            </section>
        </div>
     );
}
 
export default OverviewComponent;