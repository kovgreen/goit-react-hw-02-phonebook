import styled from 'styled-components';

export const FormBlock = styled.form`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  font-weight: 500;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 15px;
  padding: 8px 5px;
  border-radius: 2px;
  border: 3px solid rgb(120, 120, 120);

  :focus {
    border-color: rgb(0, 106, 177);
    outline: none;
  }
`;

export const Button = styled.button`
  margin: 20px;
  display: block;
  width: 100px;
  padding: 10px 5px;
  font-family: sans-serif;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 400;
  color: #fff;
  background-color: rgb(0, 106, 177);
  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease-in;

  :hover {
    cursor: pointer;
    background-color: rgb(19, 19, 138);
  }

  :disabled {
    background-color: rgb(85, 85, 85);
    cursor: default;
  }
`;
