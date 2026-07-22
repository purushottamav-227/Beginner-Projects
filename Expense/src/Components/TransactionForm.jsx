import {useState, useEffect} from 'react'
import "../styles/TransactionForm.css"
function TransactionForm({onAddTransaction,editingTransaction,onUpdateTransaction,containerRef}){
    const [title, setTitle]=useState("");
    const [amount, setAmount]=useState("");
    const [type, setType]=useState("income");

    useEffect(()=>{
        if(editingTransaction){
            setTitle(editingTransaction.title);
            setAmount(editingTransaction.amount);
            setType(editingTransaction.type);
        }
    },[editingTransaction]);

    const handleSubmit = (e)=>{
        if(!title.trim()){
            alert("Please enter a title");
            return;
        }
        if(amount<=0){
            alert("Amount must be greater than zero");
            return;
        }
        if(title.length > 40){
            alert('Title should be less than 40 characters.');
            return;
        }

        const newTransaction={
            id: editingTransaction? editingTransaction.id : Date.now(),
            title:title.trim(),
            amount:Number(amount),
            type
        }

        e.preventDefault();

        if(editingTransaction){
            onUpdateTransaction(newTransaction);
        }else{
            onAddTransaction(newTransaction);
        }
        setTitle("");
        setAmount("");
        setType("income");
        
    }
    return(
        <>
            <div ref={containerRef} className={`transaction-form glass-card ${editingTransaction ? 'editing' : ''}`}>
                <h2>{editingTransaction ? "Edit Transaction" : "Add Transaction"}</h2>
                {editingTransaction && <p className="edit-hint">Update the values and hit submit.</p>}
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Enter title" 
                        value={title} 
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                    <input 
                        type="number" 
                        placeholder="Enter amount" 
                        value={amount} 
                        onChange={(e)=>setAmount(e.target.value)}
                    />
                    <select name="type" value={type} onChange={(e)=>setType(e.target.value)}>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                    <button type="submit">{editingTransaction? "Update Transaction":"Add Transaction"}</button>
                </form>
            </div>
        </>
    );
}
export default TransactionForm;