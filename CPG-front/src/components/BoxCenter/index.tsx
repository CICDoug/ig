import React from 'react'
import styles from './styles.module.scss'



function BoxCenter (props) {
    return (

        <>
            
            
                        
            <div className={styles.BoxCenter} >

            
                
                {props.name}
                {props.href}

                </div>
                    
            

 
        </>

    )
}

export default BoxCenter;