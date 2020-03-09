import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { changeLocale } from "containers/LanguageProvider/actions";
import messages from './messages';


const NavbarCom = ({
    onLocale = () => {}
}) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand href="#home"><FormattedMessage {...messages.header} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                   
                </Nav>
                <Nav>
                    <Nav.Link onClick={() => { onLocale('en'); }}><FormattedMessage {...messages.english} /> </Nav.Link>
                    <Nav.Link onClick={() => { onLocale('vi'); }}><FormattedMessage {...messages.vietnamese} /> </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );

NavbarCom.propTypes = {
  onLocale: PropTypes.func
}
}

export function mapDispatchToProps(dispatch) {
    return {
        onLocale: evt => dispatch(changeLocale(evt)),
    };
}

const withConnect = connect(
    null,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    memo,
)(NavbarCom);