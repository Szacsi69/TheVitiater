import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GameMaster from './game/GameMaster';
import {colorTestLevel} from './game/levels';
import {generate_lvl1} from './levels/level_generator';
import { TitlePage } from './pages/TitlePage';

function App() {

  return (
    <div className="base container-fluid">
      <TitlePage />
    </div>
  );
}
//<GameMaster lvlCreate={generate_lvl1} />
export default App;
