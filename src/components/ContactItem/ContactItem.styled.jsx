import styled from '@emotion/styled';

export const ContactStyle = styled.li`
display: flex;
justify-content: space-between;
gap: 5px;
padding: 5px;`

export const BtnDelete = styled.button`
height: 20px;
width: 60px;
align-self: flex-end;
color: #000;
text-transform: capitalize;
border: none;
border-radius: 14px;
background-image: linear-gradient(to right, #348F50 50%, #348F50 100%);
font-size: 10px;
cursor: pointer;
box-shadow: 4px 4px 6px 0px rgba(66, 68, 90, 1);

&:hover {
  background-image: linear-gradient(to right, #1D976C 0%, #93F9B9 51%, #1D976C 100%);
}`