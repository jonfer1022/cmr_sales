import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    margin: 0;
    align-items: center;
    justify-content: center;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.white};

    li:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      border-right: 1px solid ${(props) => props.theme.colors.border};
    }

    li:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border-left: 1px solid ${(props) => props.theme.colors.border};
    }

    li {
      padding: 1rem;
      font-size: ${(props) => props.theme.fonts.sizes.small};
      font-family: ${(props) => props.theme.fonts.family};
      cursor: pointer;
    }

    .selected {
      background-color: ${(props) => props.theme.colors.action};
      color: ${(props) => props.theme.colors.white};
    }
  }
`;
