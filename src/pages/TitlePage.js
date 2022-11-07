import '../css/base.css';
import '../css/title.css';
import titleImg from '../img/page_assets/title.png';
import clickToStart from '../img/page_assets/clicktostart.png';
import robot1 from '../img/robot/green_green_robot.png';
import robot2 from '../img/robot/gray_gray_robot.png';
import robot3 from '../img/robot/yellow_yellow_robot.png';

import { motion } from "framer-motion/dist/framer-motion"
import { Link, Navigate } from 'react-router-dom';
import {useState, useEffect} from 'react';

export function TitlePage() {
    const [redirect, setRedirect] = useState(false);
    
    if (redirect)
        return <Navigate to="/levels" />;

    return (
        <div className="base container-fluid d-flex flex-column align-items-center pt-5" >
            <img className="title" alt="title" src={titleImg} />
            <div>
                <div className="start-div d-flex justify-content-center align-items-center m-5 p-3" onClick={() => setRedirect(true)}>
                    <motion.img animate={{ opacity: 0 }} transition={{ ease: "linear", duration: 1.5, repeat: Infinity }} className="click-to-start-img" alt="clicktoplay" src={clickToStart} />
                </div>
                <div className="d-flex flex-row justify-content-around">
                    <motion.img animate={{ rotate: 360 }} transition={{ ease: "linear", duration: 2, repeat: Infinity }}  className="robot-img m-2" alt="spinning robot" src={robot1} />
                    <motion.img animate={{ rotate: 360 }} transition={{ ease: "linear", duration: 2, repeat: Infinity }} className="robot-img m-2" alt="spinning robot" src={robot2} />
                    <motion.img animate={{ rotate: 360 }} transition={{ ease: "linear", duration: 2, repeat: Infinity }} className="robot-img m-2" alt="spinning robot" src={robot3} />
                </div>
            </div>
        </div>
    );
}