const UsedLetter = ({ UsedLetter }) => {
  return (
    <li className="used-letter">{`${
      UsedLetter.used ? UsedLetter.letter : ""
    }`}</li>
  );
};

export default UsedLetter;
