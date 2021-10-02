import { useState } from 'react'
import { ombrelleData } from './ombrelleData'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'
import babaYaga from './babaYaga.jpg'

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
    font-weight: 500;
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
      padding-top: 20px;
      padding-left: 20px;
      padding-right: 20px;
      text-align: justify;
      color:black;
      width:100%;
      margin: 0px;
  `;
  const AgeParagraph = styled.p`
      font-size: 18px;
      padding: 5px 0px 5px 20px;
      text-align: left;
      margin: 0px;
  `;
  const DurationParagraph = styled.p`
      font-size: 18px;
      padding: 5px 0px 5px 20px;
      text-align: left;
      margin: 0px;
  `;
  
  const LanguageParagraph = styled.p`
  font-size: 18px;
  padding: 5px 0px 20px 20px;
  text-align: left;
  margin: 0px;
  `;

  const LeftSide = styled.div`
      width:50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

   
  `;

  const RightSide = styled.div`
      width:50%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding:10px;

    img {
      width: auto;
      height: 100%;
    }

  `;

  const OmbrelleList = () => {

    const [clicked, setClicked] = useState(false);
    
    const toggle = index => {
      if (clicked === index ) {

        return setClicked(null)
      }
      setClicked(index)

    };

  return(
    <IconContext.Provider value={{ color: 'white', size: '25px'}}>
      <AccordionSection>
        <Container>
          {ombrelleData.map((item, index) => {
            return ( 
              <>
                <Wrap onClick={()=>toggle(index)} key={index}>
                  <h1>{item.title}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <LeftSide>
                      <ResumeParagraph><strong>Résumé : </strong>  {item.resume}</ResumeParagraph>
                      <AgeParagraph><strong>Age : </strong>  {item.age}</AgeParagraph>
                      <DurationParagraph><strong>Durée : </strong>  {item.duration} min</DurationParagraph>
                      <LanguageParagraph><strong>Langue(s) : </strong></LanguageParagraph>
                    </LeftSide>
                    <RightSide>
                      <img src={babaYaga} />
                    </RightSide>
                  </Dropdown> ) : null }               
              </>
            )
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  )
};

export default OmbrelleList;
