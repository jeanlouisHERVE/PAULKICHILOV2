import './styles.scss';
import illustrationHeader from './illustrationHeader.jpg';
import Accordion from '../../components/AccordionIllustration';
import EmptyDiv from '../../components/EmptyDiv'
import books from '../../Utils/bookData';

const Illustrations = () => {
  const pictureStyle = {
    width: '100vw',
    height: '500px',
    position: 'top',
    backgroundImage: "url(" + illustrationHeader + ")",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <main className="illustrations__container">
      <div className="illustrations__mainPicture" style={pictureStyle} />
      <div className="illustrations__main--content posts-list">
        <div className="illustrations__main--content--left ">
          <h1 className="illustrations__title">Illustrations</h1>
          <p className="illustrations__presentation">
            "Pour réaliser les batailles
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
          <img className="illustrations__picture" alt="" />
        </div>
      </div>
      <div className="illustrations__accordion">
        <Accordion books={books} />
      </div>
      <EmptyDiv />
    </main>
  );
};

export default Illustrations;

