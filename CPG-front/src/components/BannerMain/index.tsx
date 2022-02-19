import BoxCenter from '../BoxCenter';
import styles from './styles.module.scss';

export function BannerMain() {
    return (
        <div className={styles.mainBannerContainer}>

            <BoxCenter name="História" />

            <div className={styles.mainTitle}>

            <button className={styles.TitleBack}> 
            
            <img src="/Assets/iconBack.svg"/> VOLTAR 

            </button> 

            </div>
        </div>
    )
}
