import '../../css/game.css';
import { ColorClasses } from '../logic/enums/ColorClasses';
import { motion } from "framer-motion/dist/framer-motion"

import grayGrayRobot from "../../img/robot/gray_gray_robot.png";
import grayGreenRobot from "../../img/robot/gray_green_robot.png";
import grayYellowRobot from "../../img/robot/gray_yellow_robot.png";

import greenGrayRobot from "../../img/robot/green_gray_robot.png";
import greenGreenRobot from "../../img/robot/green_green_robot.png";
import greenYellowRobot from "../../img/robot/green_yellow_robot.png";

import yellowGrayRobot from "../../img/robot/yellow_gray_robot.png";
import yellowGreenRobot from "../../img/robot/yellow_green_robot.png";
import yellowYellowRobot from "../../img/robot/yellow_yellow_robot.png";

export function Robot({color, memColor, rotation}) {
    
    var imgPath = "";

    switch (color) {
        case ColorClasses.Gray:
            switch (memColor) {
                case ColorClasses.Gray:
                    imgPath = grayGrayRobot;
                    break;
                case ColorClasses.Green:
                    imgPath = grayGreenRobot;
                    break;
                case ColorClasses.Yellow:
                    imgPath = grayYellowRobot;
                    break;
                default:
                    break;
            }
            break;
        case ColorClasses.Green:
            switch (memColor) {
                case ColorClasses.Gray:
                    imgPath = greenGrayRobot;
                    break;
                case ColorClasses.Green:
                    imgPath = greenGreenRobot;
                    break;
                case ColorClasses.Yellow:
                    imgPath = greenYellowRobot;
                    break;
                default:
                    break;
            }
            break;
        case ColorClasses.Yellow:
            switch (memColor) {
                case ColorClasses.Gray:
                    imgPath = yellowGrayRobot;
                    break;
                case ColorClasses.Green:
                    imgPath = yellowGreenRobot;
                    break;
                case ColorClasses.Yellow:
                    imgPath = yellowYellowRobot;
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
          
    return (
        <>
            <motion.img animate={{rotate: rotation}} initial={{rotate: rotation}} className="tile" alt="robot" src={imgPath} />
        </>
    );
}