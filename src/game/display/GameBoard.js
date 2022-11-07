import '../../css/game.css';

import {useState, useEffect} from 'react';

function GameBoard({tiles, robot}) {

    const [tileDisplays, setTileDisplays] = useState([[]])
    
    useEffect( () => {
        var displays = tiles.map(tileRow => tileRow.map((tile, index) => tile.display(index)));
        setTileDisplays(displays);
    },
        [tiles, robot]
    );

    return (
        <div className="board">
            {tileDisplays}
        </div>
    );
}

export default GameBoard;