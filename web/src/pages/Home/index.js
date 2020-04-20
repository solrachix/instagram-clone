import React, { useState } from 'react';

import NavBar from '../../components/NavBar';
import Input from '../../components/Input';
import Feed from '../../components/Feed';

import { Container, Text,
  Content, Header, Bell, Direct, AddPhoto, Plus,
  Body, Stories, StoriesContent, Avatar
} from './styles';

export default function Home() {
  const [ stories, setStories ] = useState([1,2,3,4,5,6,8,9,10]);

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

          <Body>
            <Stories>
              <Text size={20} bold={500}>Stories</Text>

              <StoriesContent>
                <div>
                  {stories && stories.map(index => (
                    <Avatar key={index}
                    loading={false}
                    width={100}
                    img="https://avatars2.githubusercontent.com/u/57706806?s=460&u=d99f75dd759767691aecc7463b92fa022a4b01ee&v=4" />
                  ))}
                </div>
              </StoriesContent>

            </Stories>

            <Feed>

            </Feed>
          </Body>
        </Content>
      }/>
    </Container>
  );
}
