import './styles.scss';
import exposition1 from './exposition1.jpg';

const Exhibitions = () => {
  const pictureStyle = {
    width: '100vw',
    height: '500px',
    position: 'top',
    backgroundImage: 'url(' +  exposition1 + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <main>
      <div className="gravures__mainPicture" style={pictureStyle} />
      <h1 className="posts-title">Expositions</h1>
    </main>
  );
};

export default Exhibitions;
