import styled from 'styled-components';

import airplane from '../../assets/icons/airplane.svg';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

`;

export const Bar = styled.div`
  width: 20%;
  height: 100%;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  height: 50px;

  margin-top: -10px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

export const Perfil = styled.div`
  width: 100%;
  /* height: 40px; */
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  margin-top: ${({ top = 10 }) => top}px;
  line-height: 10px;

  color: ${({ color, theme }) => color ? color : theme.colors.text };

  font-size: ${({ size = 14 }) => size}px;
  font-weight: ${({ bold = 0 }) => bold ? 'bold' : bold };
  font-family: 'Open Sans', Roboto, Helvetica, Arial, sans-serif;
`;

export const Neck = styled.div`
  width: 100%;
  height: 50px;

  /* padding: 10px; */
  margin-top: 30px;

  display: flex;
  justify-content: center;
  align-items:center;

  div:first-child{
    border-right: 1px solid ${({ theme }) => theme.colors.secundary}
  }
  div:last-child {
    border-left: 1px solid ${({ theme }) => theme.colors.secundary}
  }
`;

export const Column = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items:center;
`;


export const Body = styled.div`
  width: 100%;
  min-height: 220px;
  height: 220px;
  max-height: 220px;

  overflow-x: hidden;
  overflow-y: auto;

  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:center;
`;

export const Row = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: flex-start;
  align-items:center;

  cursor: pointer;
  /* transition: 0.5s; */
  &:hover{
    border-right: ${({ Featured=false })=> Featured ?1:0}px solid transparent;
    border-spacing: 10px 0px;
    border-image: 
      linear-gradient(to top, transparent, transparent,
      ${({ theme })=>theme.colors.pink},
      ${({ theme })=>theme.colors.yellow},
      transparent, transparent
      );
    border-image-slice: 1;

    opacity: 0.8;
  }

  &:hover > svg, &:hover > path {
    /* color: ${({ theme })=>theme.colors.yellow}!important; */
    fill: ${({ Featured=false })=> Featured ?'url(#gradient)':null};
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 50px;

  padding-top: 10px;

  border-top: 1px solid ${({ theme }) => theme.colors.secundary };
`;


// ============================

export const ToRecall = styled.div`
  position: absolute;
  top: 80%;
  margin-left: 10%;

  width: 50px;
  height:50px;

  background-color: red;
`;


// ICONS 


export const Airplane = styled(airplane)`
  width: 50px;
  height: 50px;
`;