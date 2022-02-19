import React, {useState} from 'react';
import { BannerMain } from "../../../components/BannerMain";
import BoxCenter from "../../../components/BoxCenter";
import styles from "./styles.module.scss"

import FirstPopup from "../../../components/EstatutoPopups/FirstPopup";
import GlideBox from '../../../components/GlideBox';


function Estatuto() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (

  <>
  
  <BannerMain/>
  <BoxCenter name="Estatuto" />

    <GlideBox title=" ESTATUTO E REGULAMENTOS"/>

    <p className={styles.TextEstatuto} >
      O Estatuto e Regulamentos do Clube do Professores Gaúcho possibilitam uma disciplina nas atividades e 
    <br />rotina do nosso Clube. As versões on-line de todos estes, estão disponíveis em nosso site. É importante
    <br /> lembrar, que é dever de todo associado cumprir com todos os regimentos dispostos nos Regulamentos e
    <br /> Estatuto do CPG.
    </p>


  <button className={styles.LinkEstat} onClick={() => setIsModalVisible(true)}> Estatuto do Clube do Professor Gaúcho </button>

    {isModalVisible ?

        <FirstPopup onClose = {() => setIsModalVisible (false)}>

            <h2>oioi</h2>

        </FirstPopup> : null}


     <button className={styles.LinkRegul} onClick={() => setIsModalVisible(true)}> Regulamento Interno </button>

        {isModalVisible ?

        <FirstPopup onClose = {() => setIsModalVisible (false)}>

          <p> consectetur adipiscing elit. Pellentesque vel sapien nec mi sagittis elementum at sit amet quam. Cras arcu libero, ullamcorper vitae vehicula vitae, efficitur sed ipsum. Sed nec ligula faucibus, tristique justo et, placerat nulla. Proin commodo, magna sit amet fringilla sollicitudin, risus sem lobortis lorem, id aliquet mi massa non ex. Sed aliquam viverra urna eu pulvinar. Pellentesque blandit fermentum posuere. Duis quis neque in augue tincidunt commodo. Sed non consectetur lorem, ut porttitor velit. Morbi sit amet erat sit amet risus gravida elementum. Aenean elementum nibh est, ut rutrum tortor gravida vel. Ut et porta enim. Nullam luctus nisl pretium turpis rutrum aliquet. Nulla tincidunt fringilla orci id auctor. Donec tempor pulvinar neque ac molestie. Etiam sit amet arcu consequat, ultricies sem id, mollis est.

        Curabitur facilisis tempor gravida. Maecenas quis est lorem. Proin sit amet leo eu justo porttitor pharetra sit amet quis diam. Curabitur eleifend elementum dui, id bibendum nibh consequat sed. Vestibulum vel efficitur sem. In hac habitasse platea dictumst. Nunc consequat fringilla justo, gravida egestas ligula semper et. Pellentesque facilisis at erat ut imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ut ante id nisl fermentum varius vel ac sem. Maecenas pharetra dui eget lacus scelerisque finibus. Integer condimentum posuere posuere. Cras fringilla sollicitudin arcu ut eleifend. Praesent egestas urna sollicitudin mauris condimentum, sed feugiat leo pharetra. Sed semper porttitor mattis. Nunc ultrices aliquam dapibus.

        Donec lacinia consequat magna, eget consequat urna consectetur non. Nunc sem tellus, vulputate at accumsan non, venenatis at felis. Sed ac orci eget urna sagittis sagittis in sit amet ex. Ut gravida, nisi placerat mollis molestie, turpis velit efficitur lectus, sed suscipit neque sem a ipsum. Nullam ultrices aliquet ligula, ac tempus odio malesuada ultricies. Ut sodales lorem sit amet iaculis convallis. Donec vel porttitor ipsum, a mollis mauris. Ut congue urna nunc, et pulvinar justo consectetur id. In nec sem eget justo pellentesque vulputate. In volutpat arcu eu quam suscipit semper. Phasellus lobortis augue vel libero egestas sagittis. Aenean malesuada orci nisl, non pretium enim pulvinar vel. Pellentesque augue risus, bibendum ac dolor in, vestibulum congue arcu. Curabitur tincidunt quam rhoncus, rhoncus odio ac, malesuada dui.</p>

          </FirstPopup> : null}

   <button className={styles.LinkChurras} onClick={() => setIsModalVisible(true)}> Regulamento das Churrasqueiras na Baixa Temporada </button>

  {isModalVisible ?

 <FirstPopup onClose = {() => setIsModalVisible (false)}>

  <p>Heu,</p>
  
  </FirstPopup> : null}



 
    
    </>
  )

 
}



export default Estatuto;