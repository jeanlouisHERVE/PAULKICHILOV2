import './styles.scss';
import courant from './courant.jpg'

const LegalMention = () => {
  
  var pictureStyle = {
    width: "100vw",
    height: "500px",
    position: "top",
    backgroundImage: "url(" + courant + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return(
    <main className="legalMention__container">
    <div className="legalMention__mainPicture" style={pictureStyle}></div>
    <div className="legalMention__main--content posts-list">
        <h1 className="legalMention__h1">Mentions Légales</h1>
        <h2>IDENTIFICATION DE L’EDITEUR</h2>
        <p>Le site Paul Kichilov (ci-après "le Site"), accessible à l’adresse www.paulkichilov.com est édité par Paul KICHILOV (ci-après "l'Editeur"), dont le domicile est situé 66 avenue Paul Doumer MONTESSON.</p>
        <p>L'Editeur est référencé comme Artiste  auprès de Maison des Artistes sous le numéro K050926. Il a obtenu ce titre professionnel en France.</p>
        <p>L’Editeur peut être contacté à l’adresse mail paul.kichilov@gmail.com ou au numéro 07.60.45.76.15.</p>
        <h2>HEBERGEUR DU SITE INTERNET</h2>
        <p>Le site  Paul Kichilov est hébergé par WEBSELF, EURL au capital de 21 200 euros, dont le siège social est situé 91 Boulevard de Saint-Quentin, 80090 Amiens, France.</p>
        <p>L’hébergeur est joignable par mail à l’adresse suivante : contact@webself.net.</p>
        <p>Il est également joignable au numéro suivant : +1 877-869-3273.</p>
        <h2>RESPECT DE LA PROPRIETE INTELLECTUELLE</h2>
        <p>Toutes les marques, photographies, textes, commentaires, illustrations, images animées ou non, séquences vidéo, sons, ainsi que toutes les applications informatiques qui pourraient être utilisées pour faire fonctionner le Site et plus généralement tous les éléments reproduits ou utilisés sur le Site sont protégés par les lois en vigueur au titre de la propriété intellectuelle.</p>
        <p>Ils sont la propriété pleine et entière de l'Editeur ou de ses partenaires, sauf mentions particulières. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, sans l'accord préalable et écrit de l'Editeur, sont strictement interdites. Le fait pour l'Editeur de ne pas engager de procédure dès la prise de connaissance de ces utilisations non autorisées ne vaut pas acceptation desdites utilisations et renonciation aux poursuites.</p>
        <p>Seule l'utilisation pour un usage privé dans un cercle de famille est autorisée et toute autre utilisation est constitutive de contrefaçon et/ou d'atteinte aux droits voisins, sanctionnées par Code de la propriété intellectuelle.</p>
        <p>La reprise de tout ou partie de ce contenu nécessite l'autorisation préalable de l'Editeur ou du titulaire des droits sur ce contenu.</p>
        <h2>LIENS HYPERTEXTES</h2>
        <p>Le Site peut contenir des liens hypertexte donnant accès à d'autres sites web édités et gérés par des tiers et non par l'Editeur. L'Editeur ne pourra être tenu responsable directement ou indirectement dans le cas où lesdits sites tiers ne respecteraient pas les dispositions légales.</p>
        <p>La création de liens hypertexte vers le Site ne peut être faite qu'avec l'autorisation écrite et préalable de l'Editeur.</p>
    </div>
  </main>
  )
};

export default LegalMention;
