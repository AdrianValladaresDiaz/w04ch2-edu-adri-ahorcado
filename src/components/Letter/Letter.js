import propTypes from "prop-types";
import "./Letter.scss";

const Letter = ({ letter, actionOnClick }) => {
  console.log(letter);
  return (
    <li
      className={`letter${letter.used ? " letter--used" : " letter--unused"}`}
    >
      <a
        href="#"
        onClick={(event) => {
          event.preventDefault();
          actionOnClick(letter.letter);
        }}
      >
        {letter.letter}
      </a>
    </li>
  );
};
export default Letter;
