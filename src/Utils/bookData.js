const bookData = [
  {
    id: '1',
    title: 'Ivan Vassilievitch',
    author: 'Mikhaïl Boulgakov',
    year: '2021',
    picture: './boulgakov.jpg',
    resume: 'En 1935, l’année de création d’Ivan Vassilievitch, Staline étendait la peine capitale aux enfants \
    de douze ans après avoir interdit tout recours contre les sentences de mort prononcées par les juridictions \
    spéciales du NKVD – la police d’État. C’est avec ce repère historique en tête qu’il faut lire Ivan Vassilievitch. \
    Alors on goûte mieux l’insolence formidable et l’humour dévastateur de cette pièce en trois actes, pleine de\
    rebondissements, de quiproquo et de coups de théâtre. Hélas, catalogué de petit-bourgeois réactionnaire,\
    Boulgakov ne verra jamais monter son oeuvre théâtrale, ni publier ses romans. La censure savait ce qu’elle\
    faisait : nul doute que cette pièce aurait connu l’énorme succès que ses répétitions présageaient. \
    Dans un décor familier à tous les soviétiques – un appartement communautaire – Timoféïev, un savant \
    fou a mis au point une machine à faire tomber les cloisons du temps et de l’espace. Son déclenchement \
    met en scène Ivan le Terrible en même temps que le terrible Ivan, syndic de l’immeuble qui, s’il porte \
    le même nom que le tsar, lui ressemble aussi comme un jumeau. Sur le principe des poupées russes, ce \
    vaudeville truculent et sarcastique cache une satire du pouvoir, qui dévoile à son tour celle de la \
    société moscovite, puis de l’intelligentsia de l’époque.\
    Le génie satirique de Boulgakov est tel, que la machine de Timofeïev se met en marche pour chaque lecteur, \
    quels que soient le monde, l’époque, et la société qu’il habite. Il ne peut plus alors que pleurer… \
    de rire. Christiane Rancé',
    shop: 'https://editions-corlevour.com/produit/ivan-vassilievitch/',
  },
  {
    id: '2',
    title: 'poèmes de Iouri Jivago',
    author: 'Boris Pasternak',
    year: '2020',
    picture: './jivago.jpg',
    resume: 'Connu dans le monde entier comme l\'auteur du Docteur Jivago, Boris Pasternak (1890-1960), \
    prix Nobel de littérature en 1958, est d\'abord un des grands poètes du 20e siècle. Son roman s\'achève \
    par un cycle poétique que le poète romancier attribue à son personnage et qu\'il considérait lui-même \
    comme la clef de sa vision de la création littéraire. \
    La maison d\'édition YMCA-Press propose une édition bilingue de ce cycle avec une nouvelle traduction de \
    Hélène Péras (1924 -2018). Médecin psychiatre et psychanalyste de profession, Hélène Péras était aussi \
    poète. Son œuvre s’est élaborée au fil d’un dialogue fertile et suivi avec Yves Bonnefoy, Claude Vigée \
    et Philippe Jaccottet. Polyglotte, ses rencontres avec de grandes figures de l’émigration russe l’ont \
    très tôt déterminée à embrasser la culture russe et sa tradition. \
    Le livre est illustré par les gravures de Paul Kichilov, peintre graveur parisien d\’origine russe. La \
    poésie russe est la première source de son inspiration. Il transcrit dans ses gravures le clair-obscur \
    des tourments de l’âme et la quête de vérité par les chemins du conte et de l\'imaginaire. \
    Préface d’Hélène Henry.',
    shop: 'https://www.editeurs-reunis.fr/product-page/po%C3%A8mes-de-iouri-jivago-boris-pasternak',
  },
  {
    id: '3',
    title: 'L\'Alexiade ',
    author: 'Anne Comnène',
    year: '2019',
    picture: './alexiade.jpg',
    resume: ' Fille aînée de l\'empereur Alexis Ier (qui régna de 1081 à 1118), Anne Comnène, née en 1083, \
    épousa le césar Nicéphore Bryennios et brigua en vain la couronne impériale. L\'échec de ses ambitions \
    politiques lui valut une retraite forcée qu\'elle mit à profit pour reprendre un projet laissé inabouti \
    par la mort de son époux. À la demande de sa belle-mère, ce dernier avait commencé à écrire l\'histoire \
    du règne d\'Alexis Ier. Sa femme se servit de ce travail, des archives impériales auxquelles elle avait \
    eu accès, des témoignages des membres et des proches de sa famille ainsi que de ses propres souvenirs. \
    Le résultat fut un ouvrage monumental en quinze livres, L\'Alexiade, écrit sous le règne de Manuel \
    Ier (1143-1180). La familière des grands auteurs grecs qu\'était la princesse impériale eut soin \
    d\'employer une langue classique et recherchée, voire artificielle.\
    L\'objet du livre était de raconter les hauts faits du père d\'Anne Comnène. Malgré des erreurs d\'ordre \
    chronologique, l\'ouvrage constitue sur ce règne, qui marqua un renouveau de la puissance byzantine, \
    une source historique de premier ordre, en raison des qualités et du rang de son auteur. Anne Comnène \
    livre notamment de précieux renseignements sur la psychologie d\'Alexis Ier et de son entourage. \
    Elle montre de manière suggestive le fossé séparant les Byzantins des croisés, qui arrivèrent dans\
    l\'empire à partir de 1096. Pour Anne Comnène, l\'idée d\'une croisade déclenchée par le pape et l\'Église\
    était incompréhensible, car la guerre était le fait du seul empereur. L\'Alexiade dépeint ainsi \
    les Latins comme des êtres courageux, mais incultes et orgueilleux, et se montre très critique \
    à l\'égard des papes.',
    shop: 'https://www.lesbelleslettres.com/livre/4085-alexiade',
  },
  {
    id: '4',
    title: 'Bardadamon ou la révélation de la vraie naissance du cubisme',
    author: 'Paul KICHILOV',
    year: '2019',
    picture: './bardadamon.jpg',
    resume: '"L\'histoire cachée d\'un meurtre primordial et de l\'usurpation de la gloire.\
    Mais le meutre parfait n\'existe pas et l\'inconscient finit toujours pas se trahir. Freud\
    confirme Blaise Cendrars : " On touche à la sorcellerie, et je suis sûr qu\'examiné au\
    point de vue occulte, le cubisme livrera d\'effrayants, de terribles secrets. Certaines\
    toiles cubistes font penser à certaines opérations de magie noire tant elles dégagent\
    de charme imprévu, troublant, malsain : elles envouutent littéralement. Ce sont des\
    miroirs magiques, des tables de sorcellerie."',
    shop: '',
  },
  {
    id: '5',
    title: 'La vie de Tourgueniev',
    author: 'Boris ZAÏTSEV',
    year: '2018',
    picture: './tourgueniev.jpg',
    resume: 'La vie de Tourgueniev (YMCA-Press, 1932) est une biographie romancée, proposée ici pour la\
    première fois au public français. Le volume comprend également les essais de Zaïtsev sur Tourgueniev\
    publiés à différents moments de sa vie, en Russie ou en exil, en russe ou en français, ainsi que des\
    premiers échos critiques parus dans la presse des émigrés.',
    shop: 'https://www.editeurs-reunis.fr/',
  },
  {
    id: '6',
    title: 'Le songe de Makar',
    author: ['Paul KICHILOV', 'Vladimir KOROLENKO'],
    year: '2002',
    picture: './makar.jpg',
    resume: '« Makar », signifie dans la tradition russe « celui sur qui tombent toutes les tuiles »...\
    Ainsi, dès le titre, s\'annonce la forme humoristique du récit. Lorsque, au jour du Jugement,\
    on récapitule la somme de misères, d\'injustices, de déboires vécus par Makar, même le juge \
    suprême, le Grand Toïon, ne peut retenir ses larmes... Située dans le cadre de la taïga glacée\
    de Sibérie, l\'histoire de Makar, truculente, ironique, émouvante, est l\'occasion pour son auteur,\
    Vladimir Korolenko, de dénoncer les iniquités accablant les paysans russes au début du XXe siècle.\
    Il remplit ainsi la fonction critique de l\'écrivain dans la société de son temps. Les superbes\
    et subtiles gravures de Paul Kichilov permettent de pénétrer plus avant dans un contexte\
    culturel typiquement russe.',
    shop: 'https://www.editionsalternatives.com/site.php?type=P&id=1687',
  },

];

export default bookData;
