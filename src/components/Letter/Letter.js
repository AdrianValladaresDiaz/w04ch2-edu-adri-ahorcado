const Letter = ({ letter, actionOnClick }) => {
  return (
    <li onClick={actionOnClick} className="letter">
      <a href={letter}>{letter}</a>
    </li>
  );
};

export default Letter;
