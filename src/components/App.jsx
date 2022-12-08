import React from 'react';

import { FeedbackOptions } from './FeedbackCounter/FeedbackButtons/FeedbackOptions';
import { Statistics } from './FeedbackCounter/Statistics/Statistics';

export class App extends React.Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
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
    return (
      <>
        <FeedbackOptions
          options={feedbackType}
          counter={this.feedbackCounter}
        />

        <Statistics
          good={this.state.Good}
          neutral={this.state.Neutral}
          bad={this.state.Bad}
          total={this.totalFeedbackCounter()}
          positive={this.positiveFeedbackCounter()}
        />
      </>
    );
  }
}
