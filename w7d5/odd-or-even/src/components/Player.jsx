import PlayerForm from "./PlayerForm";
import PlayerList from "./PlayerList";

import { useState } from "react";

export default function Player(props) {
  const { playerList, addPlayer } = props;
  const [view, setView] = useState("all");
  return (
    <section className="Player">
      <button onClick={() => setView("all")}>See all players</button>
      <button onClick={() => setView("add")}>Add a player</button>
      {view === "add" && <PlayerForm onSubmit={addPlayer} />}
      {view === "all" && <PlayerList playerList={playerList} />}
    </section>
  );
}
