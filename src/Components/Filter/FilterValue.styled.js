import styled from 'styled-components';

export const FilterBlock = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px 10px 15px;
`;

export const Label = styled.label`
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 500;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px 5px;
  border-radius: 4px;
  border: 3px solid rgb(120, 120, 120);

  :focus {
    border-color: rgb(0, 106, 177);
    outline: none;
  }
`;
