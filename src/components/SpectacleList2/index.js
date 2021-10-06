import { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { theaterData } from './theaterData';

const AccordionSection = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    position: relative;
    height: 65vh;
    background: white;
  `;

const Container = styled.div`
  position: absolute;
  top: 10%;
  width:100%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  `;

const Wrap = styled.div`
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  cursor:pointer;

  h1 {
    padding: 2rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    margin: 0px;
  }


  span {
    margin-right: 1.5rem;
    color: white;
  }
  `;

const Dropdown = styled.div`
    background: white;
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #00ffb9;
    border-top: 1px solid #00ffb9;

  `;

const ResumeParagraph = styled.p`
      font-size: 18px;
      padding-top: 30px;
      padding-left: 20px;
      text-align: justify;
      color:black;
      width:50%;
      margin: 0px;
  `;
const AgeParagraph = styled.p`
      font-size: 18px;
      padding: 10px 0px 10px 20px;
      text-align: left;
      margin: 0px;
  `;
const DurationParagraph = styled.p`
      font-size: 18px;
      padding: 10px 0px 10px 20px;
      text-align: left;
      margin: 0px;
  `;

const LeftSide = styled.div`
      width:'50%';
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

    img {
      width: 100%;
      height: auto;

    }
  `;

const RightSide = styled.div`
      width:'50%'

  `;

const SpectacleList = () => {
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection>
        <Container>
          {
            theaterData.map((item, index) => {
               return (
                <>
                  <Wrap onClick={()=>toggle(index)} key={item.id}>
                    <h1>{item.title}</h1>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <LeftSide>
                        <ResumeParagraph className="resume">{item.resume}</ResumeParagraph>
                        <AgeParagraph>Age : {item.age}</AgeParagraph>
                        <DurationParagraph>Durée : {item.duration} min</DurationParagraph>
                      </LeftSide>
                      <RightSide>
                        <img src={item.picture} alt="" />
                      </RightSide>
                    </Dropdown> 
                    ) : null },           
                </>
            })
          }
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default SpectacleList;
