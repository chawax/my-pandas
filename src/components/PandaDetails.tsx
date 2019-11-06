import PropTypes from 'prop-types';
import React from 'react';
import { Badge, Button, Jumbotron } from 'reactstrap';

const PandaDetails = props => {
  return (
    <Jumbotron>
      <h1>{props.panda.name}</h1>
      {props.panda.interests &&
        props.panda.interests.map((item, index) => (
          <Badge key={index} pill color="danger" style={{ marginRight: 5 }}>
            {item}
          </Badge>
        ))}
      <div style={{ marginTop: 10 }}>
        <img src={props.panda.image} alt={props.panda.name} />
      </div>
      <div style={{ marginTop: 10 }}>
        <Button color="primary" onClick={props.onClose}>
          Fermer
        </Button>
      </div>
    </Jumbotron>
  );
};

PandaDetails.propTypes = {
  panda: PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    interests: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PandaDetails;
