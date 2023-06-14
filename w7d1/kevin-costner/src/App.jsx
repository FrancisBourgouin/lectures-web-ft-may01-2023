import "./App.css";
import FancyComponent from "./components/FancyComponent";
import Header from "./components/Header";
import PlantList from "./components/PlantList";
import PlantListItem from "./components/PlantListItem";
import { plant1, plantsArr, plantsObj } from "./mocks/plantData";

function App() {
  return (
    <div className="App">
      <FancyComponent>
        <Header plantCount={plantsArr.length} />
      </FancyComponent>
      <main>
        <PlantList plants={plantsArr} />
      </main>
    </div>
  );
  // const plant = { ...plant1 };
  // plant.wateringInterval = 7;
  // return <PlantListItem {...plant} />;
  // return <PlantList plants={plantsArr} />;
  // return <Header plantCount={1} />;
}

export default App;
