import React from "react";
import styled from "styled-components";
import { COLORS } from "../utils/colors.js";

const TextInput = ({ setForm, label, type, formKey }) => {
  return (
    <Wrapper>
      <Label>{label}:</Label>
      <Input
        type={type}
        placeholder={label}
        onChange={(e) => setForm((current) => ({ ...current, [formKey]: e.target.value }))}
      />
    </Wrapper>
  );
};

export default TextInput;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 15px 0;

  width: 100%;
`;

const Label = styled.label`
  font-size: 28px;
  color: ${COLORS.secondaryColor};
`;

const Input = styled.input`
  width: 100%;

  box-sizing: border-box;
  border: solid 2px ${COLORS.secondaryColor};

  margin-top: 5px;
`;
