import PlayerListItem from "./PlayerListItem";

// PlayerList
export default function PlayerList(props) {
  const { playerList } = props;
  const parsedPlayers =
    playerList &&
    playerList.map((player) => <PlayerListItem {...player} key={player.id} />);

  return <ul className="PlayerList">{parsedPlayers}</ul>;
}
