import './styles.scss';
import ButtonFormLogin from '../../components/ButtonFormLogin';

// == Composant
const Home = () => (
  <div className="home">
    <div className="part-inscription">
      <h1 className="part-inscription-title"> Stadium est la solution simple, pratique et gratuite au service de la vie associative. </h1>
      <p className=""> Rejoignez un réseau d’associations sportives, présentes partout en France.
        Inscrivez-vous pour bénéficiez d’un service de qualité et optimisé
        pour vous faciliter le quotidien.
      </p>
    </div>
    <div className="part-connexion">
      <ButtonFormLogin />
      <HomePicture />
    </div>

    <div>
      <div className=""> </div>
      <div>
       <DashboardPicture />
      </div>
      <div>
        <p> </p>
      </div>
    </div>
  </div>
);

// == Export
export default Home;
