import grayCheckerIcon from '../../../img/checker/gray_checker.png';
import greenCheckerIcon from '../../../img/checker/green_checker.png';
import yellowCheckerIcon from '../../../img/checker/yellow_checker.png';

import { ColorClasses } from '../../logic/enums/ColorClasses';
import { Tile } from "./Tile"

export function CheckerTile({color, animate}) {

    var display = null;
    switch (color) {
        case ColorClasses.Gray:
            display = <Tile displayImg={grayCheckerIcon} animate={animate} />;
            break;
        case ColorClasses.Green:
            display = <Tile displayImg={greenCheckerIcon} animate={animate} />;
            break;
        case ColorClasses.Yellow:
            display = <Tile displayImg={yellowCheckerIcon} animate={animate} />;
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