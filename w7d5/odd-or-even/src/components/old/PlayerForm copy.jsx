// A way to add a player
// When we submit

// Props: onSubmit

import { useState } from "react";

export default function PlayerForm(props) {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;

    if (value.length < 20) {
      setName(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name) {
      props.onSubmit(name);
    }

    setName("");
  };

  return (
    <form className="PlayerForm" onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <button>Add new player</button>
    </form>
  );
}
