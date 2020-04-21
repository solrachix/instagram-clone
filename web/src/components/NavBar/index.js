import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { darken } from 'polished';

import InstaLogo from '../../assets/logo.svg'

import { GoSearch } from 'react-icons/go'
import { FiLogOut } from 'react-icons/fi'

import Avatar from '../Avatar';
import { Container,
   Bar, Header, Logo,
   Perfil, Text, Neck, Column, Body, Row, Footer,
   ToRecall
} from './styles';

export default function NavBar({ componet, ...props }) {
  const themeContext = useContext(ThemeContext).colors;
  return (
    <Container {...props}>
      <Bar>
        <Header>          
          <Logo src={InstaLogo}/>
        </Header>

        <Perfil>
          <Avatar 
            loading={false}
            width={100}
            img="https://avatars2.githubusercontent.com/u/57706806?s=460&u=d99f75dd759767691aecc7463b92fa022a4b01ee&v=4" />

          <Text size={14} bold={600} top={20}>Carlos Miguel</Text>
          <Text size={12} bold={500} color={darken(0.6, themeContext.text)}>@solrachix</Text>
        
          <Neck>
            <Column>
              <Text size={14}>2.5 k</Text>
              <Text size={12} color={themeContext.secundary}>Posts</Text>
            </Column>
            <Column>
              <Text size={14}>526</Text>
              <Text size={12} color={themeContext.secundary}>Followers</Text>
            </Column>
            <Column>
              <Text size={14}>46</Text>
              <Text size={12} color={themeContext.secundary}>Following</Text>
            </Column>
          </Neck>

          <Body>
            <Row Featured>
              <GoSearch size={20} color={themeContext.text} />
              <Text style={{ marginLeft: 30}} size={14} bold={0} top={0}>Search</Text>
            </Row>
            <Row Featured>
              <GoSearch size={20} color={themeContext.text} />
              <Text style={{ marginLeft: 30}} size={14} bold={0} top={0}>Search</Text>
            </Row>
            <Row Featured>
              <GoSearch size={20} color={themeContext.text} />
              <Text style={{ marginLeft: 30}} size={14} bold={0} top={0}>Search</Text>
            </Row>
            <Row Featured>
              <GoSearch size={20} color={themeContext.text} />
              <Text style={{ marginLeft: 30}} size={14} bold={0} top={0}>Search</Text>
            </Row>
            <Row Featured>
              <GoSearch size={20} color={themeContext.text} />
              <Text style={{ marginLeft: 30}} size={14} bold={0} top={0}>Search</Text>
            </Row>
          </Body>

          <Footer>
            <Row>
              <FiLogOut size={20} color={themeContext.text} />
              <Text style={{ marginLeft: 30}} size={14} bold={0} top={0}>Search</Text>
            </Row>
          </Footer>
        </Perfil>

        {/* <ToRecall /> */}
      </Bar>
      {/* { componet } */}



        <svg viewBox="0 0 100 100">
          <defs>
            <linearGradient id="gradient" x1="180" y1="14" x2="28" y2="182" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FCAC46"/>
              <stop offset="60%" stopColor="#E2336B"/>
              <stop offset="40%" stopColor="#482066"/>
            </linearGradient>
          </defs>
        </svg>
    </Container>
  );
}
