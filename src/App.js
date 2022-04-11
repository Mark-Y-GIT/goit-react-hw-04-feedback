import React, { useState } from 'react';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section/Section';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

function App() {
  const [good, setGoodCount] = useState(0);
  const [neutral, setNeutralCount] = useState(0);
  const [bad, setBadCount] = useState(0);

  const onButtonClick = buttonName => {
    switch (buttonName) {
      case 'good':
        setGoodCount(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutralCount(prevState => prevState + 1);
        break;
      case 'bad':
        setBadCount(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let percent = parseInt((good / countTotalFeedback()) * 100);

    return percent;
  };

  return (
    <div className="wrapper">
      <Section title="Please leave a feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onButtonClick}
        />
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Section>
    </div>
  );
}

export default App;
