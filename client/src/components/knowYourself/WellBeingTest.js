import React, { useState } from 'react';

const WellBeingTest = ({ onSubmit, onClose }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    { text: 'How often do you experience positive emotions?', options: [1, 2, 3, 4] },
    { text: 'Do you feel a sense of purpose in your daily activities?', options: [1, 2, 3, 4] },
    { text: 'How well do you handle stress and challenges?', options: [1, 2, 3, 4] },
    { text: 'To what extent do you feel connected to others?', options: [1, 2, 3, 4] },
    { text: 'How satisfied are you with your overall quality of life?', options: [1, 2, 3, 4] },
  ];

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      setAnswers({ ...answers, [currentQuestionIndex]: selectedOption });
      setSelectedOption(null); // Clear selected option after proceeding to the next question
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        calculateScore();
      }
    } else {
      alert("Please select an option before proceeding.");
    }
  };

  const handleChange = (value) => {
    setSelectedOption(value);
  };

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce((acc, value) => acc + value, 0);
    const averageScore = totalScore / Object.values(answers).length;
    onSubmit(averageScore);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Well-Being Test</h5>
          <h6 className="card-subtitle mb-2 text-muted">{questions[currentQuestionIndex].text}</h6>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <div key={index} className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="wellBeingQuestion"
                id={`option-${index}`}
                value={option}
                checked={selectedOption === option}
                onChange={() => handleChange(option)}
              />
              <label className="form-check-label" htmlFor={`option-${index}`}>
                {option}
              </label>
            </div>
          ))}
          <button className="btn btn-primary mt-3" onClick={handleNextQuestion}>
            {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Submit'}
          </button>
          {currentQuestionIndex === questions.length - 1 && (
            <button className="btn btn-secondary ml-2" onClick={onClose}>
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WellBeingTest;
