import React, { useState } from 'react';

import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';
import { AppHeader, AppHeading } from './App.styled';

export function App() {
  const [good, setCountGood] = useState(0);
  const [neutral, setCountNeutral] = useState(0);
  const [bad, setCountBad] = useState(0);

  const totalFeedbackCounter = () => {
    return good + neutral + bad;
  };

  const positiveFeedbackCounter = () => {
    return Math.round((good * 100) / totalFeedbackCounter() || 0);
  };

  function feedbackCounter(feedbackType) {
    switch (feedbackType) {
      case 'good':
        setCountGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setCountNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setCountBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  }

  const totalFeedback = totalFeedbackCounter();
  const feedbackType = { good, neutral, bad };

  return (
    <>
      <AppHeader>
        <AppHeading>Espresso</AppHeading>
      </AppHeader>
      <Section title="Please, leave your feedback">
        <FeedbackOptions
          options={Object.keys(feedbackType)}
          counter={feedbackCounter}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback <= 0 ? (
          <Notification message="There are no feedbacks" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positive={positiveFeedbackCounter()}
          />
        )}
      </Section>
    </>
  );
}
