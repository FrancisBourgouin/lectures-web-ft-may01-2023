import "./App.css";
import GameForm from "./components/GameForm";
import Player from "./components/Player";
import Header from "./components/Header";

import { playerData } from "./mocks/playerData";
import PlayerForm from "./components/PlayerForm";
import PlayerListItem from "./components/PlayerListItem";
import { useState } from "react";
import useWow from "./hooks/useWow";

function App() {
  const [players, setPlayers] = useState(playerData);
  const { sayWow } = useWow();

  const playerList = Object.values(players);

  const addPlayer = (formData) => {
    const id = Math.floor(Math.random() * 10000);
    const newPlayer = {
      id,
      name: formData.name,
      wins: 0,
    };
    const updatedPlayers = { ...players, [id]: newPlayer };

    setPlayers(updatedPlayers);
  };

  const addWin = (formData) => {
    const winnerId = Math.random() > 0.5 ? formData.player1 : formData.player2;

    const updatedPlayer = { ...players[winnerId] };
    updatedPlayer.wins++;

    const updatedPlayers = { ...players, [winnerId]: updatedPlayer };

    setPlayers(updatedPlayers);
    sayWow();
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Player playerList={playerList} addPlayer={addPlayer} />
        <GameForm playerList={playerList} onSubmit={addWin} />
      </main>
    </div>
  );

  // return <PlayerForm onSubmit={(name) => console.log(name)} />;
  // return (
  //   <GameForm
  //     onSubmit={(data) => console.log(data)}
  //     playerList={Object.values(players)}
  //   />
  // );

  // return <PlayerListItem name="bob" wins={6} />;
}

export default App;
