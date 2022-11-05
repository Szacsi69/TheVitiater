import GameMaster from './game/GameMaster';
import {colorTestLevel} from './game/levels';
import {generate_lvl1} from './levels/level_generator';

function App() {

  return (
    <div className="App container-fluid">
      <GameMaster lvlCreate={generate_lvl1} />
    </div>
  );
}

export default App;
