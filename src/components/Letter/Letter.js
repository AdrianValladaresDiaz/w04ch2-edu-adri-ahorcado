import propTypes from "prop-types";
import "./Letter.scss";

const Letter = ({ letter, actionOnClick }) => {
  return (
    <li
      onClick={(event) => {
        event.preventDefault();
        actionOnClick(letter.letter);
      }}
      className={`letter${letter.used ? " letter--used" : " letter--unused"}`}
    >
      <a href="#">{letter.letter}</a>
    </li>
  );
};
export default Letter;
