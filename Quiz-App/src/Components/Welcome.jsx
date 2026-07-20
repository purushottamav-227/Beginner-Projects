function Welcome({onStart}){
    return(
        <>
            <div className="welcome">
                <h1>React Quiz App</h1>
                <p>Test your knowlwdge!!!</p>
                <button onClick={onStart}>Start Quiz</button>
            </div>
        </>
    )
}
export default Welcome;