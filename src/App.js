import './App.css';
// import { Helmet } from 'react-helmet';
import LevelOne from './pages/LevelOne';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <LevelOne/>
      </div>
    </DndProvider>
  );
}

export default App;
