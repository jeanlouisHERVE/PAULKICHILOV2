import './styles.scss';

const Gallery = ({pasternakGravures}) => {

  console.log(pasternakGravures)

  return (
    <div className="gallery__container">
      {pasternakGravures.map((gravure, index) => {
        return(
          <div className="gallery__picture" key={index}>
            <img src={gravure.picture} style={{width: '100%'}} />
          </div>
        )
      })}
    </div>   
  );
};

export default Gallery;
