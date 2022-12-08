export function FeedbackOptions({ options, counter }) {
  return options.map(item => {
    return (
      <button
        key={item}
        onClick={() => {
          counter(item);
        }}
      >
        {item}
      </button>
    );
  });
}
