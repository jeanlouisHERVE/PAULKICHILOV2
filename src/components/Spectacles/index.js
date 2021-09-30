import './styles.scss';
import DivHiddenUnderNavbar from 'src/components/DivHiddenUnderNavbar';
import SpectacleList from 'src/components/SpectacleList';
import plaque from './plaque.jpg'

const Spectacles = () => {
  const cssClass = 0;

  return (   
    <main className="spectacles__container">
      <DivHiddenUnderNavbar />
      <div className="spectacles__mainPicture"></div>
      <div className="spectacles__main--content posts-list">
        <div className="spectacles__main--content--left ">
          <h1 className="spectacles__title">Spectacles</h1>
          <p className="spectacles__presentation"> Paul Kichilov crée d’abord  
          le théâtre l’Ombrelle magique où les contes sont présentés 
          sous forme d’un grand livre qui s’ouvre devant le spectateur et dont les 
          illustrations prennent vie au fur et à mesure de l’histoire contée.
Après  L’ombrelle magique, Paul Kichilov crée Le Théâtre d’Ombres et Dessins Vivants : 
cette fois-ci, les dessins sont réalisés « en direct » devant le public et accompagnent 
le déroulement du conte en s’entrelaçant avec les marionnettes et les décors.
A l’aide de son pinceau et de ses peintures, Paul Kichilov nous emmène dans le 
monde merveilleux des contes populaires.
Les contes peuvent être racontés en français et en russe.
          </p>
        </div>
        <div className="spectacles__presentation--right ">
          <img className="spectacles__picture" src={plaque}/>
        </div>
      </div>
      <div className="ombrelle__main--content posts-list">
        <div className="ombrelle__main--content--left ">
          <h1 className="ombrelle__title">L'ombrelle Magique</h1>
          <p className="ombrelle__presentation">  Des décors qui changent 
          sans cesse dans une boite-présentoir portée accrochée aux épaules, 
          dans le dos une grande ombrelle tournant librement et dans laquelle,
           à l’aide d’aimants, sont dissimulées les marionnettes. Tel est 
           le Théâtre de l’Ombrelle Magique, un « théâtre dans une valise ».
          L’esprit de ce travail est de présenter un grand nombre de dessins,
           travaillés, aboutis, comme s’il s’agissait d’originaux pour un album
            jeunesse. C’est, en quelque sorte, un livre de grand format qui
             prend vie. La liberté de mouvements que donne cette structure
              légère permet de tourner, s’approcher du public ou esquisser
               un pas de danse en fonction des nécessités de l’interprétation du conte.
          Le Théâtre de l’Ombrelle Magique a été conçu pour un public 
          restreint, il est idéal pour faire vivre un conte dans une salle
           de classe ou une bibliothèque. Les enfants, après avoir vu et écouté
            le conte, peuvent être à leur tour invités à s’en inspirer : dessiner
             à leur façon des personnages ou des scènes du conte, écrire un petit
              texte qui le résume ou le prolonge…
          </p>
        </div>
        <div className="ombrelle__presentation--right ">
          <img className="ombrelle__picture" src={plaque}/>
        </div>
      </div>
      <SpectacleList />
      <SpectacleList />
</main>
  );
};

export default Spectacles;
