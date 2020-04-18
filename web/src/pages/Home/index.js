import React from 'react';

import NavBar from '../../components/NavBar'

import { Container, Content } from './styles';

export default function Home() {
  return (
    <Container>
      <NavBar componet={
        <Content />
      }/>
    </Container>
  );
}
