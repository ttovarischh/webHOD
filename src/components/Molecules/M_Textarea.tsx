import React from "react";
import styled from "styled-components";
import { FlexBox, G_Text } from "../Common";

type BСProps = {
  handleInputChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: any;
};

const Input = styled.textarea`
  width: 270px;
  height: 360px;
  background: #1c1c1c;
  border: 1px solid #262626;
  border-radius: 10px;
  padding: 12px;
  resize: none;
  color: #ffffff;
  font-size: 18px;
  line-height: 22px;
  outline: none;
  :focus {
    border: 1px solid;
    border-color: ${({ theme }) => theme.input.simple_border};
  }
`;

const LabelWrapper = styled(FlexBox)`
  position: absolute;
  bottom: 7px;
  left: 9px;
`;

const M_Textarea = ({ handleInputChange, value }: BСProps) => {
  return (
    <FlexBox style={{ alignSelf: "center", position: "relative" }}>
      <Input
        className="ppmedium"
        placeholder="Запишите все, что нужно!"
        onChange={handleInputChange}
        value={value}
      ></Input>
      <LabelWrapper>
        <G_Text color="#7C7C7C">Заметки</G_Text>
      </LabelWrapper>
    </FlexBox>
  );
};

export default M_Textarea;
