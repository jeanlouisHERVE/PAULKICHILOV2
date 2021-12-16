import './styles.scss';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectCollection } from '../../redux/gravures/gravures.selectors';
import { dataPasternak } from '../../Utils/dataPasternak';
import plaque from '../../assets/img/plaque.jpg';
import Gallery from '../../components/Gallery';
import GravureCollection from '../../components/GravureCollection';

const Gravures = () => {
  const pictureStyle = {
    width: '100vw',
    height: '500px',
    position: 'top',
    backgroundImage: 'url(" + courant + ")',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
  };

  const params = useParams();
  console.log(params);
  const collection = useSelector(selectCollection(params.collectionId));
  const { items } = collection;
  const { title } = collection;

  return (
    <main className="gravures__container">
      <div className="gravures__mainPicture" style={pictureStyle} />
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
          <img className="gravures__picture" src={plaque} alt={plaque} />
        </div>
      </div>
      <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
          {items.map((item) => (
            <GravureCollection key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div>
        <Gallery pasternakGravures={dataPasternak} />
      </div>
    </main>
  );
};

const mapStateToProps = (state, ownProps) => ({
  gravures: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Gravures);
