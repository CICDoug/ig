import React from 'react';
import { BannerMain } from '../../../components/BannerMain';
import BoxCenter from '../../../components/BoxCenter';
import Carousel3x4 from '../../../components/Carousel3x4';
import DivAdress from '../../../components/DivAdress';
import GlideBox from '../../../components/GlideBox/glidebox';
import styles from "./styles.module.scss";


function SedePortoAlegre() {
  return(
    <>
    <BannerMain/>
    <BoxCenter name="Porto Alegre"/>
    <GlideBox title = "INFRAESTRUTURA" />

    <p className={styles.Text}>

       A sede do CPG Porto Alegre fica localizada à beira do Guaíba, na Zona Sul da capital. Com 40.000 m² de
      <br/>área total, oferece uma completa infraestrutura para a prática de atividades sociais, esportivas, culturais
      <br/>e de lazer, que visam o bem estar e a qualidade de vida.</p>

    <div className={styles.Sports}> 

      <h2>ESPAÇOS ESPORTIVOS</h2>

      <p>
      Piscina Térmica <br /> 
      <br /> Piscina Externa <br /> 
      <br /> Quadras poliesportivas de vôlei, basquete e futsal <br /> 
      <br /> Quadras de tênis <br /> 
      <br /> Quadra de vôlei, beach tênis e futebol de areia <br /> 
      <br /> Quadras de grama sintética <br /> 
      <br /> Sala de musculação <br /> 
      <br /> Sala de sinuca <br /> 
      <br /> Sala de ginástica
      </p>

    </div>

    <div className={styles.Cult}>

    <h2>ESPAÇOS DE CULTURA E LAZER</h2>
    
    <p>
    Área de Churrasqueiras <br />
    Quiosques <br />
    Casinha de Brinquedos <br />
    Biblioteca <br />
     Playground <br />
    Centro de Tradições <br /> Gaúchas <br />
     Espaço Multiartes
    </p>

    </div>

    <div className={styles.Events}>

    <h2>ESPAÇOS <br /> DE EVENTOS</h2>

    <p>
    3 espaços para realização de eventos <br />
    Capacidade para 50 a 500 pessoas <br />
    250 vagas de <br /> estacionamento <br />
    </p>

    </div>

    <Carousel3x4 />   

    <div id={styles.GlideHistoria}>
    <GlideBox title="HISTÓRIA" />

    </div>

   <p id={styles.TextHistoria}>
   O Clube do Professor Gaúcho foi fundado em 1966 por um <br />
   grupo visionário de educadores, que viam a necessidade de <br />
   um espaço que representasse a classe dos professores na <br /> 
   sociedade. Com o objetivo de oferecer à classe do <br /> 
   magistério, a promoção do bem estar físico, moral e social, <br /> 
   através da recreação, encontros e práticas esportivas o CPG <br /> 
   se tornou a única agremiação social de educadores do Brasil <br /> 
   e maior clube classista da América do Sul. Embora sua <br /> 
   primeira edificação fosse erguida em 1971, no bairro <br /> 
   Ipanema, Zona Sul da Capital, as margens do rio Guaíba, o <br /> 
   CPG foi fundado 13 de agosto de 1966 pela professora <br /> 
   Thereza Noronha Carvalho, também sua primeira <br /> 
   presidente, que liderou o grupo sob o lema: “A união de <br /> 
   uma classe materializada em concreto”. <br />  <br />

   O Clube do Professor Gaúcho mantém atualmente três <br /> 
   sedes sociais no Estado do Rio Grande do Sul: em Porto <br /> 
   Alegre, em Santa Maria e no Litoral Norte, no Balneário <br /> 
   Pinhal. Consagrado espaço de sociabilidade que <br /> 
   proporciona agradável convívio entre professores de todas <br /> 
   as instituições de ensino fundamental, médio e superior, <br /> 
   públicas ou particulares, o clube conta hoje com cerca de 8 <br /> 
   mil associados titulares e aproximadamente 11 mil <br /> 
   beneficiários em todo Estado. 
   </p>
   

      <div className={styles.BlueGradient}>

      </div>

      <div className={styles.YellowGradient}>

      </div>

      <img id={styles.ImgHistory} src="/Assets/imageHistoria.svg" />

      <DivAdress AdressTitle="ENDEREÇO DA SEDE" /> 
        
        <p className={styles.AdressText}>
      
        Av Guaíba, 12060 – Ipanema <br />
        Porto Alegre/RS <br />
        CEP 91770 110

        </p>
     
        <div className={styles.Horarios}>

     <GlideBox title="HORÁRIOS DE FUNCIONAMENTO" />
     
        </div>

        <div className={styles.HoraText}>

        <b>Funcionamento da Sede</b>
        <br />Terça a domingo: 8h às 21h<br />
        <br />
        <b> Piscinas Externas na Temporada de Verão </b>
        <br /> 9h às 19h – Piscinas Externas (3ª a domingo em Novembro)
        <br /> 9h às 20h – Piscinas Externas (3ª a domingo a partir de Dezembro) <br />
        <br />

        Central de Atendimento <br />
        Segunda-feira: 14h às 20h <br />
        Terça a sábado: 8h30 às 19h50 <br />
        Domingos e feriados: 9h às 19h

        </div>

        <h1 id={styles.h1}>Rodapé</h1>
   </>
    
  )
}

export default SedePortoAlegre;
