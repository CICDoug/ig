import React from "react";
import styles from "./styles.module.scss";

function DivAdress (props) {

    return (
    <>
        <div>

            <img className={styles.BlueDiv} src="/Assets/divazul.svg" />

            <div>

            <img className={styles.Endereco} src="/Assets/fundoendereco.svg" />

                <div className={styles.AdressTitle}>
                {props.AdressTitle}
                </div>



            </div>

        </div>



       

    </>

    
    )
    
}

export default DivAdress;