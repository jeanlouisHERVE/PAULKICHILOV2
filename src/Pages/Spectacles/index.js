import './styles.scss';
import AccordionSpectacle from '../../components/AccordionSpectacle';
import ombrelle1 from './ombrelle1.jpg';
import publicSpectacle from './publicSpectacle.jpg';
import paulJouant from './paulJouant.jpg';
import ombrelleData from '../../Utils/ombrelleData';
import theaterData from '../../Utils/theaterData';

const Spectacles = () => {
  const pictureStyle = {
    width: '100vw',
    height: '500px',
    position: 'top',
    backgroundImage: "url(" + publicSpectacle + ")",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <main className="spectacles__container">
      <div className="spectacles__mainPicture" style={pictureStyle} />
      <div className="spectacles__main--content posts-list">
        <h1 className="spectacles__title">Spectacles</h1>
        <p className="spectacles__presentation">
          Paul Kichilov crée d’abord
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
      <div className="ombrelle__main--content posts-list">
        <div className="ombrelle__upperPart">
          <div className="ombrelle__main--content--left ">
            <h1 className="ombrelle__title">L'ombrelle Magique</h1>
            <p className="ombrelle__presentation">
              Des décors qui changent sans cesse dans une boite-présentoir portée
              accrochée aux épaules,
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
            <img className="ombrelle__picture" src={ombrelle1} alt=""/>
          </div>
        </div>
        <div className="ombrelle__accordion">
          <AccordionSpectacle spectacle={ombrelleData} />
        </div>
      </div>
      <div className="theater__main--content posts-list">
        <div className="theater__upperPart">
          <div className="theater__main--content--left ">
            <h1 className="theater__title">Théâtre de dessin vivant</h1>
            <p className="theater__presentation">
              Comme dans une célèbre
              chanson de Vysotsky, les chevaux lancés au galop sur le rouleau
              du Théâtre de Dessin Vivant entraînent irrésistiblement la main
              de l’artiste dans le tourbillon du conte, ses héros à la poursuite
              et à l’accomplissement de leur destin, les spectateurs de surprise
              en surprise dans un univers pourtant si familier.  Dans un conte,
              il n’y a pas que des chevaux mais aussi des loups, des renards,
              des sorcières, des bateaux magiques, des châteaux enchantés…
              C’est tout cet univers qui fait la trame des contes du Théâtre
              de Dessin Vivant, tantôt en ombres chinoises, tantôt en
              marionnettes colorées, et surtout en dessins endiablés.
              Entrez dans la danse, Kotcheî l’immortel et la Baba Yaga
              y mènent la ronde initiatique des êtres de papier, êtres
              de l’esprit, qui, s’ils nous sont si proches c’est qu’en
              réalité, c’est en nous qu’ils dansent.
            </p>
          </div>
          <div className="theater__presentation--right ">
            <img className="theater__picture" src={paulJouant} alt="" />
          </div>
        </div>
        <div className="theater__accordion">
          <AccordionSpectacle spectacle={theaterData} />
        </div>
      </div>
    </main>
  );
};

export default Spectacles;
