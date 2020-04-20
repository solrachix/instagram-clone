import React, { createRef } from 'react';

import Avatar from '../Avatar';
import Item from './Item';
import { Container,
  Header,
  Body,
  Text } from './styles';

const images = [
  { id:0, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,care" },
  { id:1, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,studied" },
  { id:2, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,substance" },
  { id:3, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,choose" },
  { id:4, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,past" },
  { id:5, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,lamp" },
  { id:6, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,yet" },
  { id:7, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,eight" },
  { id:8, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,crew" },
  { id:9, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,event" },
  { id:10, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,instrument" },
  { id:11, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,practical" },
  { id:12, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,pass" },
  { id:13, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,bigger" },
  { id:14, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,number" },
  { id:15, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,feature" },
  { id:16, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,line" },
  { id:17, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,railroad" },
  { id:18, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,pride" },
  { id:19, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,too" },
  { id:20, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,bottle" },
  { id:21, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,base" },
  { id:22, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,cell" },
  { id:23, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,bag" },
  { id:24, altor: "Joao", avatar: "https://source.unsplash.com/random/?people,care", likes: 50, comments: 20, img: "https://source.unsplash.com/random/?tech,card" },
]

export default function Feed() {
  const galleryRef = createRef();

  return (
    <Container>
      <Header>
        <Text size={20} bold={500}>Feed</Text>
        <div>
          <Text size={14}>Latest</Text>
          <Text size={14} style={{opacity:0.4}}>Popular</Text>
        </div>
      </Header>

      <Body className="gallery" id="gallery" ref={ galleryRef }>
        { images.map(({ id, ...props }) =>
          <Item key={id} galleryRef={galleryRef} { ...props }/>
        )}
      </Body>
    </Container>
  );
}