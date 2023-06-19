// We need a way to update the win of a player
// We need a list of all the players

import { useState } from "react";

export default function GameForm(props) {
  const { onSubmit, playerList } = props;

  const initialValues = { player1: "", player2: "", choice: "" };
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value });

    // const updatedForm = {...formData}
    // updatedForm[name] = value
    // setFormData(updatedForm)

    // formData.player1
    // formData[name]
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const winner = Math.random() > 0.5 ? formData.player1 : formData.player2;

    onSubmit(winner);
  };

  const parsedPlayers1 =
    playerList &&
    playerList.map((player) => (
      <option key={player.id} value={player.id}>
        {player.name}
      </option>
    ));

  let parsedPlayers2 = parsedPlayers1;
  if (formData.player1) {
    const filteredList = playerList.filter((player) => player.id !== formData.player1);
    parsedPlayers2 = filteredList.map((player) => (
      <option key={player.id} value={player.id}>
        {player.name}
      </option>
    ));
  }

  return (
    <section className="GameForm">
      <form onSubmit={handleSubmit}>
        <select name="player1" onChange={handleChange}>
          <option value="">Choose a player</option>
          {parsedPlayers1}
        </select>
        <select name="player2" onChange={handleChange}>
          <option value="">Choose a player</option>
          {parsedPlayers2}
        </select>
        <select name="choice" onChange={handleChange}>
          <option value="">Choose!</option>
          <option value="odd">Odd!</option>
          <option value="even">Even!</option>
        </select>
        <button>See who wins!</button>
      </form>
    </section>
  );
}
