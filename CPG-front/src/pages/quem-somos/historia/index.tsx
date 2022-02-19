import { BannerMain } from '../../../components/BannerMain';
import styles from './styles.module.scss'
import { News } from '../../../components/News';
import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../../../services/api'


export default function Historia() {

  const [images, setImages] = useState([]);
  useEffect(() => {
    Promise.all([
      api.get("presidentes"),
    ]).then((response: any) => {

      setImages(response[0].data)
      console.log(response)
    });

  }, []);


  return (

    <div className={styles.container}>

      <BannerMain />
      <div className={styles.titleContent}>
        <h1>HISTÓRIA</h1>
      </div>
      <div className={styles.textContent}>

        <p>
          O Clube do Professor Gaúcho foi fundado em 18 de Agosto de 1966
          pela professora Thereza Noronha Carvalho, primeira Presidente,
          uma empreendedora que liderou o grupo visionário de educadores
          para erguer a Sede Social Matriz, em Porto Alegre, sob o lema:
          “A união de uma classe materializada em concreto”. O CPG é uma
          associação de e para professores e profissionais que possuem
          formação pedagógica ou titulação hábil para atuar em qualquer
          grau de ensino das Instituições Públicas e Privadas de Ensino
          Fundamental, Médio e Superior, das Redes Municipal, Estadual e
          federal do Estado do Rio Grande do Sul.

          Com prédio representativo da arquitetura modernista no Rio Grande
          do Sul, na década de 70 o CPG realizava grandes celebrações festivas
          como Bailes de Carnaval, Festas de Debutantes e o Baile do
          Magistério, com a presença de grandes nomes artísticos da época.
          Na década de 80, período em que atinge o número de 24 mil professores
          e professoras titulares associados, iniciativa também sua expansão
          para o interior do Rio Grande do Sul, com a inauguração de duas
          sedes, na Região Central e Litoral Norte do Estado.
        </p>
      </div>

      <News content={images} />

      <div className={styles.titleContent}>
        <h1>DNA DE EDUCADORES</h1>
      </div>
      <div className={styles.textContent}>
        <p>
          O CPG é a única agremiação de educadores do Brasil e maior clube
          classista da América do Sul que reúne, atualmente, mais de oito
          mil associados titulares e cerca de vinte cinco mil associados em
          todo o Rio Grande do Sul e possui Sede Matriz em Porto Alegre,
          Sede Campestre, em Santa Maria e Sede de Veraneio, no Balneário
          Pinhal.O CPG, como também é conhecido, existe para usufruto dos
          associados e seus familiares, como espaço de sociabilidade para
          o lazer, descanso, recreação, desporto e, sobretudo, ao agradável
          convívio amigável e familiar dos professores associados.
        </p>
      </div>


    </div>


  )
}