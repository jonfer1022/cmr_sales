import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.bgDark};
  padding: 1rem;

  .logo {
    margin: 0.5rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};

    span {
      margin-left: 1rem;
      font-size: ${(props) => props.theme.fonts.sizes.medium};
      font-weight: ${(props) => props.theme.fonts.weight.bold};
      color: white;
    }
  }
`;
