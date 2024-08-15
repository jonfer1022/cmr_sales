import styled from 'styled-components';

export const Link = styled.div<{ $active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.bgDark};
  cursor: pointer;

  span {
    font-size: ${(props) => props.theme.fonts.sizes.small};
    font-weight: ${(props) => props.theme.fonts.weight.bold};
    color: white;
  }

  ${(props) =>
    props.$active &&
    `
    background-color: ${props.theme.colors.action};
    cursor: default;
  `}
`;
