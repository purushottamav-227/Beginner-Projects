import { useState } from "react";
import "../styles/Balance.css"
function Balance({Income, Expense, currentBalance}){
    
    return(
        <>
            <div className="CIE">
                <hr />
                <h2>Current Balance</h2>
                <p>${currentBalance}</p>
                <hr />
                <div className="Income-Expense">
                    <div>
                        <h3>Income</h3>
                        <p>${Income}</p>
                    </div>
                    <div>
                        <h3>Expense</h3>
                        <p>${Expense}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Balance;