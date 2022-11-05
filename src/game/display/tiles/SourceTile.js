import graySourceIcon from '../../../img/source/gray_source.png';
import greenSourceIcon from '../../../img/source/green_source.png';
import yellowSourceIcon from '../../../img/source/yellow_source.png';

import { Tile } from "./Tile"
import { ColorClasses } from '../../logic/enums/ColorClasses';

export function SourceTile({color, animate}) {

    var display = null;
    switch (color) {
        case ColorClasses.Gray:
            display = <Tile displayImg={graySourceIcon} animate={animate} />;
            break;
        case ColorClasses.Green:
            display = <Tile displayImg={greenSourceIcon} animate={animate} />;
            break;
        case ColorClasses.Yellow:
            display = <Tile displayImg={yellowSourceIcon} animate={animate} />;
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