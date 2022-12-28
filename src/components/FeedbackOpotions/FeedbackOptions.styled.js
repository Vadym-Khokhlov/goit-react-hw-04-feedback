import styled from 'styled-components';

export const ButtonPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const FeedbackButton = styled.button`
  padding: 10px;
  background-color: ${props => {
    if (props.children === 'Good') {
      return '#f9cd76';
    }
    if (props.children === 'Neutral') {
      return 'grey';
    }
    if (props.children === 'Bad') {
      return 'darkred';
    }
  }};
  color: ${props => {
    if (props.children === 'Good') {
      return '#144673';
    }
    if (props.children === 'Neutral') {
      return 'silver';
    }
    if (props.children === 'Bad') {
      return 'darkorange';
    }
  }};
  border-radius: 5px;
  border: 1px solid #144673;
  font-size: 25px;
  cursor: pointer;
`;
//#f9cd76
//#144673;
