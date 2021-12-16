import './styles.scss';
import GravureCollection from '../GravureCollection';
// import { Link } from "react-router-dom";

const GravureCollectionPreview = ({title, items}) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {
        items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <GravureCollection key={item.id} item={item} />
          ))
      }
    </div>
  </div>
);

export default GravureCollectionPreview;
