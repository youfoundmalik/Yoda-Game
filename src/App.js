import './App.css';
import { Helmet } from 'react-helmet';
import LevelOne from './pages/LevelOne';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Yoda</title>
      </Helmet>
      <LevelOne/>
    </div>
  );
}

export default App;
