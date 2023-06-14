import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plants, updateWateringById } = props;

  const parsedPlants =
    Array.isArray(plants) &&
    plants.map((plant) => (
      <PlantListItem
        key={plant.id}
        {...plant}
        handleClick={() => updateWateringById(plant.id)}
      />
    ));
  return (
    <section>
      <h1>List of plants</h1>
      <ul>{parsedPlants}</ul>
    </section>
  );
}
