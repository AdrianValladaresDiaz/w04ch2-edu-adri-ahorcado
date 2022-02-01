const Letter = ({ letter, actionOnClick }) => {
  return (
    <li
      onClick={() => {
        actionOnClick(letter);
      }}
      className="letter"
    >
      <a href="#">{letter}</a>
    </li>
  );
};

export default Letter;
