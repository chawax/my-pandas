import React from 'react';
import { ListGroup } from 'reactstrap';
import { Panda } from '../../types';
import PandaItem from '../PandaItem';

interface PandasListProps {
  pandas: Panda[];
  onSelectPanda(key: string): void;
}

const PandasList: React.FC<PandasListProps> = (props: PandasListProps) => {
  const { pandas, onSelectPanda } = props;
  return (
    <ListGroup>
      {pandas.map((panda: Panda) => (
        <PandaItem
          key={panda.key}
          name={panda.name}
          interests={panda.interests}
          onPress={() => {
            onSelectPanda(panda.key!);
          }}
        />
      ))}
    </ListGroup>
  );
};

export default PandasList;
