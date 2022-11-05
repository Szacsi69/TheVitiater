import './css/board.css';

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
        <>
            {tileDisplays}
        </>
    );
}

export default GameBoard;