import { useEffect, useState } from "react";

const TransactionComponent = (props) => {
    const [searchItem, setSearchItem] = useState("");
    const [filteredTnx, setFilteredTnx] = useState(props.transaction);
    // tnx => all tnx should be saved
    // search item => !!

    const filteredTransactions = (search) => {
        if(!search || search === ""){
            setFilteredTnx(props.transaction);
            return;
        }
        const filtered = props.transaction.filter(t => 
            t.desc.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredTnx(filtered);
    };
    const changeHandler = (e) => {
        setSearchItem(e.target.value);
        //filter !!!
        filteredTransactions(e.target.value)
    }
    useEffect(() => {
        filteredTransactions(searchItem);
    }, [props.transaction]);


    if(!props.transaction.length) return <h3>add some transaction...</h3>
    return ( 
        <section className="t">
            <input 
                type="text" 
                value={searchItem} 
                onChange={changeHandler}
                placeholder="search for transaction ..."
                className="search"
            />
           {filteredTnx.length 
                ? filteredTnx.map((t) => (
                    <div 
                        key={t.id} 
                        className="transaction"
                        style={{borderRight: t.type === "expense" && "4px solid red"}}
                    >
                        <span>{t.desc} </span>
                        <span>$ {t.amount}</span> 
                    </div>
                    ))
                : "no item match"}
        </section>
     );
}
 
export default TransactionComponent;