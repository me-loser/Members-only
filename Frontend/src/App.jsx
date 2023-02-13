import { useState } from "react";
import { AllRoutes } from "./AllRoutes";
import "./App.css";
import NavBar from "./components/navigation/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <AllRoutes />
    </div>
  );
}

export default App;
