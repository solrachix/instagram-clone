import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;



export const Content = styled.div`
  width: 80%;
  height: 100%;

  padding: 20px 65px;

  background: ${({ theme }) => theme.colors.secundary };
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const Header = styled.header`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: flex-start;
  align-items:center;
`;