function Result({score, totalquestions, restartQuiz}){
    const percentage = (score/totalquestions)*100;
    return(
        <div className="result">
            <h2>Quiz Completed!!!</h2>
            <p>score:{score}/{totalquestions}</p>
            <p>Wrong:{totalquestions-score}</p>
            <p>Percentage:{percentage}%</p>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}
export default Result;