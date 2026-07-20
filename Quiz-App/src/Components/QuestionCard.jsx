import Timer from "./Timer";
function QuestionCard({questionobj, currentQuestion, totalquestions, setSelectedAnswer, selectedAnswer, handleNext, timeLeft}){
    //currentQuestion is an index of the question, questionobj is the object of questions
    return(
        <>
            <div className="question-card">
                <h2>
                    Question {currentQuestion+1} of {totalquestions}
                </h2>

                <Timer timeLeft={timeLeft}/>
                <h3>{questionobj.question}</h3>

                {questionobj.options.map((option,index)=>(
                    <button key={index} 
                            onClick={()=> setSelectedAnswer(index)} 
                            className={ (selectedAnswer === index)? "selected" : ""}>
                        {option}
                    </button>
                    
                ))}
                <br/>
                <button onClick={handleNext} disabled={selectedAnswer===null}>Next</button>
            </div>
        </>
    );
}
export default QuestionCard;