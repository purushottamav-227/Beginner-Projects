import { useState, useEffect } from 'react'

import './App.css'
import Welcome from "./Components/Welcome"
import QuestionCard from './Components/QuestionCard';
import questions from "./data/Question"
import Result from './Components/Result';


function App() {
  const [score, setScore]=useState(0);
  const [timeLeft,setTimeLeft]=useState(15);
  const [gameState, setGameState]=useState("welcome");
  const [currentQuestion, setCurrentQuestion]=useState(0);
  const [selectedAnswer, setSelectedAnswer]=useState(null);

  useEffect(()=>{
    if(gameState !== "quiz") return;

    setTimeLeft(15);

    const interval = setInterval(()=>{
        setTimeLeft(prev => prev-1);
    },1000);

    return()=>clearInterval(interval);
  },[currentQuestion, gameState]);

  useEffect(()=>{
    if(timeLeft === 0){
      handleNext();
    }
  },[timeLeft])

  const handleNext = () =>{
    if(selectedAnswer===questions[currentQuestion].correctanswer){
      setScore(score => score+1);
    }

    if(currentQuestion< questions.length-1){
      setCurrentQuestion(currentQuestion+1);
      setSelectedAnswer(null);
    }else{
      setGameState("result");
    }
  }

  const restartQuiz = () =>{
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null)
    setGameState('welcome');
  }

  return (
    <div className="app">
      {gameState === 'welcome' && (
          <Welcome onStart={()=> setGameState('quiz')}/>
        )
      }
      {gameState === 'quiz' &&(
          <QuestionCard 
            questionobj={questions[currentQuestion]} 
            currentQuestion={currentQuestion} 
            totalquestions={questions.length}
            setSelectedAnswer={setSelectedAnswer}
            selectedAnswer={selectedAnswer}
            handleNext={handleNext}
            timeLeft={timeLeft}
          />
        )
      }
      {gameState === "result" && (
        <Result score={score} 
                totalquestions={questions.length} 
                restartQuiz={restartQuiz}
        />
      )}
    </div>
  )
}

export default App
