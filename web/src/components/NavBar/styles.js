import styled from 'styled-components';

import airplane from '../../assets/icons/airplane.svg';

export const Container = styled.div`
  width: 20%;
  height: 100%;

  padding: 20px;
  padding-right: 5px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  & div{
    transition: 1s;
    flex: auto;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 50px;

  /* padding-right: ${({ parentWidth, delimiter }) => parentWidth < delimiter ? 0:30}px; */
  margin-top: -10px;

  display: flex;
  justify-content: ${({ parentWidth, delimiter }) => parentWidth < delimiter ? 'center': 'flex-start'};
  align-items: center;

  @media (max-width: 800px){
    justify-content: center;
    .LogoName{
      display: none;
    }
  }
  
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

export const LogoName = styled.img`
  width: 100px;
  height: 30px;
  
  margin-top: 10px;
  margin-left: 10px;

  filter: invert(1);
`;

export const Perfil = styled.div`
  width: 100%;
  /* height: 40px; */
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ width }) => console.log(width)}
  img {
    width: ${({ width }) => width<100 ? 50 : null};
  }
`;

export const Text = styled.p`
  margin-top: ${({ top = 10 }) => top}px;
  margin-bottom: ${({ bottom = 0 }) => bottom}px;
  margin-left: ${({ left = 0 }) => left}px;
  margin-right: ${({ right = 0 }) => right}px;
  line-height: 10px;

  color: ${({ color, theme }) => color ? color : theme.colors.text };

  font-size: ${({ size = 0.8 }) => size}em;
  font-weight: ${({ bold = 0 }) => bold ? 'bold' : bold };
  font-family: 'Open Sans', Roboto, Helvetica, Arial, sans-serif;
`;

export const Neck = styled.div`
  width: 100%;
  height: ${({ parentWidth, delimiter }) => parentWidth < delimiter ? 100 : 50}px;

  /* padding: 10px; */
  margin-top: 30px;

  display: flex;
  justify-content: center;
  align-items:center;

  ${({ parentWidth, delimiter }) => parentWidth < delimiter ? null : `
    div:first-child{
      border-right: 1px solid ${({ theme }) => theme.colors.secundary}
    }
    div:last-child {
      border-left: 1px solid ${({ theme }) => theme.colors.secundary}
    }
  `};
  

  flex-direction: ${({ parentWidth, delimiter }) => parentWidth < delimiter ? 'column': 'row'};
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
  justify-content: ${({ parentWidth, delimiter }) => parentWidth < delimiter ? 'center': 'flex-start'};
  align-items:center;

  cursor: pointer;
  /* transition: 0.5s; */
  &:hover{
    border-right: ${({ Featured=false })=> Featured ?1:0}px solid transparent;
    border-spacing: 10px 0px;
    border-image: 
      linear-gradient(to top, transparent, transparent,
      ${({ theme })=>theme.colors.red},
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




// ICONS 


export const Airplane = styled(airplane)`
  width: 50px;
  height: 50px;
`;