import React, { FC } from "react";
import styled from "styled-components";
import type { InputHTMLAttributes } from "react";
import { FlexBox } from "./FlexBox";
import A_Icon from "./A_Icon";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleChange?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
  type: string;
  placeholder: string;
  label: string;
  value?: string;
  perc?: boolean;
  ins?: boolean;
  inv?: boolean;
}

const FlyingLabel = styled.label`
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.011em;
  position: absolute;
  left: 16px;
  top: 18px;
  margin: 0;
  padding: 0;
  transition: all 0.5s ease;
  color: ${({ theme }) => theme.input.placeholder};
  pointer-events: none;
`;

const InputWrapper = styled.input`
  border: none;
  outline: none;
  padding-bottom: 16px;
  padding-left: 16px;
  width: 392px;
  height: 38px;
  background-color: ${({ theme }) => theme.input.fill};
  border-radius: 9px;
  color: ${({ theme }) => theme.input.text};
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.011em;
  ::placeholder {
    color: ${({ theme }) => theme.input.fill};
  }
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 40px #0e0e0e inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.input.text};
  }
  :focus {
    outline: 1px solid;
    outline-color: ${({ theme }) => theme.input.simple_border};
    label {
      font-size: 11px;
      line-height: 11px;
      letter-spacing: -0.011em;
      color: ${({ theme }) => theme.input.placeholder};
    }
  }
  &:not(:placeholder-shown) ~ label {
    font-size: 11px;
    line-height: 11px;
    letter-spacing: -0.011em;
    color: ${({ theme }) => theme.input.placeholder};
    top: 32px;
  }
`;

const InputFlexBox = styled(FlexBox)`
  .empty {
    outline: 1px solid;
    outline-color: ${({ theme }) => theme.input.err_border};
    color: ${({ theme }) => theme.input.err_text};
  }
  position: relative;
  :focus-within {
    label {
      font-size: 11px;
      line-height: 11px;
      letter-spacing: -0.011em;
      color: ${({ theme }) => theme.input.placeholder};
      top: 32px;
    }
  }
`;

const IconWrapper = styled(FlexBox)`
  position: absolute;
  right: 12px;
  top: 11.5px;
`;

const A_Input = ({
  name,
  type,
  placeholder,
  label,
  value,
  perc,
  ins,
  inv,
  ...rest
}: InputProps) => {
  return (
    <InputFlexBox direction="column" style={{ gap: 10 }}>
      <InputWrapper
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        {...rest}
      ></InputWrapper>
      <FlyingLabel className="ppmedium">{label}</FlyingLabel>
      {perc && (
        <IconWrapper style={{top: 16}}>
          <A_Icon iconName="perception"></A_Icon>
        </IconWrapper>
      )}
      {ins && (
        <IconWrapper>
          <A_Icon iconName="insight"></A_Icon>
        </IconWrapper>
      )}
      {inv && (
        <IconWrapper>
          <A_Icon iconName="investigation"></A_Icon>
        </IconWrapper>
      )}
    </InputFlexBox>
  );
};

export default A_Input;
