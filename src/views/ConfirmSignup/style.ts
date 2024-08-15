import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;

  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 2rem;
    border-radius: 20px;

    @media (min-width: 320px) {
      width: 250px;
    }

    @media (min-width: 768px) {
      width: 400px;
    }

    @media (min-width: 1024px) {
      width: 600px;
    }

    > span:nth-child(2) {
      margin-bottom: 1rem;
    }

    .input-code {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
`;
