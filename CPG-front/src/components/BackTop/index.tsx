import React from "react";
import styles from "./styles.module.scss";

function BackTop (){
    return (
        <>
    <button id={styles.BackTop} >
            <img src="/Assets/VoltarTopo.svg" />
        </button>
        </>
    )
}

export default BackTop;