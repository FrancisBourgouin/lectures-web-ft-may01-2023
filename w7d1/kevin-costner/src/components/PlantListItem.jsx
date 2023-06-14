import { checkIfWellWatered } from "../helpers/plantHelpers";
import FancyComponent from "./FancyComponent";
import WateringStatus from "./WateringStatus";

export default function PlantListItem(props) {
  // console.log(<li>Bob</li>);
  // ReactDOM.createElement("li", {...})

  const isWellWatered = checkIfWellWatered(props.lastWatered, props.wateringInterval);

  return (
    <li className="badass" style={{ color: "#b0b" }}>
      <h1>{props.name}</h1>
      <p>
        {props.type} - Every {props.wateringInterval} days
      </p>
      <FancyComponent>
        <WateringStatus isWellWatered={isWellWatered} />
      </FancyComponent>
    </li>
  );
}

// PlantListItem.defaultProps = {
//   id: "1",
//   type: "Monsterous plant",
//   name: "Monstera",
//   lastWatered: "2023-06-10",
//   wateringInterval: 1,
// };

// Smells like HTML
// Tastes like HTML
// Looks like HTML
// But it's not HTML

// jQuery
//

// $("body").append(`
//   <header>
//     <h1>Hello</h1>
//   </header>
// `)

// const $header = $("<header>")
// const $h1 = $("<h1>")
// $h1.text("Hello")
// $header.append($h1)

// $("body").append($header)
