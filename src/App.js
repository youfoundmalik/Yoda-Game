import "./App.css";
import LevelOne from "./pages/LevelOne";
import { DndProvider } from "react-dnd-multi-backend";
import HTML5toTouch from "react-dnd-multi-backend/dist/esm/HTML5toTouch";
function App() {
  return (
    <DndProvider options={HTML5toTouch}>
      <div className="App">
        <LevelOne />
      </div>
    </DndProvider>
  );
}

export default App;
