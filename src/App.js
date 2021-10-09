import './App.css';
import { Helmet } from 'react-helmet';
import LevelOne from './components/LevelOne';

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
