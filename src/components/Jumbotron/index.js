import Background from './courant.jpg';

const JumbotronHome = () => {
  const sectionStyle = {
    width: '100vw',
    height: '500px',
    position: 'top',
    backgroundImage: "url(" + Background + ")",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="jumbotron__main">
      <div className="jumbotron">
        <div className="jumbotron__container" style={sectionStyle} />
      </div>
    </div>
  );
};

JumbotronHome.propTypes = {
};

export default JumbotronHome;
