import styled from 'styled-components';

export const Input = styled.input`
  font-size: 1rem;
  padding: 1rem;
  border: none;
  background-color: transparent;
  font-family: ${(props) => props.theme.fonts.family};
  font-weight: ${(props) => props.theme.fonts.weight.normal};
`;

export const ContainerInput = styled.div`
  background-color: ${(props) => props.theme.colors.bg};
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 10px;
`;

export const ContainerInputText = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;

  div:last-child {
    margin-top: 0.5rem;

    span {
      font-size: ${(props) => props.theme.fonts.sizes.small};
      color: ${(props) => props.theme.fonts.color.warning};
    }
  }

  .label {
    margin-bottom: 0.5rem;
    font-size: ${(props) => props.theme.fonts.sizes.small};
    font-weight: ${(props) => props.theme.fonts.weight.bold};
  }
`;

export const InputCheck = styled.input`
  margin: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
`;

export const ContainerInputCheck = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .label {
    margin-left: 0.5rem;
    font-size: ${(props) => props.theme.fonts.sizes.small};
  }
`;
