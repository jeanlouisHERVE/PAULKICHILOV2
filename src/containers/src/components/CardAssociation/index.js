import './styles.scss';

// import imgAsso1 from 'src/assets/imgAsso1.png';

// == Composant
const CardAssociation = () => (
  <div className="card-association">
    {/* <img src={imgAsso1} alt="Img Association"
          className="card-association-img" style={{ width: '200px' }} /> */}
    <div
      className="image"
      style={{
        width: '50px',
        height: '50px',
        background: '#074666',
        marginLeft: '1em',
      }}
    />
    <h2>Association</h2>
  </div>
);

// == Export
export default CardAssociation;
