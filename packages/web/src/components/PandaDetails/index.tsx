import React from 'react';
import { useTranslation } from 'react-i18next';
import { Badge, Button, Jumbotron } from 'reactstrap';
import { Panda } from '@pandas/core';

interface Props {
  panda: Panda;
  onClose(): void;
}

const PandaDetails = (props: Props) => {
  const { t } = useTranslation();

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
          {t('common.close')}
        </Button>
      </div>
    </Jumbotron>
  );
};

export default PandaDetails;
