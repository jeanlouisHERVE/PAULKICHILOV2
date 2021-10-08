import FooterContact from '../components/FooterContact';

export function FooterContactContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link href="#" >Story</Footer.Link>
            <Footer.Link href="#" >Clients</Footer.Link>
            <Footer.Link href="#" >testimonials</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link href="#" >Marketing</Footer.Link>
            <Footer.Link href="#" >Consulting</Footer.Link>
            <Footer.Link href="#" >Development</Footer.Link>
            <Footer.Link href="#" >Design</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Constact Us</Footer.Title>
            <Footer.Link href="#" >Marketing</Footer.Link>
            <Footer.Link href="#" >Consulting</Footer.Link>
            <Footer.Link href="#" >Development</Footer.Link>
            <Footer.Link href="#" >Design</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="#" ><Icon className="fab fa-facebook" /> Facebook</Footer.Link>
            <Footer.Link href="#" >Instagram</Footer.Link>
            <Footer.Link href="#" >Youtube</Footer.Link>
            <Footer.Link href="#" >Linkedin</Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  )
}
