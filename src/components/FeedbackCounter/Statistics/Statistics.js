export function Statistics({ good, neutral, bad, total, positive }) {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total feedbacks: {total}</li>
      <li>Positive feedbacks: {positive}%</li>
    </ul>
  );
}
