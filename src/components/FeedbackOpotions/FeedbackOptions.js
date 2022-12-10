import { ButtonPanel, FeedbackButton } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, counter }) {
  return (
    <ButtonPanel>
      {options.map(item => (
        <FeedbackButton
          key={item}
          onClick={() => {
            counter(item);
          }}
        >
          {item}
        </FeedbackButton>
      ))}
    </ButtonPanel>
  );
}

FeedbackOptions.propTypes = {
  counter: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
