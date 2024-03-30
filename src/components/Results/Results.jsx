const Results = ({
  totalCorrect = 0,
  totalFailed = 0,
  totalMissed = 0
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
