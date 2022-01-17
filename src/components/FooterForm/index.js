import './styles.scss';
import { FormGroup, Input, Row, Col, Button } from 'reactstrap';
import styled from 'styled-components'

const FormDiv = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
width: 20%;
position: relative;
right: 30px
`;

const LabelDiv = styled.div`
color: white;
font-family: 'Roboto Condensed', sans-serif;
`;

const Title = styled.div`
color: white;
font-family: 'Roboto Condensed', sans-serif;
display: flex;
justify-content: center;
font-size: x-large;
padding-bottom: 15px;
`;

const FooterForm = () => (
  <FormDiv>
    <Title>Demande de Renseignements, Devis</Title>
    <Row form>
      <Col>
        <FormGroup md={5}>
          <LabelDiv for="exampleCity">Nom</LabelDiv>
          <Input type="name" name="name" id="name"/>
        </FormGroup>
      </Col>
      <Col>
        <FormGroup md={5}>
          <LabelDiv for="exampleState">Prénom</LabelDiv>
          <Input type="firstname" name="firstname" id="firstname"/>
        </FormGroup>
      </Col>
    </Row>
    <FormGroup>
      <LabelDiv for="exampleAddress">Email</LabelDiv>
      <Input type="email" name="email" id="email" placeholder="Example@email.com"/>
    </FormGroup>
    <FormGroup>
      <LabelDiv for="exampleText">Votre message</LabelDiv>
      <Input type="textarea" name="text" id="exampleText" />
    </FormGroup>
    <Button className="mt-3" outline color="light" md={6}>Envoi</Button>
  </FormDiv>
);

export default FooterForm;
