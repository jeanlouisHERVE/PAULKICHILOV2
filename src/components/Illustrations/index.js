import './styles.scss';
import DivHiddenUnderNavbar from 'src/components/DivHiddenUnderNavbar';
import illustrationHeader from './illustrationHeader.jpg'

const Illustrations = () => {

  var pictureStyle = {
    width: "100vw",
    height: "500px",
    position: "top",
    backgroundImage: "url(" + illustrationHeader + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (   
    <main className="illustrations__container">
      <DivHiddenUnderNavbar />
      <div className="illustrations__mainPicture" style={pictureStyle}></div>
      <div className="illustrations__main--content posts-list">
        <div className="illustrations__main--content--left ">
          <h1 className="illustrations__title">Illustrations</h1>
          <p className="illustrations__presentation"> "Pour réaliser les batailles
           j’ai presque toujours recours à la technique du monotype. Il s’agit
            de peindre à la surface du métal avec l’encre de gravure légèrement
             diluée et non pas de graver la plaque. En se servant de brosses,
              de pinceaux, de chiffons, de bouts de bois, on doit travailler
               très vite avant que l’encre ne sèche. Cette vitesse dans le travail
                fait écho à l’élan des chevaux et la fluidité de l’encre permet
                 de saisir leur mouvement d’esquive avant le choc. A peine les
                  masses de noir et de blanc équilibrées, la plaque, couverte
                   d’un papier blanc imbibé d’eau, passe sous le rouleau de la presse."
          </p>
        </div>
        <div className="illustrations__presentation--right ">
          <img className="illustrations__picture"/>
        </div>
      </div>
      <div> 
        <p>Galerie</p>
      </div> 
    </main>
  );
};

export default Illustrations;

