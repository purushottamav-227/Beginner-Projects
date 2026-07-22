import { useState, useEffect, useRef } from 'react'
import './App.css'
import Header from './Components/Header';
import Balance from './Components/Balance';
import TransactionForm from './Components/TransactionForm';
import TransactionList from './Components/TransactionList';
import Filter from './Components/Filter';
import SearchBar from './Components/SearchBar';

function App() {
  /*const [transactions, setTransactions]=useState([]);*/ //Before local storage
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");

    return savedTransactions
          ? JSON.parse(savedTransactions)
          : [];
  });//After Addition of Local storage concept

  const [editingTransaction, setEditingTransaction] = useState(null);
  const [searchTerm, setSearchTerm]=useState("");
  const [filterType, setFilterType]=useState("all");
  const formRef = useRef(null);

  useEffect(() => {
    if (editingTransaction && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [editingTransaction]);

  //Local storage
  useEffect(()=>{
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );//json.stringify convert to json
  },[transactions])


  const handleAddTransaction=(newTransaction)=>{
    setTransactions(transactions=>[...transactions, newTransaction]);
  }

  const handleDeleteTransaction = (id) => {
    setTransactions(prevTransactions =>
        prevTransactions.filter(
            transaction =>
                transaction.id !== id
        )
    );
  }

  const handleEditTransaction=(transaction)=>{
    setEditingTransaction(transaction)
  }

  const handleUpdateTransaction=(updatedTransaction)=>{
    setTransactions(transactions=> transactions.map(transaction => transaction.id===updatedTransaction.id ? updatedTransaction:transaction));
    setEditingTransaction(null);
  }

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((total, t) => total + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((total, t) => total + t.amount, 0);

  const currentBalance = income - expense;

  const filteredTransactions= transactions.filter(transaction=> {

    const matchesSearch=
        transaction.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    
    const matchesFilter=
        transaction.type===filterType || filterType === "all";
    
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <Header/>
      <main className="expense-app">
        <Balance Income={income} Expense={expense} currentBalance={currentBalance}/>
        <TransactionForm onAddTransaction={handleAddTransaction} editingTransaction={editingTransaction} onUpdateTransaction={handleUpdateTransaction} containerRef={formRef}/>
        <div className="filter-panel glass-card">
          <h2>Filter Transactions</h2>
          <div className="filter-panel__controls">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <Filter filterType={filterType} setFilterType={setFilterType}/>
          </div>
        </div>
        <TransactionList transactions={filteredTransactions} onDeleteTransaction={handleDeleteTransaction} onEditTransaction={handleEditTransaction}/>
      </main>
    </>
  )
}

export default App;
