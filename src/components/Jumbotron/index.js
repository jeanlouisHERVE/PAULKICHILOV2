import './styles.scss';
import PropTypes from 'prop-types';
import { Jumbotron, Container } from 'reactstrap';

const JumbotronHome = () => (
  <div className="jumbotron__main">
    <Jumbotron fluid className="jumbotron">
      <Container fluid className="jumbotron__container" />
    </Jumbotron>
  </div>
);

JumbotronHome.propTypes = {
};

export default JumbotronHome;
