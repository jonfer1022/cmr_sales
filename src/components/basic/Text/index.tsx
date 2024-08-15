import React from 'react';
import { FootTxt, Heading2, NormalText } from './style';

interface IPropsText {
  text: string;
  classname?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const Text: React.FC<IPropsText> = ({
  text,
  classname,
  onClick,
  style,
}) => {
  return (
    <NormalText className={classname} onClick={onClick} style={style}>
      {text}
    </NormalText>
  );
};

export const FootText: React.FC<IPropsText> = ({
  text,
  classname,
  onClick,
  style,
}) => {
  return (
    <FootTxt className={classname} onClick={onClick} style={style}>
      {text}
    </FootTxt>
  );
};

export const HeadingTwo: React.FC<IPropsText> = ({
  text,
  classname,
  onClick,
  style,
}) => {
  return (
    <Heading2 className={classname} onClick={onClick} style={style}>
      {text}
    </Heading2>
  );
};
