const Results = ({
  totalCorrect,
  totalFailed,
  totalMissed
}) => {
  return (
    <div>
      <h3>Test bestanden!</h3>
      <p>Richtig: {totalCorrect}</p>
      <p>Falsch: {totalFailed}</p>
      <p>Verpasst: {totalMissed}</p>
    </div>
  );
};

export default Results;
