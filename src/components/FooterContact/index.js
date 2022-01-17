import PropTypes from 'prop-types';

import {
  Container,
  Wrapper,
  Row,
  Column,
  Link,
  Title,
} from './Styles/FooterElements';

export default function FooterContact({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

FooterContact.Wrapper = function FooterWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

FooterContact.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

FooterContact.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

FooterContact.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

FooterContact.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

FooterContact.propTypes = {
  children: PropTypes.string.isRequired,
  restProps: PropTypes.string.isRequired,
};