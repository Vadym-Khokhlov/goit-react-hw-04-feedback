import { StatList } from './Statistics.styled';
import PropTypes from 'prop-types';

export default function Statistics({ good, neutral, bad, total, positive }) {
  return (
    <StatList>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total feedbacks: {total}</li>
      <li>Positive feedbacks: {positive}%</li>
    </StatList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
