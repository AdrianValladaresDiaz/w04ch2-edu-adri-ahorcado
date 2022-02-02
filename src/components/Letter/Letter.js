const Letter = ({ letter, actionOnClick }) => {
  return (
    <li
      onClick={(event) => {
        event.preventDefault();
        actionOnClick(letter.letter);
      }}
      className={`letter${letter.used ? " letter--used" : " letter--unused"}`}
    >
      <button>{letter.letter}</button>
    </li>
  );
};
export default Letter;
