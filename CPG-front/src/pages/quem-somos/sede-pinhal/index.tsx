import React from "react"
import BackTop from "../../../components/BackTop";
import { BannerMain } from "../../../components/BannerMain";
import BoxCenter from "../../../components/BoxCenter";
import Carousel3x4 from "../../../components/Carousel3x4";
import DivAdress from "../../../components/DivAdress";
import GlideBox from "../../../components/GlideBox/glidebox";
import styles from "./styles.module.scss";

export default function SedePinhal() {
  return(

    <>
    <BannerMain />
    <BoxCenter name="História" />
    <GlideBox title="INFRAESTRUTURA" />

    <div className={styles.Text}>
    <p>
    O CPG Balneário Pinhal é uma alternativa para os associados curtirem o veraneio. Nos seus 900 m², a <br />
    sede dispõe de uma estrutura para camping e hospedagem em 24 apartamentos, oferecendo um espaço <br />
    acolhedor, de lazer e descanso.
    </p>
    </div>

    <div className={styles.EspacoLaz}> 

      <h2>ESPAÇOS DE <br /> CULTURA E LAZER</h2>

      <p>
      Cancha de Bocha <br /> 
      Piscina Externa <br /> 
      Quadra de vôlei de areia

      </p>

    </div>

    <div className={styles.EspacoSport}> 

     <h2>ESPAÇOS <br />
      ESPORTIVOS </h2>

      <p>
      Apartamentos <br />
      Área de Camping <br />
      Área de Churrasqueiras <br />
      Sala de Jogos <br />
      Cozinha coletiva <br />
      Refeitório Comunitário     

      </p>

    </div>

    <div className={styles.Carousel}>

    <Carousel3x4 />

    </div>

    <div className={styles.GlideHistoria}>

    <GlideBox title="HISTÓRIA" />

      </div>

      <p className={styles.TextHistoria}>
         
      A sede de veraneio foi fundada em 1981, permitindo uma <br />
      alternativa para seus associados curtirem veraneio em <br />
      Pinhal, com estrutura completa de camping (área para 33 <br />
      barracas) e hospedagem em 24 Apartamentos. <br />
      <br />
      Associados de todo o Estado fazem suas reservas e <br />
      convivem, durante a temporada, solidificando amizades, <br />
      valorizando convívios. Mas fora dos meses de verão <br />
      também existe uso do local, que é acolhedor e permite lazer <br />
      e descanso em qualquer época do ano. <br />

      </p>

      <div className={styles.BlueGradient}>

      </div>

      <div className={styles.YellowGradient}>

      </div>

      <img id={styles.ImgHistory} src="/Assets/SPinhalHistoria.svg" />

      <div className={styles.DivAdress}>

      <DivAdress />
      <p> ENDEREÇO DA SEDE </p>

      </div>

      <p className={styles.AdressText}>
      
        Rua Agostinho Rocha, 1458 <br />
        Balneário Pinhal/RS <br />
        CEP 95 599 0000

      </p>

      <div className={styles.Horarios}>

     <GlideBox title="HORÁRIOS DE FUNCIONAMENTO" />
     
        </div>

        <div className={styles.HoraText}>

        <b>Funcionamento da Sede</b>
        <br />9h às 20h<br />
       
        </div>

        <BackTop />


    </>



    )
}