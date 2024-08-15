import React from 'react';
import { Link } from './style';
import { Text } from '../Text';

export interface IPropsLinkItem {
  text: string;
  active: boolean;
  onClick?: () => void;
}
const LinkItem: React.FC<IPropsLinkItem> = ({ text, active, onClick }) => {
  return (
    <Link $active={active} onClick={onClick}>
      <Text text={text} />
    </Link>
  );
};

export default LinkItem;
