import styled from 'styled-components';

export const ContactBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContactName = styled.span`
  flex: 1 0 auto;
`;

export const ContactNumber = styled.span`
  margin-right: 10px;
`;

export const ContactButtonDelete = styled.button`
  display: block;
  padding: 5px 10px;
  font-weight: 400;
  color: #fff;
  background-color: rgb(218, 1, 1);
  border: none;
  border-radius: 4px;

  :hover {
    cursor: pointer;
    background-color: rgb(170, 0, 0);
  }
`;
