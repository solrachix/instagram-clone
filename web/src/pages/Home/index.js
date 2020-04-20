import React from 'react';

import NavBar from '../../components/NavBar';
import Input from '../../components/Input';

import { Container, 
  Content, Header, Bell, Direct, AddPhoto, Plus
} from './styles';

export default function Home() {
  return (
    <Container>
      <NavBar componet={
        <Content>
          <Header>
            <Input placeholder="Search" />

            <div className="">
              <Bell size={25} />
              <Direct size={25} />
              <AddPhoto>
                <Plus size={25} />
                Add photo
              </AddPhoto>
            </div>
          </Header>
        </Content>
      }/>
    </Container>
  );
}
