import styled from 'styled-components';
import { rgba } from 'polished';

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



//icons

const { IoIosNotificationsOutline } = require('react-icons/io'),
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