import './styles.scss';
import DivHiddenUnderNavbar from 'src/components/DivHiddenUnderNavbar';
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
    <DivHiddenUnderNavbar />
    <div className="legalMention__mainPicture" style={pictureStyle}></div>
    <div className="legalMention__main--content posts-list">
        <h1 className="legalMention__h1">POLITIQUE DE CONFIDENTIALITÉ</h1>
        <p>La présente politique de confidentialité a pour vocation de vous aider à comprendre comment sont collectées, traitées et conservées vos données personnelles par Paul Kichilov.</p>
        <p>La liste ci-dessous reproduit les différentes sections de de cette politique de confidentialité, vous pouvez cliquer directement sur les titres ci-dessous afin d’accéder à une section spécifique de la présente politique de confidentialité.</p>
        <h2>1-Responsable de traitement/ Contact</h2>
        <p>La présente politique de confidentialité a pour vocation de vous aider à comprendre comment sont collectées, traitées et conservées vos données personnelles par Paul Kichilov (ci-après " Paul Kichilov ", "nous ", " notre " et " nos "), responsable du traitement au sens de la réglementation européenne en matière de protection des données à caractère personnel, société Paul Kichilov société SAS  au capital de 1 euros, inscrite au Registre du commerce et des sociétés de BOURG LA REINE sous le numéro 402330781, dont le siège social est situé au 5 AV DES VERGERS  , 92340 BOURG-LA-REINE .</p>
        <p>Paul Kichilov est joignable via les moyens de contact suivants :</p>
        <p>En nous contact via paul.kichilov@gmail.com</p>
        <p>En nous joignant au 07.60.45.76.15</p>
        <p>En nous adressant un courrier à 66 Avenue Paul Doumer, 78360 Montesson, France</p>
      
        <h2>2-Quand sont collectées vos données personnelles ?</h2>
        <p>Nous recevons et traitons un certain nombre d’informations, pouvant inclure des données à caractère personnel vous concernant lorsque vous accédez et utiliser notre site selon différents moyens :</p>
        <p>Lorsque vous nous fournissez directement vos données personnelles en remplissant un formulaire d’inscription ou de contact prévu à cet effet sur notre site</p>
        <p>Lorsque vous liez votre compte sur le site  à un compte ouvert sur un site ou réseau social tiers ou dans les limites toutefois permises par les paramètres de confidentialité que vous aurez définis sur ce site ou réseau social tiers.</p>
        <p>Via les fichiers journaux de nos serveurs et via nos outils et technologies de suivi de type " cookies " présents sur notre site, nous suivons votre activité et la façon dont vous utilisez notre site.</p>
        <h2>3-Traitements de données personnelles réalisés par Paul Kichilov</h2>
        <p>Nous collectons les données suivantes : "nom prénom", "mail", "adresse", "tel".
            Pourquoi collectons-nous vos données personnelles ?
            Quelles sont les catégories de données personnelles que nous collectons à cette fin ?
            Quelle est la base juridique nous autorisant à collecter vos données personnelles pour une telle finalité ?</p>
        <p>Nous collectons vos données personnelles afin de vous identifier lors de l’utilisation de notre site et afin de vous adresser des messages liés à la bonne administration de notre site ex : confirmation d’inscription, modification du site ou des conditions d’utilisation etc…</p>
        <h3>Données d’identification / Données de connexion</h3>
        <p>Ce traitement a pour base juridique l’exécution du contrat nous liant lors de votre acceptation de nos conditions générales au moment de la commande d'une marchandise.Nous collectons vos données personnelles afin de facturer et vous livrer votre commande.</p>
        <h3>Données d’identification</h3>
        <p>Ce traitement a pour base juridique l’exécution du contrat nous liant lors de votre acceptation de nos conditions générales au moment de la commande d'une marchandise</p>
        <h2>4-Destinataires des données personnelles</h2>
        <p>En notre qualité de responsable de traitement, nous serons les premiers destinataires de vos données personnelles. Vos données seront plus spécifiquement traitées par le personnel suivant au sein de Paul Kichilov :*** traitement de données CP***. Nous pouvons par ailleurs être amenés à partager vos données personnelles à des tiers dans les situations suivantes : Vos données personnelles pourront être communiquées le cas échéant aux autorités de police, sur réquisition judiciaire, ou à toute personne habilitée judiciairement à recevoir ces informations, sur ordonnance du juge.</p>
        <h2>5-Comment seront hébergées vos données personnelles ?</h2>
        <p>Nous veillons à sécuriser les données personnelles de manière adéquate et appropriée et avons pris les précautions utiles afin de préserver et faire préserver par nos sous-traitants hébergeurs la sécurité et la confidentialité des données et notamment empêcher qu’elles ne soient déformées, endommagées ou communiquées à des personnes non autorisées. Vos données sont hébergées chezWEBSELF, dont le siège sociale se trouve 91 Boulevard de Saint-Quentin, 80090 Amiens, France. L’ensemble des données personnelles collectées sont hébergées en Europe ou dans des pays reconnus par la Commission Européenne comme bénéficiant d’une protection adéquate des données à caractère personnel. </p>
        <h2>6-Durée de conservation du traitement de données personnelles</h2>
        <p>Toute donnée personnelle sera détruite immédiatement à compter de la suppression du compte de l'utilisateur. Vos données personnelles seront également détruites si vous ne vous êtes pas connecté à votre compte utilisateur pendant une période de plus six mois. Elles seront ensuite archivées sur des bases de données distinctes afin de répondre à nos obligations légales pour une durée ne pouvant excéder cinq ans à compter de leur archivage.</p>
        <h2>7-Exercice des droits légaux</h2>
        <p>Conformément à la réglementation européenne en matière de protections des données à caractère personnel, vous bénéficiez des droits suivants : Un droit d’accès vous permettant à tout moment de savoir si vos données personnelles sont ou ne sont pas traitées par nos services et lorsqu’elles le sont, d’avoir accès auxdites données personnelles et aux informations requises par la loi concernant les modalités de traitement de ces données,</p>
        <p>Un droit de rectification vous permettant, de demander à ce que soient corrigées dans les meilleurs délais toute inexactitude concernant les données personnelles vous concernant,</p>
        <p>Un droit à l’effacement, vous permettant de demander dans les meilleurs délais à ce que vos données personnelles soient effacées, sous réserve que cette demande d’effacement respecte les conditions requises par la loi applicable,</p>
        <p>Un droit à la limitation du traitement de vos données personnelles, sous réserve que cette demande de limitation respecte les conditions requises par la loi applicable,</p>
        <p>Un droit à la portabilité vous permettant de recevoir vos données personnelles dans un format structuré, couramment utilisé et lisible par machine, ou à demander que ces données personnelles soit transmises à un autre responsable de traitement, sous réserve que cette demande de portabilité respecte les conditions requises par la loi applicable,</p>
        <p>Un droit d’opposition au traitement de vos données personnelles pour des raisons tenant à votre situation particulière sous réserve que cette opposition respecte les conditions requises par la loi applicable,</p>
        <p>Le droit de retirer à tout moment le consentement spécifique donné à la collecte de vos données personnelles, notamment lorsque le traitement de vos données personnelles sert à des fins de prospection commerciale,</p>
        <p>Le droit de définir des directives relatives à la conservation, à l'effacement et à la communication de vos données à caractère personnel à compter de votre décès.</p>
        <p>Ces droits pourront être exercés en nous contactant directement à l’adresse email suivante : paul.kichilov@gmail.com . En ce qui concerne le retrait de votre consentement à des fins de prospection commerciale, un lien de désinscription sera également fourni dans toute sollicitation commerciale vous étant directement adressée.</p>
        <p>Les réclamations relatives à l’utilisation de vos données personnelles peuvent le cas échéant également être adressées à la Commission Nationale de l’Informatique et des Libertés, 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX</p>
    </div>
  </main>
  )
};

export default LegalMention;
