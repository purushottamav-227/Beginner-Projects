import TransactionItem from "./TransactionItem";
import "../styles/TransactionList.css"
function TransactionList({transactions, onDeleteTransaction, onEditTransaction}){
    if(transactions.length === 0){
        return <p className="empty-state">No transactions yet.</p>
    }
    return(
        <>
            <div className="transaction-list glass-card">
                <h2>Transactions</h2>
                <ul className="transaction-items">
                    {transactions.map((transaction)=>(
                        <TransactionItem key={transaction.id} transaction={transaction} onDeleteTransaction={onDeleteTransaction} onEditTransaction={onEditTransaction}/>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default TransactionList;