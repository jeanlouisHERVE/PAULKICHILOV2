import PropTypes from 'prop-types';
import './styles.scss';
import findImgByKey from '../../Utils/img';

const Gallery = ({ pasternakGravures }) => (
  <>
    <div className="gallery__container">
      {pasternakGravures.map((gravure, index) => (
        <div className="gallery__picture" key={gravure.item}>
          <img src={findImgByKey(gravure.picture)} alt="" style={{ width: '100%' }} />
        </div>
      ))}
    </div>
  </>
);

Gallery.propTypes = {
  pasternakGravures: PropTypes.array.isRequired,
};

export default Gallery;
