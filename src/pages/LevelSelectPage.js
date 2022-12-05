import '../css/base.css';
import '../css/level_selecter.css'
import selectALevel from '../img/page_assets/selectalevel.png';
import level1Icon from '../img/page_assets/level1.png';

import green_checker from '../img/checker/green_checker.png';
import gray_controller from '../img/controller/gray_controller.png';
import green_controller from '../img/controller/green_controller.png';
import yellow_controller from '../img/controller/yellow_controller.png';

import { Link, Navigate } from 'react-router-dom';
import { motion } from "framer-motion/dist/framer-motion"
import {useState, useEffect} from 'react';

export function LevelSelectPage() {

    const [selectedLvl, setSelectedLvl] = useState(0);

    if (selectedLvl) {
        var dest = "/levels/" + selectedLvl;
        return <Navigate to={dest} />;
    }

    return (
        <div className="base container-fluid row">
            <div className="d-flex flex-column align-items-center justify-content-around col-2">
                <motion.img animate={{ scale: [1, 1.1, 1] }} transition={{ ease: "easeInOut", duration: 0.75, repeat: Infinity }}  className="decor-img" alt="decor" src={green_controller} />
                <motion.img animate={{ scale: [1, 1.1, 1] }} transition={{ ease: "easeInOut", duration: 0.75, repeat: Infinity }}  className="decor-img" alt="decor" src={yellow_controller} />
            </div>
            <div className="d-flex flex-column align-items-center col-8 pt-4">
                <img className="title" alt="Select a level" src={selectALevel} />
                <div className="row level-select-box d-flex justify-content-around col-12 mt-4 p-4">
                    <div className="row d-flex justify-content-between col-12 mb-4">
                        <div className="d-flex justify-content-center level col-2" onClick={() => setSelectedLvl(1)}>
                            <p className="h1 fw-bold text-white p-2" >1</p>
                        </div>
                        <div className= "d-flex justify-content-center level col-2" onClick={() => setSelectedLvl(2)}>
                            <p className="h1 fw-bold text-white p-2" >2</p>
                        </div>
                        <div className="d-flex justify-content-center level col-2" onClick={() => setSelectedLvl(3)}>
                            <p className="h1 fw-bold text-white p-2" >3</p>
                        </div>
                        <div className="d-flex justify-content-center level col-2" onClick={() => setSelectedLvl(4)}>
                            <p className="h1 fw-bold text-white p-2" >4</p>
                        </div>
                        <div className="d-flex justify-content-center level col-2" onClick={() => setSelectedLvl(5)}>
                            <p className="h1 fw-bold text-white p-2" >5</p>
                        </div>
                        <div className="d-flex justify-content-center level col-2" onClick={() => setSelectedLvl(6)}>
                            <p className="h1 fw-bold text-white p-2" >6</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between col-12">
                        <div className="d-flex justify-content-center level col-2" onClick={() => setSelectedLvl(7)}>
                            <p className="h1 fw-bold text-white p-2" >7</p>
                        </div>
                        <div className= "d-flex justify-content-center level col-2" onClick={() => setSelectedLvl(2)}>
                            <p className="h1 fw-bold text-white p-2" >8</p>
                        </div>
                        <div className="d-flex justify-content-center level col-2" onClick={() => setSelectedLvl(3)}>
                            <p className="h1 fw-bold text-white p-2" >9</p>
                        </div>
                        <div className="d-flex justify-content-center level col-2" onClick={() => setSelectedLvl(4)}>
                            <p className="h1 fw-bold text-white p-2" >10</p>
                        </div>
                        <div className="d-flex justify-content-center level col-2" onClick={() => setSelectedLvl(5)}>
                            <p className="h1 fw-bold text-white p-2" >11</p>
                        </div>
                        <div className="d-flex justify-content-center level col-2" onClick={() => setSelectedLvl(6)}>
                            <p className="h1 fw-bold text-white p-2" >12</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-around col-2">
                <motion.img animate={{ scale: [1, 1.1, 1] }} transition={{ ease: "easeInOut", duration: 0.75, repeat: Infinity }}  className="decor-img" alt="decor" src={gray_controller} />
            </div>
        </div>
    );
}

/*
    <div className="d-flex justify-content-center level m-2 p-1" onClick={() => setSelectedLvl(4)}>
                    <img className="level-icon" alt="Select a level" src={level1Icon} />
                </div>
*/