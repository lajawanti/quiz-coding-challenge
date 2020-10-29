import React from 'react';
import './QuestionDisplay.css';


function QuestionDisplay(props) {
      console.log("Question in QuestionDisplay component  - ", props.ansOptions);

      return (
            <div className= 'questionDisplay'>
                  <span 
                        style={{ fontSize: "16px", fontWeight: "400" }}>
                        {`Question ${props.currentIndex + 1} of ${props.length}`}
                  </span>

                  <h3 className = "question">{props.question}</h3>

                  <p style = {{paddingBottom: '9px'}}>The options are ...</p>
                  {
                        props.ansOptions ? (props.ansOptions.map(option => {
                             return  <button className = "ans-option-button">{option}</button>
                        })) : <h1>Loading ...</h1>
                  }

                  <button className = "next-button">Next</button>
            </div>
      )
}

export default QuestionDisplay;
