import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;

  form {
    width: 90%;

    > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 0.8rem;
    }

    > div:nth-child(3) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 0.8rem;
    }

    > div:nth-child(4) {
      margin-bottom: 1rem;
    }

    .btn-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 0.8rem;
      margin-top: 1rem;
    }
  }
`;
