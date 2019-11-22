import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <ListGroup>
      <ListGroupItem>
        <ListGroupItemHeading>
          <Link to="/hoc/pandas">Version avec composants HOC</Link>
        </ListGroupItemHeading>
        <ListGroupItemText>
          Cette version utilise les composants HOC connect, withRouter, reduxForm, etc...
        </ListGroupItemText>
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>
          <Link to="/hooks/pandas">Version avec hooks</Link>
        </ListGroupItemHeading>
        <ListGroupItemText>
          Cette version utilise les hooks pour se connecter à Redux, à React Router DOM, etc....
        </ListGroupItemText>
      </ListGroupItem>
    </ListGroup>
  );
};

export default Home;
