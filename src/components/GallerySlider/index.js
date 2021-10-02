import './styles.scss';
import {useState} from 'react';
import styled from 'styled-components'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const GallerySlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent (current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent (current === 0 ? length - 1 : current - 1)
  }

  const SlidePicture = styled.img`
    width: 950px;
    height: auto;
    border-radius: 10px;
    position: relative;
  `;

  const TitleContainer = styled.p`
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0px;
    margin-bottom: 0px;
    border-bottom-right-radius: 10px; 
    border-bottom-left-radius: 10px; 
    background-color: red;
    vertical-align: middle;
    text-align: center;
  `;

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}  />
      {slides.map((slide, index) => {
        return (
          <div className={index === current ? 'slide__active' : 'slide'} key={index}>
            {index === current && (
              <>
              <SlidePicture src={slide.image} className="slider__image" alt='' ></SlidePicture>
              <TitleContainer>{slide.title}</TitleContainer>
              </>
            )} 
            
          </div>
          )
      })}
    </section>
  );
};

export default GallerySlider;
