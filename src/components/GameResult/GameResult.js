const GameResult = ({ gameState }) => {
  let text = "";
  if (gameState === "lost") {
    text = "Erese mu malo";
  } else if (gameState === "won") {
    text = "Molt rebé";
  } else {
    text = "";
  }
  return <section className="game-result">{text}</section>;
};
export default GameResult;
