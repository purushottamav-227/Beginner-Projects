
import "../styles/Filter.css"

function Filter({filterType, setFilterType}){
    return(
        <div className="filter-bar">
            <button className={filterType === "all" ? "active" : ""} onClick={()=> setFilterType("all")}>All</button>
            <button className={filterType === "income" ? "active" : ""} onClick={()=> setFilterType("income")}>Income</button>
            <button className={filterType === "expense" ? "active" : ""} onClick={()=> setFilterType("expense")}>Expense</button>
        </div>
    );
}
export default Filter;