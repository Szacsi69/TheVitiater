import grayPathIcon from '../../../img/path/gray_path.png';
import greenPathIcon from '../../../img/path/green_path.png';
import yellowPathIcon from '../../../img/path/yellow_path.png';

import { Tile } from "./Tile"
import { ColorClasses } from '../../logic/enums/ColorClasses';

export function PathTile({color, animate}) {

    var display = null;
    switch (color) {
        case ColorClasses.Gray:
            display = <Tile displayImg={grayPathIcon} animate={animate} />;
            break;
        case ColorClasses.Green:
            display = <Tile displayImg={greenPathIcon} animate={animate} />;
            break;
        case ColorClasses.Yellow:
            display = <Tile displayImg={yellowPathIcon} animate={animate} />;
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