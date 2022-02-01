import "./GuessedLetters";
import propTypes from "prop-types";

const GuessedLetters = ({ letter }) => {
  return (
    <li className={`guess-letter${letter.status ? "" : " empty"}`}>{`${
      letter.status ? letter.letter : ""
    }`}</li>
  );
};

GuessedLetters.propTypes = {
  letter: propTypes.shape({
    letter: propTypes.string.isRequired,
    status: propTypes.bool.isRequired,
  }),
};

export default GuessedLetters;
