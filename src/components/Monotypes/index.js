import './styles.scss';
import DivHiddenUnderNavbar from 'src/components/DivHiddenUnderNavbar';
import GallerySlider from 'src/components/GallerySlider'
import { dataSlider } from './dataSlider'
import monotypeCreation from './monotypeCreation.jpg'

const Gravures = () => {
  console.log(dataSlider)

  return (   
    <main className="monotypes__container">
      <DivHiddenUnderNavbar />
      <div className="monotypes__mainPicture"></div>
      <div className="monotypes__main--content posts-list">
        <div className="monotypes__main--content--left ">
          <h1 className="monotypes__title">Monotype</h1>
          <p className="monotypes__presentation"> « "Pour réaliser les batailles
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
        <div className="monotypes__presentation--right ">
          <img className="monotypes__picture" src={monotypeCreation}/>
        </div>
      </div>
      <div> 
        <GallerySlider slides={dataSlider} /> 
      </div> 
    </main>
  );
};

export default Gravures;
