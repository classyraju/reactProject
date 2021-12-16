import { Button } from "bootstrap";
import React from "react";
import { useState } from "react";
import questions from "./questions";

function App() {
   const [questionIdx,setQuestionIdx ]=useState(0);
   const [score,setScore] =useState(0);
   const [showScore,setShowScore]=useState(false);
   const currQuestion = questions[questionIdx];

   const SelectOption=(i)=>
   {
      if(currQuestion.answer===i)
      {
        setScore(score+1);
      }
      const nxtque=questionIdx+1
      if(nxtque<questions.length)
      {
      setQuestionIdx(questionIdx+1);
      }
      else{
        setShowScore(true);
      }
     
   }
   const reset=()=>
   {
     setQuestionIdx(0)
     setScore(0)
     setShowScore(false)
   }

  return (
    
    <div className="quiz-container">
      {
        showScore ?
        <>
         <h1>Your score is :{score}</h1>
        <button onClick={reset}>Restart Quiz</button>
        </>:
        (<div className= "quiz-container__question">
        <h1>{currQuestion.question}</h1>
        <div className="quiz-container__options">
           <ul className="quiz-container__ul">
             {currQuestion.options.map((option,i)=>{
               return  <li className="quiz-container__li" onClick={()=>SelectOption(i)}>{option}</li>;
             }
             )}
            
            
           </ul>

        </div>

     </div>)
        

      }
       
      
    </div>
  );
}

export default App;
