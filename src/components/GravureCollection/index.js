import './styles.scss';

const GravureCollection = ({ item }) => {
  const { name, price, imageUrl} = item;

  return(
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default GravureCollection;
