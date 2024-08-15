import React from 'react';
import {
  ContainerInput,
  ContainerInputCheck,
  ContainerInputText,
  Input,
  InputCheck,
} from './style';
import { FormikErrors } from 'formik';
import { Text } from '../Text';

interface IPropsInputText {
  value: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
  classname?: string;
  touched?: any;
  disabled?: boolean;
  error?:
    | string
    | FormikErrors<any>
    | string[]
    | FormikErrors<any>[]
    | undefined;
}

export const InputText: React.FC<IPropsInputText> = ({
  value,
  onChange,
  handleBlur,
  placeholder,
  classname,
  error,
  name,
  type = 'text',
  disabled = false,
}) => {
  return (
    <ContainerInputText className={classname}>
      <ContainerInput>
        <Input
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onBlur={handleBlur}
          type={type}
          disabled={disabled}
        />
      </ContainerInput>
      {error && (
        <div>
          <Text text={String(error)} />
        </div>
      )}
    </ContainerInputText>
  );
};

export const InputTextLabel: React.FC<IPropsInputText & { label: string }> = ({
  value,
  onChange,
  handleBlur,
  placeholder,
  classname,
  error,
  name,
  type = 'text',
  disabled = false,
  label,
}) => {
  return (
    <ContainerInputText className={classname}>
      <Text text={label} classname="label" />
      <ContainerInput>
        <Input
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onBlur={handleBlur}
          type={type}
          disabled={disabled}
        />
      </ContainerInput>
      {error && (
        <div>
          <Text text={String(error)} />
        </div>
      )}
    </ContainerInputText>
  );
};

interface IPropsInputCheckbox {
  value: boolean;
  onChange: (value: boolean) => void;
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  name?: string;
  type?: string;
  label?: string;
  classname?: string;
}

export const InputCheckbox: React.FC<IPropsInputCheckbox> = ({
  value,
  onChange,
  handleBlur,
  name,
  type = 'checkbox',
  label,
  classname,
}) => {
  return (
    <ContainerInputCheck className={classname}>
      <InputCheck
        name={name}
        checked={value}
        onChange={() => onChange(!value)}
        onBlur={handleBlur}
        type={type}
      />
      {label && <Text classname="label" text={label} />}
    </ContainerInputCheck>
  );
};
