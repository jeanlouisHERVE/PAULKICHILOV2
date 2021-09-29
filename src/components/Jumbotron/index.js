import './styles.scss';
import Background from './courant.jpg'
import { Jumbotron, Container } from 'reactstrap';

const JumbotronHome = () => {

  var sectionStyle = {
    width: "100vw",
    height: "500px",
    position: "top",
    backgroundImage: "url(" + Background + ")",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };


  return (
  <div className="jumbotron__main">
    <Jumbotron fluid className="jumbotron">
      <Container fluid  className="jumbotron__container" style={ sectionStyle } />
    </Jumbotron>
  </div>
  )
};

JumbotronHome.propTypes = {
};

export default JumbotronHome;
