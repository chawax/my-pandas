import React from 'react';
import { ListGroup } from 'reactstrap';
import { Panda } from '../types/Pandas';
import PandaItem from './PandaItem';

interface Props {
  pandas: Panda[];
  onSelectPanda(key: string): void;
}

const PandasList: React.FC<Props> = (props: Props) => {
  const { pandas, onSelectPanda } = props;
  return (
    <ListGroup>
      {pandas.map((panda: Panda) => (
        <PandaItem
          key={panda.key}
          name={panda.name}
          interests={panda.interests}
          onPress={() => {
            onSelectPanda(panda.key);
          }}
        />
      ))}
    </ListGroup>
  );
};

export default PandasList;
