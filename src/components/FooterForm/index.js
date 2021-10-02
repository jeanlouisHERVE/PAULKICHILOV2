import './styles.scss';
import { Form, FormGroup, Label, Input, Row, Col, Button, } from 'reactstrap';
import styled from 'styled-components'

const LabelDiv = styled.div`
color: white;
`;

const FormDiv = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
width: 30%;
`;

const h2Div = styled.div`
color: white;
`;


const FooterForm = (props) => {
  return (
    <FormDiv>
    <h2>Demande de Renseignements</h2>
    <Row form >
        <Col md={5}>
          <FormGroup>
            <LabelDiv for="exampleCity">Nom</LabelDiv>
            <Input type="name" name="name" id="name"/>
          </FormGroup>
        </Col>
        <Col md={5}>
          <FormGroup>
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
    <Button className="mt-3" outline color="info" md={6} >Envoi</Button>
  </FormDiv>
  );
}

export default FooterForm;
