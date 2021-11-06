import "./App.css";
// import LevelOne from "./pages/level1/LevelOne";
import { DndProvider } from "react-dnd-multi-backend";
import HTML5toTouch from "react-dnd-multi-backend/dist/esm/HTML5toTouch";
import LevelTwo from "./pages/level2/LevelTwo";
function App() {
  return (
    <DndProvider options={HTML5toTouch}>
      <div className="App">
        {/* <LevelOne /> */}
        <LevelTwo/>
      </div>
    </DndProvider>
  );
}

export default App;
