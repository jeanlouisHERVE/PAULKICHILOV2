import './styles.scss';
import { dataPasternak }  from './dataPasternak'
import DivHiddenUnderNavbar from 'src/components/DivHiddenUnderNavbar';
import plaque from './plaque.jpg'
import courant from './courant.jpg'
import Gallery from 'src/components/Gallery'
import Août from './Août.jpg'
import Bénédiction from './Bénédiction.jpg'
import Conte from './Conte.jpg'
import CroiseeDesChemins from './CroiseeDesChemins.jpg'
import DansLOmbre from './DansLOmbre.jpg'
import Destin from './Destin.jpg'
import Diaphane from './Diaphane.jpg'
import EtoileDeLaNativite from './EtoileDeLaNativite.jpg'
import Gethsemani from './Gethsemani.jpg'
import Hamlet from './Hamlet.jpg'
import Increee from './Increee.jpg'
import Ivresse from './Ivresse.jpg'
import LeDegel from './LeDegel.jpg'
import LumiereIncreee from './LumiereIncreee.jpg'
import Magdala from './Magdala.jpg'
import MarieDeMagdala from './MarieDeMagdala.jpg'
import NuitDiaphane from './NuitDiaphane.jpg'
import Paul from './Paul.jpg'
import SemaineSainte from './SemaineSainte.jpg'
import Séparation from './Séparation.jpg'
import Silence from './Silence.jpg'
import VoieLactee from './VoieLactee.jpg'


const Gravures = () => {

  var pictureStyle = {
    width: "100vw",
    height: "500px",
    position: "top",
    backgroundImage: "url(" + courant + ")",
    backgroundSize: "cover",
    backgroundPosition: "top",
  };


  return (   
    <main className="gravures__container">
      <DivHiddenUnderNavbar />
      <div className="gravures__mainPicture" style={pictureStyle} ></div>
      <div className="gravures__main--content posts-list">
        <div className="gravures__main--content--left ">
          <h1 className="gravures__title">Gravures</h1>
          <p className="gravures__presentation"> « La gravure peut être considérée, 
          de part la variété et la richesse des techniques auxquelles elle fait 
          appel comme la discipline reine des arts graphiques. Burin, pointe sèche,
          eau-forte, aquatinte permettent tantôt de jouer des sillons gravés à la 
          pointe, tantôt des arabesques et aplats du pinceau. C’est un art du multiple
            car les gravures sont en générale imprimées en tirage limité. La plaque gravée,
            la matrice, tout en étant unique est originale à double titre : les lignes creusées,
              les surfaces grainées, les reliefs de quelques fractions de centimètre, 
              sont dus à la main de l’artiste et reflètent toutes les caractéristiques
              de sa personnalité et, en même temps son geste est immémorial et vient, 
              littéralement, de la nuit des temps. L’atelier de gravure est une grotte 
              mais aussi un cabinet d’alchimiste dans lequel les plaques de cuivre ou de 
              zinc sont plongées dans des bains d’acide pour y être métamorphosées. 
              Après impression, l’image spiritualisée sur le papier est prête à sortir 
              en pleine lumière. La plaque, la matrice, son ombre matérielle reste 
              dans l’atelier, ne quitte pas la grotte… »
          </p>
        </div>
        <div className="gravures__presentation--right ">
          <img className="gravures__picture" src={plaque}/>
        </div>
      </div>
      <div> 
        <Gallery pasternakGravures = {dataPasternak} />
      </div> 
    </main>
  );
};

export default Gravures;
