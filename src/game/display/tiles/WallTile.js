import grayWallIcon from '../../../img/wall/gray_wall.png';
import greenWallIcon from '../../../img/wall/green_wall.png';
import yellowWallIcon from '../../../img/wall/yellow_wall.png';

import { Tile } from "./Tile"
import { ColorClasses } from '../../logic/enums/ColorClasses';

export function WallTile({color, animate}) {

    var display = null;
    switch (color) {
        case ColorClasses.Gray:
            display = <Tile displayImg={grayWallIcon} animate={animate} />;
            break;
        case ColorClasses.Green:
            display = <Tile displayImg={greenWallIcon} animate={animate} />;
            break;
        case ColorClasses.Yellow:
            display = <Tile displayImg={yellowWallIcon} animate={animate} />;
            break;
        default:
            break;
    }
    return (
        <>
            { display }
        </>
    );
}