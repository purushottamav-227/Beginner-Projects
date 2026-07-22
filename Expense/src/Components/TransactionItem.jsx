
import "../styles/TransactionItem.css"

function TransactionItem({transaction,onDeleteTransaction, onEditTransaction}){
    return(
        <li className="transaction-item">
            <div className="transaction-meta">
                <h3>{transaction.title}</h3>
                <p className={transaction.type === "income" ? "income" : "expense"}>
                    {transaction.type === "income" ? "+" : "-"}${transaction.amount}
                </p>
            </div>
            <div className="transaction-actions">
                <button className="small-button" onClick={()=>onEditTransaction(transaction)}>Edit</button>
                <button className="small-button delete" onClick={()=>onDeleteTransaction(transaction.id)}>Delete</button>
            </div>
        </li>
    );
}
export default TransactionItem;