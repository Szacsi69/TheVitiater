import '../css/tile.css';
import { motion } from "framer-motion/dist/framer-motion"

export function Tile({displayImg, animate}) {

    return (
        <>
            { animate &&
            <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="tile" alt="tile" src={displayImg}
            />
            }
            { !animate &&
            <img className="tile" alt="tile" src={displayImg} />
            }
        </>
    );
}