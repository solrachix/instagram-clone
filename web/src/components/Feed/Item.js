import React, { useState, useEffect, createRef, memo } from 'react';

import Animation from '../LottieAnimation';
import like from '../../assets/like.json';
import heart from '../../assets/heart.json';

import Avatar from '../Avatar';
import { ItemContainer, ItemFooter, ItemAutor, ItemProperties, Comment,
  Text } from './styles';

const getVal = (elem, style) => parseInt(window.getComputedStyle(elem).getPropertyValue(style));

const Item = ({ img, avatar, altor, likes, comments, galleryRef }) => {
  const [ animationStart, setAnimationStart ] = useState(false);
  const [ isStoppedAnimation, setIsStoppedAnimation ] = useState(false);
  const [ height, setHeight ] = useState(100);
  const heartbeatAnimationRef = createRef();

  const ContainerRef  = createRef(),
        imgRef        = createRef(),
        contentRef    = createRef();

  useEffect(()=>{
    const gallery   = galleryRef.current,
          Img       = imgRef.current,
          getHeight = (item) => contentRef.current.getBoundingClientRect().height;
    
        
    // setHeight(50);

    Img.classList.add('byebye');
    if (Img.complete) {
      console.log(Img.src);
    }
    else {
      Img.addEventListener('load', () => {
        const altura = getVal(gallery, 'grid-auto-rows');
        const gap = getVal(gallery, 'grid-row-gap');
        const gitem = Img.parentElement.parentElement;
        gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
        Img.classList.remove('byebye');
      });
    }


    window.addEventListener('resize', () => resize({ gallery, getHeight }));
  },[]);

  const resize = ({ gallery, getHeight }) => {
    const altura = getVal(gallery, 'grid-auto-rows');
    const gap = getVal(gallery, 'grid-row-gap');
    const Container = ContainerRef.current;
    
    if(Container)
      Container
        .style
          .gridRowEnd = "span " + Math.ceil((getHeight(Container) + gap) / (altura + gap));
  };

  const handleClick = async () => {
    await setIsStoppedAnimation(false);
    // setAnimationStart(false);
    // console.log(animationStart, isStoppedAnimation, heartbeatAnimationRef.current);
    // console.log(ContainerRef.current.style);
    
    await setAnimationStart(true);

    setTimeout(function() {
      setAnimationStart(false);
      setIsStoppedAnimation(true);
    }, 3000)
    
  }

  return (
    <ItemContainer
      ref={ContainerRef}
      // onClick={elem => elem.currentTarget.classList.toggle('full') }
    >
      <div
        className="content"
        ref={contentRef}>
        <img ref={imgRef} onDoubleClick={handleClick} src={img} alt=""/>

        <ItemFooter>
          <ItemAutor>
            <Avatar loading={false} width={30} borderWidth={4} img={avatar} />
            <Text size={14} left={5} top={0}>{altor}</Text>
          </ItemAutor>

          <ItemProperties>            
            {/* <Heart size={20} /> */}
            <Animation 
              size={20}
              animationData={like}
              autoplay={animationStart}
              onClick={handleClick} />
            <Text size={14} top={0} left={-8} right={5}>{likes}</Text>

            <Comment size={20} />
            <Text size={14} top={0} left={-8}>{comments}</Text>
          </ItemProperties>
        </ItemFooter>
      </div>


      <Animation 
        ref={heartbeatAnimationRef}
        animationData={heart}
        autoplay={animationStart}
        isStopped={isStoppedAnimation}
        // loop={true}

        size={'inherit'}
        // height={height}
        style={{
          position: 'relative',
          margin: 0,
          marginTop: '-100%',
          display: animationStart ? 'block' : 'none',
          zIndex: 20
        }}/>
    </ItemContainer>
  )
}

export default memo(Item);