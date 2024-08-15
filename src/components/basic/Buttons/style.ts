import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.family};
  font-size: ${(props) => props.theme.fonts.sizes.small};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  padding: 0.7rem 1rem;
  width: 100%;

  &:hover {
    opacity: 0.8;
    transition: 0.3s;
    transform: scale(1.01);
  }
`;

export const BtnAction = styled(Button)`
  background-color: ${(props) => props.theme.colors.action};
  border-radius: 10px;
  ${(props) =>
    props.disabled &&
    `
    background-color: ${props.theme.colors.actionDisabled};
    cursor: not-allowed !important;
  `}

  .btn-action-text {
    color: ${(props) => props.theme.fonts.color.white};
    font-size: ${(props) => props.theme.fonts.sizes.small};
    font-weight: ${(props) => props.theme.fonts.weight.bold};
  }
`;

export const BtnSecondary = styled(Button)`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  ${(props) =>
    props.disabled &&
    `
    background-color: ${props.theme.colors.actionDisabled};
    cursor: not-allowed !important;
  `}

  .btn-action-text {
    color: ${(props) => props.theme.fonts.color.white};
    font-size: ${(props) => props.theme.fonts.sizes.small};
    font-weight: ${(props) => props.theme.fonts.weight.bold};
  }
`;
