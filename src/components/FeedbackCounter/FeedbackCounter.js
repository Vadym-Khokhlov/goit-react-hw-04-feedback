// import React from 'react';
// import { FeedbackOptions } from './FeedbackButtons/FeedbackOptions';
// import { Statistics } from './Statistics/Statistics';

// export class FeedbackCounter extends React.Component {
//   state = {
//     Good: 0,
//     Neutral: 0,
//     Bad: 0,
//   };

//   feedbackCounter = type => {
//     this.setState(prevState => ({ [type]: prevState[type] + 1 }));
//   };
//   totalFeedbackCounter = () => {
//     return this.state.Good + this.state.Neutral + this.state.Bad;
//   };

//   render() {
//     const feedbackType = Object.keys(this.state);
//     return (
//       <>
//         <div>
//           <h2>Please, leave your feedback</h2>
//           <FeedbackOptions
//             options={feedbackType}
//             counter={this.feedbackCounter}
//           />
//         </div>
//         <div>
//           <Statistics
//             good={this.state.Good}
//             neutral={this.state.Neutral}
//             bad={this.state.Bad}
//             total={this.totalFeedbackCounter}
//           />
//         </div>
//       </>
//     );
//   }
// }
