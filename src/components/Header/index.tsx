import React from 'react';
import { useTranslation } from 'react-i18next';
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';

interface Props {
  language: string;
  onChangeLanguage(language: string): void;
}

const languages = ['en', 'fr'];

const Header = (props: Props) => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="top">
        <NavbarBrand href="/">{t('app.title')}</NavbarBrand>
        <Nav className="mr-auto" navbar>
          {languages.map((value, index) => (
            <>
              {index > 0 ? ' | ' : null}
              <NavItem
                key={value}
                onClick={() => {
                  props.onChangeLanguage(value);
                }}
              >
                {value.toUpperCase()}
              </NavItem>
            </>
          ))}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
