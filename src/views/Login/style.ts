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

    .input-text {
      margin-bottom: 1rem;
    }

    .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .input-checkbox {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      margin-bottom: 1rem;
    }

    .foot-text {
      margin-top: 2rem;

      > span:nth-child(2) {
        cursor: pointer;
        color: ${(props) => props.theme.fonts.color.secondary};
        font-weight: ${(props) => props.theme.fonts.weight.bold};
      }
    }
  }
`;
