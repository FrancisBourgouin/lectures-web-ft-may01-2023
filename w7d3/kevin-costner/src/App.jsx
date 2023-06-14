import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PlantList from "./components/PlantList";

import { plantsObj } from "./mocks/plantData";
import { waterEVERYTHING, waterPlantById } from "./helpers/plantHelpers";

function App() {
  const [plants, setPlants] = useState(plantsObj);

  const updateWateringById = (plantId) => {
    const updatedPlants = waterPlantById(plantId, plants);

    setPlants(updatedPlants);
  };

  const updateWateringEverything = () => {
    const updatedPlants = waterEVERYTHING(plants);

    setPlants(updatedPlants);
  };

  return (
    <div className="App">
      <Header handleClick={updateWateringEverything} />
      <main>
        <PlantList
          plants={Object.values(plants)}
          updateWateringById={updateWateringById}
        />
      </main>
    </div>
  );
}
export default App;
