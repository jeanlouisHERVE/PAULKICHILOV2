import { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import findImgByKey from '../../Utils/img';
import { Link } from 'react-router-dom';

const AccordionSection = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    height: auto;
    background: white;
  `;

const Container = styled.div`
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
    padding-left: 2rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    margin: 0px;
    font-weight: 500;
  }

  h1 .title {
    font-style: italic;
    margin: 0;
  }

  .year {
    color: #1888FF;
    margin: 0;
    font-weight: 800;
  }

  span {
    margin-right: 1.5rem;
    color: white;
  }
  `;

const Dropdown = styled.div`
    background: white;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid black;
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

const Renseignement = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Button = styled.div`
  font-size: 18px;
  margin: 0px auto;
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
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding:10px;

    img {
      max-width: 300px;
      height: auto;
      box-shadow: 7px 7px 7px black;
      margin-bottom: 20px;
    }
  `;

const AccordionIllustration = ({books}) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: 'white', size: '25px' }}>
      <AccordionSection>
        <Container>
          {
            books.map((item, index) => (
              <>
                <Wrap onClick={() => toggle(index)} key={item.id}>
                  <h1><span className="year">{item.year}</span>&nbsp;-&nbsp;<span className="title">{item.title}</span> De {item.author}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <LeftSide>
                      <ResumeParagraph><strong>Résumé : </strong>  {item.resume}</ResumeParagraph>
                      <AgeParagraph><strong>Année : </strong>  {item.year}</AgeParagraph>
                      
                    </LeftSide>
                    <RightSide>
                      <img src={findImgByKey(item.picture)} alt={findImgByKey(item.picture)} />
                      <Renseignement>
                        <a href={item.shop} rel="noreferrer" target="_blank"><Button>Se procurer l'ouvrage</Button></a>
                      </Renseignement>
                    </RightSide>
                  </Dropdown>
                ) : null}
              </>
            ))
            }
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default AccordionIllustration;
