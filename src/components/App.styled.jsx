import styled from '@emotion/styled';

export const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  padding: 50px;
  background-image: linear-gradient(
    109.6deg,
    rgba(61, 131, 97, 1) 11.2%,
    rgba(28, 103, 88, 1) 91.1%
  );
`;

export const Title = styled.h1`
  font-family: 'Oxygen', sans-serif;
  color: #f5f5f5;
  font-size: 35px;
  text-transform: uppercase;
`;

export const SecondTitle = styled.h2`
  font-family: 'Oxygen', sans-serif;
  color: #f5f5f5;
  font-size: 30px;
`;
