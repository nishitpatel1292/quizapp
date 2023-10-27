import React, { useEffect, useState } from 'react'
import '../App.css'
import { Data } from '../Data/Data'

const Card = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);



  const handleNext = () => {

    if (selectedOption == Data.questions[currentQuestion].correctOption) {
      setScore(score + 1);
    }
    if (currentQuestion == Data.questions.length - 2) {
      document.getElementById('btn-next').innerHTML = 'Submit';
    }
    if (currentQuestion < Data.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(0);
    }
    else {
      setShowScore(true);
      localStorage.clear();
    }
  }
  return (
    <div className='Card-wrapper'>
        <h1>Quiz app</h1>
      <div className="card-container">
        {!showScore && <div className="question-wrapper">
          <div className="question" key={currentQuestion}>
            <div className="question-number">{currentQuestion + 1}</div>
            <div className="question-text">
              {Data.questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="options">
            {
              Data.questions[currentQuestion].options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedOption(i + 1)}
                  className={`option ${selectedOption == i + 1 ? "checked" : null
                    }`}
                >
                  {option.text}
                </button>
              ))
            }
          </div>
          <button onClick={handleNext} id="btn-next" >Next</button>
        </div>
        }
        {
          showScore && <div className="result-wrapper">
            <div>
              Your Score: {score} <br />
              Total Score: {Data.questions.length} <br />
              Percentage: {((score / Data.questions.length) * 100).toFixed(1)}%
            </div>
          </div>
        }
      </div>
    </div>

  )
}

export default Card