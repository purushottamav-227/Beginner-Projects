import "../styles/SearchBar.css"

function SearchBar({searchTerm, setSearchTerm}){
    return(
        <div className="search-bar">
            <label htmlFor="transaction-search">Search</label>
            <input id="transaction-search" type="text" 
                placeholder="Search transaction" 
                value={searchTerm} 
                onChange={(e)=>setSearchTerm(e.target.value)} 
            />
        </div>
    );
}
export default SearchBar;