import { useState, useEffect } from "react";

function Timer({timeLeft}){
    return(
        <>
            <div className="timer">
                <h3>Time Left:{timeLeft}</h3>
            </div>
        </>
    )
}
export default Timer;