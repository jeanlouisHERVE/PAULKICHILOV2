import './styles.scss';
import accueil from './accueil.jpg';
import Jumbotron from '../../components/Jumbotron'
import FooterContactContainer from '../../components/FooterContact/FooterContact';

const Home = () => (
    <main className="home__container">
        <Jumbotron />
        <div className="home__main--content posts-list col-12 d-flex flex-row">
          <div className="home__main--content--left">
            <h1 className="home__title">Paul KICHILOV</h1>
            <p className="home__presentation"> Né en Russie en 1966 d’un père russe et d’une mère française, 
              Paul KICHILOV arrive en France en 1973.
              Après des études de mathématiques il embrasse la voie artistique.
              Diplômé de l’Ecole Nationale Supérieure des Arts Décoratifs de Paris en gravure en 1991, 
              il obtient le premier Prix Européen de gravure en Italie en 1991 et 1996.
              Il réalise de nombreuses expositions personnelles à Paris mais aussi Moscou et Athènes et
              de nombreuses
              participations à des expositions collectives (France, Japon, Danemark…).
              De 1995 à 1998, cours réguliers de danse contemporaine avec Karin Waehner à la Schola
              Cantorum.
              Cursus complet de sculpture à l’Ecole des Beaux Arts d’Athènes
              de 2002 à 2010. Création du Théâtre du Dessin Vivant, bilingue russe et français en 2012.
              Le dessin sous toutes ses formes, exprimé en particulier par la
              gravure aussi bien en noir et blanc ou en couleurs mais aussi le monotype est au cœur
              de son travail. La série des «Batailles», batailles intérieures,
              peut être considérée comme l’une de ses grandes lignes de force.
            </p>
          </div>
          <div className="home__presentation--right">
            <img className="home__picture" src={accueil} alt="" />
          </div>
        </div>
        <FooterContactContainer/>
    </main>
)  


export default Home;
