import './styles.scss';
import PropTypes from 'prop-types';
import GravureCollection from '../GravureCollection';

const GravureCollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {
        items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <GravureCollection key={item.id} item={item} />
          ))
      }
    </div>
  </div>
);

GravureCollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default GravureCollectionPreview;
