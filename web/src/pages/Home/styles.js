import styled from 'styled-components';
import { rgba } from 'polished';

import avatar from '../../components/Avatar';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items:center;
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
  justify-content: space-between;
  align-items:center;

  div{
    min-width: 200px;
    width: 240px;

    display: flex;
    justify-content: space-around;
    align-items:center;
  }
`;


export const AddPhoto = styled.button`
  min-width: 100px;
  width: 140px;
  height: 44px;
  padding: 10px;

  background: linear-gradient(45deg, 
    ${({ theme })=> theme.colors.red},
    ${({ theme })=> theme.colors.yellow});
  border-radius: 5px;
  color: ${({ theme })=> theme.colors.text};
  font-size: 12px;

  display: flex;
  justify-content: space-evenly;
  align-items:center;
`;


export const Body = styled.div`
  width: 100%;
  max-height: 84%;
  height: 84%;

  margin-top: 6%;

  overflow: hidden;
  overflow-y: auto;

  user-select: none;
`;

export const Stories = styled.div`
  width: 100%;
  height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const StoriesContent = styled.div`
  width: 100%;

  margin-top: 10px;

  overflow: hidden;
  overflow-x: auto;
  scrollbar-width: 1px;

  -webkit-overflow-scrolling: touch; 

  &::-webkit-scrollbar-thumb {    
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50px;
  }

  div{
    min-width: 1000px;
    min-height: 90px;

    display: -webkit-box;

    /* display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;  */
  }
`;

export const Avatar =  styled(avatar)`
  flex: 0 1 auto;
`;








export const Text = styled.p`
  margin-top: ${({ top = 10 }) => top}px;
  line-height: 10px;

  color: ${({ color, theme }) => color ? color : theme.colors.text };

  font-size: ${({ size = 14 }) => size}px;
  font-weight: ${({ bold = 0 }) => bold ? 'bold' : bold };
  font-family: 'Open Sans', Roboto, Helvetica, Arial, sans-serif;
`;


//icons

const { IoIosNotificationsOutline, IoIosArrowBack } = require('react-icons/io'),
      { FiPlus } = require('react-icons/fi'),
      { Airplane } = require('../../components/icons');

export const Bell = styled(IoIosNotificationsOutline)`
  color: ${({ theme }) => theme.colors.text };
`;

export const Direct = styled(Airplane)`
  fill: ${({ theme }) => theme.colors.text };
`;

export const Plus = styled(FiPlus)`
  fill: ${({ theme }) => theme.colors.text };

  padding: 5px;

  background: #fff3;
  border-radius: 50px;
`;

export const ArrrowLeft = styled(IoIosArrowBack)`
  fill: ${({ theme }) => theme.colors.text };

  padding: 5px;
`;





// ============================

export const ToRecall = styled.div`
  position: absolute;
  top: 80%;
  margin-left: 18.5%;

  width: 30px;
  height: 30px;

  background-color: ${({ theme }) => theme.colors.secundary };
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 30;
  cursor: grab;
  &:active{
    cursor: grabbing;
  }
`;
