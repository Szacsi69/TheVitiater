
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion/dist/framer-motion"

export function CodeElement({codeElem, use, del}) {
    const [item, setItem] = useState(null);

    useEffect(() => {
        setItem(codeElem);
    },
        [codeElem]
    );

    return (
        <>
            { codeElem &&
            <motion.div className="row mt-2 mb-2 pt-2 pb-2 border"  exit={{ opacity:0 }} initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration: 0.75 }}>
                <div className="col-6">
                    <p>{codeElem.name}</p>
                </div>
                <div className="d-flex justify-content-end col-3">
                    <button className="btn btn-success btn-block" onClick={() => {use(item)}}>Use</button>
                </div>
                <div className="d-flex justify-content-end col-3">
                    <button className="btn btn-danger btn-block" onClick={() => {del(item)}}>Delete</button>
                </div>
            </motion.div>
            }
        </>
    );
}