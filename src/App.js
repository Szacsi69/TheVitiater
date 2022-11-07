import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { GamePage } from './pages/GamePage';
import { LevelSelectPage } from './pages/LevelSelectPage';
import { TitlePage } from './pages/TitlePage';

function App() {

  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<TitlePage />} />
          <Route exact path="/levels" element={<LevelSelectPage />} />
          <Route exact path="/levels/:lvlNum" element={<GamePage />} />
      </Routes>
    </Router>
  );
}
//<GameMaster lvlCreate={generate_lvl1} />
export default App;
