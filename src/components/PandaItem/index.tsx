import React from 'react';
import { Badge, ListGroupItem, ListGroupItemHeading } from 'reactstrap';

export interface Props {
  name: string;
  interests?: string[];
  onPress(): void;
}

const PandaItem: React.FC<Props> = (props: Props) => (
  <ListGroupItem onClick={props.onPress}>
    <ListGroupItemHeading>{props.name}</ListGroupItemHeading>
    {props.interests &&
      props.interests.map((item: string) => (
        <Badge key={item} pill color="danger" style={{ marginRight: 5 }}>
          {item}
        </Badge>
      ))}
  </ListGroupItem>
);

export default PandaItem;
