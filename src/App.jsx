// App.jsx
import React from "react";
import "./App.css";
import { DRIVERS } from "./Component/Drivers.jsx";
import { PilotoList } from "./PilotoList"; // Importamos el componente PilotoList

function App() {
  return <PilotoList drivers={DRIVERS} />;
}

export default App;
