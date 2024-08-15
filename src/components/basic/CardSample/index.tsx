import React from 'react';
import { Container } from './style';

interface IPropsCardSample {
  className?: string;
  children?: string | JSX.Element | JSX.Element[] | null;
}

const CardSample: React.FC<IPropsCardSample> = ({ children, className }) => {
  return (
    <Container className={className}>
      <div className="card">{children}</div>
    </Container>
  );
};

export default CardSample;
