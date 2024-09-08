import "./App.css";
import { Addons } from "./components/Addons";
import { Info } from "./components/Info";
import { Plan } from "./components/Plan";
import { Summary } from "./components/Summary";
import { Thanks } from "./components/Thanks";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Info />}></Route>
        <Route path="/plan" element={<Plan />}></Route>
        <Route path="/addons" element={<Addons />}></Route>
        <Route path="/summary" element={<Summary />}></Route>
        <Route path="/thanks" element={<Thanks />}></Route>
      </Routes>
    </div>
  );
}

export default App;
