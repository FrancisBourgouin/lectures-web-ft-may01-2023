import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plants } = props; // will it crash? NO
  // plants => undefined

  // Shortcircuit
  const parsedPlants =
    Array.isArray(plants) &&
    plants.map((plant) => <PlantListItem key={plant.id} {...plant} />);
  return (
    <section>
      <h1>All the plants!</h1>
      {!parsedPlants && <p>WHERE ARE THE PLANTS ?!?!?!</p>}
      <ul>{parsedPlants}</ul>
    </section>
  );
}
