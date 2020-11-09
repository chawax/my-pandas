import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const Home = () => {
  const { t } = useTranslation();
  return (
    <ListGroup>
      <ListGroupItem>
        <ListGroupItemHeading>
          <Link to="/hoc/pandas">{t('home.hoc.heading')}</Link>
        </ListGroupItemHeading>
        <ListGroupItemText>{t('home.hoc.text')}</ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>
          <Link to="/hooks/pandas">{t('home.hooks.heading')}</Link>
        </ListGroupItemHeading>
        <ListGroupItemText>{t('home.hooks.text')}</ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>
          <Link to="/rq">{t('home.rq.heading')}</Link>
        </ListGroupItemHeading>
        <ListGroupItemText>{t('home.rq.text')}</ListGroupItemText>
      </ListGroupItem>
    </ListGroup>
  );
};

export default Home;
