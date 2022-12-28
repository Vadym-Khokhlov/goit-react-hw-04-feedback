import React from 'react';

import FeedbackOptions from './FeedbackOpotions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';
import { AppHeader, AppHeading } from './App.styled';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackCounter = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };

  totalFeedbackCounter = () => {
    return this.state.Good + this.state.Neutral + this.state.Bad;
  };

  positiveFeedbackCounter = () => {
    return Math.round(
      (this.state.Good * 100) / this.totalFeedbackCounter() || 0
    );
  };

  render() {
    const feedbackType = Object.keys(this.state);
    const totalFeedback = this.totalFeedbackCounter();
    const { Good, Neutral, Bad } = this.state;
    return (
      <>
        <AppHeader>
          <AppHeading>Espresso</AppHeading>
        </AppHeader>
        <Section title="Please, leave your feedback">
          <FeedbackOptions
            options={feedbackType}
            counter={this.feedbackCounter}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback <= 0 ? (
            <Notification message="There are no feedbacks" />
          ) : (
            <Statistics
              good={Good}
              neutral={Neutral}
              bad={Bad}
              total={this.totalFeedbackCounter()}
              positive={this.positiveFeedbackCounter()}
            />
          )}
        </Section>
      </>
    );
  }
}

// 1. Checking Props for Components
// 2. Styled components stylization
// 3. Refactoring
