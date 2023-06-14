export default function Potato(props) {
  const { amount } = props;
  const potatoes = [];
  for (let i = 0; i < amount; i++) {
    potatoes.push(<span>🥔</span>);
  }

  return <p>{potatoes}</p>;
}
