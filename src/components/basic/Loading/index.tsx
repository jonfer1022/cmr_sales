import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Container } from './style';

const Loading: React.FC = () => {
  return (
    <Container>
      <ClipLoader
        color={'#36d7b7'}
        loading={true}
        cssOverride={{ margin: '0 auto' }}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Container>
  );
};

export default Loading;
