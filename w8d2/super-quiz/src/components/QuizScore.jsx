export default function QuizScore(props) {
  const { score } = props;

  return (
    <section>
      <h1>Your current score is:</h1>
      <h2>{Math.round(score * 100)}%</h2>
    </section>
  );
}
