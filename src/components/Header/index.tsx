import React from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, UncontrolledDropdown } from 'reactstrap';
import styled from 'styled-components';

const languages = ['en', 'fr'];

interface TitleProps {
  primary?: boolean;
}

const Title = styled.h1<TitleProps>`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => (props.primary ? 'blue' : 'red')};
`;

const Header = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">
        <Title primary={language === 'fr'}>{t('app.title')}</Title>
      </NavbarBrand>
      <Nav className="mr-auto" navbar>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Langue
          </DropdownToggle>
          <DropdownMenu right>
            {languages.map((language) => (
              <DropdownItem
                key={language}
                onClick={() => {
                  i18n.changeLanguage(language);
                }}
              >
                {language.toUpperCase()}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Navbar>
  );
};

export default Header;
