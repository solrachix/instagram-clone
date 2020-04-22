import React, { useContext, useEffect, useState, memo } from 'react';
import { ThemeContext } from 'styled-components';
import { darken } from 'polished';

import InstaLogo from '../../assets/logo.svg'
import InstaLogoName from '../../assets/logoName.png'

import { GoSearch } from 'react-icons/go'
import { FiLogOut } from 'react-icons/fi'

import Avatar from '../Avatar';
import { Container,
   Header, Logo, LogoName,
   Perfil, Text, Neck, Column, Body, Row, Footer
} from './styles';

function NavBar({ componet, ...props }) {
  const delimiter = 100;
  const [ width, setWidth ] = useState(100);
  const [ styleForText, setStyleForText ] = useState({});
  const themeContext = useContext(ThemeContext).colors;

  useEffect(()=>{
    setStyleForText({
      marginLeft: 30,
      display: width < delimiter ? 'none': null,
    })
  }, [width]);

  useEffect(()=>{
    const observer = new MutationObserver(mutations => {
      setWidth(mutations[0].target.offsetWidth);
      // console.log(mutations[0].target.offsetWidth)
    });

    const target = document.getElementById('#navbar');
    observer.observe(target, {
      attributes: true
    });
  },[]);

  return (
    <Container {...props}>
      <Header parentWidth={width} delimiter={delimiter}>
        <Logo src={InstaLogo}/>
        <LogoName className="LogoName" style={{display: width < delimiter ? 'none': null}} src={InstaLogoName}/>
      </Header>

      <Perfil width={width}>
        <Avatar
          loading={false}
          width={width<delimiter ? 50 : 100}
          img="https://avatars2.githubusercontent.com/u/57706806?s=460&u=d99f75dd759767691aecc7463b92fa022a4b01ee&v=4" />

        <Text style={{display: width < delimiter ? 'none': null}} size={0.8} bold={600} top={20}>Carlos Miguel</Text>
        <Text size={0.6} bold={500} color={darken(0.6, themeContext.text)}>@solrachix</Text>
      
        <Neck parentWidth={width} delimiter={delimiter}>
          <Column>
            <Text size={0.8}>2.5 k</Text>
            <Text size={0.6} color={themeContext.secundary}>Posts</Text>
          </Column>
          <Column>
            <Text size={0.8}>526</Text>
            <Text size={0.6} color={themeContext.secundary}>Followers</Text>
          </Column>
          <Column>
            <Text size={0.8}>46</Text>
            <Text size={0.6} color={themeContext.secundary}>Following</Text>
          </Column>
        </Neck>

        <Body>
          <Row Featured parentWidth={width} delimiter={delimiter}>
            <GoSearch size={16} color={themeContext.text} />
            <Text style={styleForText} size={0.8} bold={0} top={0}>Search</Text>
          </Row>
          <Row Featured parentWidth={width} delimiter={delimiter}>
            <GoSearch size={16} color={themeContext.text} />
            <Text style={styleForText} size={0.8} bold={0} top={0}>Search</Text>
          </Row>
          <Row Featured parentWidth={width} delimiter={delimiter}>
            <GoSearch size={16} color={themeContext.text} />
            <Text style={styleForText} size={0.8} bold={0} top={0}>Search</Text>
          </Row>
          <Row Featured parentWidth={width} delimiter={delimiter}>
            <GoSearch size={16} color={themeContext.text} />
            <Text style={styleForText} size={0.8} bold={0} top={0}>Search</Text>
          </Row>
          <Row Featured parentWidth={width} delimiter={delimiter}>
            <GoSearch size={16} color={themeContext.text} />
            <Text style={styleForText} size={0.8} bold={0} top={0}>Search</Text>
          </Row>
        </Body>

        <Footer>
          <Row parentWidth={width} delimiter={delimiter}>
            <FiLogOut size={16} color={themeContext.text} />
            <Text style={styleForText} size={0.8} bold={0} top={0}>Search</Text>
          </Row>
        </Footer>
      </Perfil>



      <svg viewBox="0 0 100 100">
        <defs>
          <linearGradient id="gradient" x1="180" y1="1" x2="28" y2="182" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FCAC46"/>
            <stop offset="60%" stopColor="#E2336B"/>
            <stop offset="40%" stopColor="#482066"/>
          </linearGradient>
        </defs>
      </svg>
    </Container>
  );
}

export default memo(NavBar);