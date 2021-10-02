import './styles.scss';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Row, Col, Button, } from 'reactstrap';

const FooterForm = (props) => {
  return (
    <Form>
    <h2>Demande de Renseignements</h2>
    <Row form>
      <Col>
        <FormGroup>
          <Label for="exampleEmail">Nom</Label>
          <Input type="name" name="name" id="name" placeholder="with a placeholder" />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label for="examplePassword">Prénom</Label>
          <Input type="firstname" name="firstname" id="firstname" placeholder="password placeholder" />
        </FormGroup>
      </Col>
    </Row>
    <FormGroup>
      <Label for="exampleAddress">Email</Label>
      <Input type="email" name="email" id="email" placeholder="aaaa@aa.aa"/>
    </FormGroup>
    <FormGroup row>
        <Label for="exampleText">Votre message</Label>
          <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
    <Button>Sign in</Button>
  </Form>
  );
}

export default FooterForm;
