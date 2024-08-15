import styled from 'styled-components';

export const Txt = styled.span`
  font-family: ${(props) => props.theme.fonts.family};
  color: ${(props) => props.theme.fonts.color.primary};
`;

export const FootTxt = styled(Txt)`
  font-size: ${(props) => props.theme.fonts.sizes.small};
  font-weight: ${(props) => props.theme.fonts.weight.light};
  color: ${(props) => props.theme.fonts.color.light};
`;

export const NormalText = styled(Txt)`
  font-size: ${(props) => props.theme.fonts.sizes.small};
  font-weight: ${(props) => props.theme.fonts.weight.light};
`;

export const Heading2 = styled.h2`
  font-family: ${(props) => props.theme.fonts.family};
  font-size: ${(props) => props.theme.fonts.sizes.large};
  font-weight: ${(props) => props.theme.fonts.weight.bold};
  color: ${(props) => props.theme.fonts.color.primary};
`;
