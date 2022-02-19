import React from "react";
import styles from "../../components/EstatutoPopups/styles.module.scss";

{/*
    os popups estão com mesmo texton então acho que o texto precisa ser uma prop. Além disso, não consegui fazer eles
    fecharem com o clique fora. Falta estiliozar mais um pouco mas não é nada demais, é só capricho

*/}
const FirstPopup = ({id="modal", onClose= () => {}, children }) => {
    const handleOutsideClick = (e) => {
        if (e.target.id == id) onClose();
    } 
    return (
 
    <div id={id} className={styles.Popup }  onClick={handleOutsideClick}>
        
        <div className={styles.Conteiner} >

        <button className={styles.Close} onClick={onClose}/> 

<div className="Content"> {children} </div>
        
        </div>
    </div>  

    );
};

export default FirstPopup;