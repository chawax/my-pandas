import React from 'react';
import { useTranslation } from 'react-i18next';
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';

const languages = ['en', 'fr'];

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">{t('app.title')}</NavbarBrand>
      <Nav className="mr-auto" navbar>
        {languages.map((language, index) => (
          <>
            {index > 0 ? ' | ' : null}
            <NavItem
              key={language}
              onClick={() => {
                i18n.changeLanguage(language);
              }}
            >
              {language.toUpperCase()}
            </NavItem>
          </>
        ))}
      </Nav>
    </Navbar>
  );
};

export default Header;
