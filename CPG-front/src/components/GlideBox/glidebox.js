import React from "react";
import styles from "../GlideBox/styles.module.scss";


function GlideBox (props){
    return (

    <>
          
        <div className={styles.GlideBox} >

             {props.size}
             
        </div>

        <div id={styles.Title} >

            {props.title}

        </div>

    </>

    )
}

export default GlideBox;