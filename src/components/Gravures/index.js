import './styles.scss';
import DivHiddenUnderNavbar from 'src/components/DivHiddenUnderNavbar';
import plaque from './plaque.jpg'

const Gravures = () => {
  const cssClass = 0;

  return (   
    <main className="gravures__container">
      <DivHiddenUnderNavbar />
      <div className="gravures__mainPicture"></div>
      <div className="gravures__main--content posts-list">
        <div className="gravures__main--content--left">
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
        <div className="gravures__presentation--right">
          <img className="gravures__picture" src={plaque}/>
        </div>
      </div>
</main>
  );
};

export default Gravures;
