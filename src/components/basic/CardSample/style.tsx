import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: transparent;
  justify-content: center;
  padding: 0.5rem;
  /* width: 90%; */

  .card {
    width: 95%;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${(props) => props.theme.colors.border};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.white};
  }
`;
