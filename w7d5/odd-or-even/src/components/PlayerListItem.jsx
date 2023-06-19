export default function PlayerListItem(props) {
  const { name, wins } = props;
  return (
    <li className="PlayerListItem">
      <p>{name}</p>
      {wins === 1 && <p>1 win</p>}
      {wins !== 1 && <p>{wins} wins</p>}
    </li>
  );
}
