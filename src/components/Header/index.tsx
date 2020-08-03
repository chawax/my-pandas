import React from 'react';
import { useTranslation } from 'react-i18next';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, UncontrolledDropdown } from 'reactstrap';

const languages = ['en', 'fr'];

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">{t('app.title')}</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Langue
          </DropdownToggle>
          <DropdownMenu right>
            {languages.map(language => (
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
