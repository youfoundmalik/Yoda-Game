import "./App.css";
import { DndProvider } from "react-dnd-multi-backend";
import HTML5toTouch from "react-dnd-multi-backend/dist/esm/HTML5toTouch";
import Router from "./Router";

function App() {
  return (
    <DndProvider options={HTML5toTouch}>
      <div className="App">
        <Router />
      </div>
    </DndProvider>
  );
}

export default App;
