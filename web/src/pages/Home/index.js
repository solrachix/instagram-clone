import React, { useState, useEffect, createRef } from 'react';

import NavBar from '../../components/NavBar';
import Input from '../../components/Input';
import Feed from '../../components/Feed';

import { Container, Text,
  Content, Header, Bell, Direct, AddPhoto, Plus,
  Body, Stories, StoriesContent, Avatar,
  ToRecall, ArrrowLeft
} from './styles';

export default function Home() {
  const [ stories, setStories ] = useState([1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20]);

  const ToRecallRef = createRef();
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
  let isMove = false,
      mouseX = 0,
      mouseY = 0,
      lastPositionX = 0,
      lastPositionY = 0;

  const onMouseDown = (e) => {
    const elem = ToRecallRef.current;
    console.log(e)
    isMove = true;

    // el.className += " isMoving";

    mouseX = window.event ? window.event.clientX : e.pageX;
    mouseY = window.event ? window.event.clientY : e.pageY;

    lastPositionX = mouseX - elem.offsetLeft;
    lastPositionY = mouseY - elem.offsetTop;
  }

  const onMouseMove = (e) => {
    // CalcPorcentagem({ Num:mouseX, windowWidth})
    if (isMove) {
      const elem = ToRecallRef.current;
      const limitFinal = 18.5;
      const limitInicial = 5
      e.preventDefault();

      mouseX = CalcPorcentagem({ 
          Num: (window.event ? window.event.clientX : e.pageX) - lastPositionX,
          windowWidth
        });
      mouseY = window.event ? window.event.clientY : e.pageY;
      // console.log('X: ', mouseX);
      
      if(mouseX >= limitInicial && mouseX <= limitFinal){
        elem.style.marginLeft = `${mouseX}%`;

        const navbar = document.getElementById('#navbar');
        const content = document.getElementById('#content');
        navbar.style.width = `${mouseX}%`;
        content.style.width = `${limitFinal - mouseX + 80}%`;
        
        // console.log(navbar,content)
      }

      // elem.style.transform = `translateX(${mouseX/5}px)`;
      // elem.style.transform = `translateX(${mouseX-210}px)`;
      // elem.style.transform = `translate(${mouseX}px, ${y}px)`;

      // elem.style.left = (mouseX) + 'px';
      // elem.style.top  = (mouseY - lastPositionY) + 'px';
    }
  }

  const onMouseUp = () => {
    isMove = false;
    console.log(isMove)
  }
  return (
    <Container>
      <NavBar id="#navbar" componet={<div/>}/>

      <ToRecall
        ref={ToRecallRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      ><ArrrowLeft size={30} /></ToRecall>

      <Content id="#content">
          <Header>
            <Input placeholder="Search" />

            <div>
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
            
            <Feed />

          </Body>
        </Content>
      
    </Container>
  );
}


const CalcPorcentagem = ({Num,windowWidth}) => (Num/windowWidth)*100;