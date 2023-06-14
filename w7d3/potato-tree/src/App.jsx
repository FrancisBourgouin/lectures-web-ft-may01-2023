import { useState } from "react";
import "./App.css";
import Potato from "./components/Potato";

function App() {
  const [list, setList] = useState([1, 2, 3, 4, 5]);

  const parsedList = list.map((number) => <Potato amount={number} />);

  const addRow = () => setList([...list, list.length + 1]);
  return (
    <div className="App">
      <header>
        <h1>Potatoes?</h1>
        <button onClick={addRow}>MOAR</button>
      </header>
      <main>{parsedList}</main>
    </div>
  );
}
export default App;
