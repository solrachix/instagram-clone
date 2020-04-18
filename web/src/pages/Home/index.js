import React from 'react';

import NavBar from '../../components/NavBar';
import Input from '../../components/Input';

import { Container, 
  Content, Header
} from './styles';

export default function Home() {
  return (
    <Container>
      <NavBar componet={
        <Content>
          <Header>
            <Input placeholder="Search" />
          </Header>
        </Content>
      }/>
    </Container>
  );
}
