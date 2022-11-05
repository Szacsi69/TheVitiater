import grayControllerIcon from '../../../img/controller/gray_controller.png';
import greenControllerIcon from '../../../img/controller/green_controller.png';
import yellowControllerIcon from '../../../img/controller/yellow_controller.png';

import { Tile } from "./Tile"
import { ColorClasses } from '../../logic/enums/ColorClasses';

export function ControllerTile({color, animate}) {

    var display = null;
    switch (color) {
        case ColorClasses.Gray:
            display = <Tile displayImg={grayControllerIcon} animate={animate} />;
            break;
        case ColorClasses.Green:
            display = <Tile displayImg={greenControllerIcon} animate={animate} />;
            break;
        case ColorClasses.Yellow:
            display = <Tile displayImg={yellowControllerIcon} animate={animate} />;
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