import '../css/base.css';
import '../css/level_selecter.css'
import selectALevel from '../img/page_assets/selectalevel.png';
import level1Icon from '../img/page_assets/level1.png';

import { Link, Navigate } from 'react-router-dom';

import {useState, useEffect} from 'react';

export function LevelSelectPage() {

    const [selectedLvl, setSelectedLvl] = useState(0);

    if (selectedLvl) {
        var dest = "/levels/" + selectedLvl;
        return <Navigate to={dest} />;
    }

    return (
        <div className="base container-fluid d-flex flex-column align-items-center pt-4">
            <img className="title" alt="Select a level" src={selectALevel} />
            <div className="level-select-box d-flex justify-content-around mt-4 p-4">
                <div className="d-flex justify-content-center level m-2 p-1" onClick={() => setSelectedLvl(1)}>
                    <img className="level-icon" alt="Select a level" src={level1Icon} />
                </div>
                <div className= "d-flex justify-content-center level m-2 p-1" onClick={() => setSelectedLvl(2)}>
                    <img className="level-icon" alt="Select a level" src={level1Icon} />
                </div>
                <div className="d-flex justify-content-center level m-2 p-1">
                    <img className="level-icon" alt="Select a level" src={level1Icon} />
                </div>
                <div className="d-flex justify-content-center level m-2 p-1">
                    <img className="level-icon" alt="Select a level" src={level1Icon} />
                </div>
            </div>
        </div>
    );
}