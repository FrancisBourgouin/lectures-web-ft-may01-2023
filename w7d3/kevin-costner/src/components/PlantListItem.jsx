import { checkIfWellWatered } from "../helpers/plantHelpers";

export default function PlantListItem(props) {
  const { name, type, lastWatered, wateringInterval, handleClick } = props;

  const isWellWatered = checkIfWellWatered(wateringInterval, lastWatered);
  const liStyle = {
    border: "0.1em solid black",
    borderColor: isWellWatered ? "green" : "red",
    margin: "1em",
  };
  return (
    <li style={liStyle}>
      <h1>{name}</h1>
      <h2>
        {type} - Last watered on {lastWatered}
      </h2>
      <button onClick={handleClick}>WATER MEEE</button>
    </li>
  );
}
