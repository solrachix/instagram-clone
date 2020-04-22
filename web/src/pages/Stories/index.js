import React, { useEffect, createRef } from 'react';

import Text from '../../components/Text';

import { Container, IconPrev, IconNext, Content, Cub, Button, GoOut } from './styles';

  const stories = [
    {
      user: {
        name: 'crawlgossip',
        imageURL: 'https://api.adorable.io/avatars/100',
      },
      images: [
        'https://i.picsum.photos/id/289/250/450.jpg',
        'https://i.picsum.photos/id/201/250/450.jpg',
        'https://i.picsum.photos/id/202/250/450.jpg',
        'https://i.picsum.photos/id/204/250/450.jpg',
        'https://i.picsum.photos/id/206/250/450.jpg',
      ],
    },
    {
      user: {
        name: 'cohortmandrake',
        imageURL: 'https://api.adorable.io/avatars/101',
      },
      images: [
        'https://i.picsum.photos/id/208/250/450.jpg',
        'https://i.picsum.photos/id/267/250/450.jpg',
        'https://i.picsum.photos/id/268/250/450.jpg',
        'https://i.picsum.photos/id/269/250/450.jpg',
        'https://i.picsum.photos/id/270/250/450.jpg',
        'https://i.picsum.photos/id/271/250/450.jpg',
        'https://i.picsum.photos/id/272/250/450.jpg',
        'https://i.picsum.photos/id/273/250/450.jpg',
        'https://i.picsum.photos/id/274/250/450.jpg',
      ],
    },
    {
      user: {
        name: 'greg_green',
        imageURL: 'https://api.adorable.io/avatars/102',
      },
      images: [
        'https://i.picsum.photos/id/214/250/450.jpg',
        'https://i.picsum.photos/id/215/250/450.jpg',
        'https://i.picsum.photos/id/218/250/450.jpg',
        'https://i.picsum.photos/id/219/250/450.jpg',
        'https://i.picsum.photos/id/220/250/450.jpg',
      ],
    },
    {
      user: {
        name: 'australians12',
        imageURL: 'https://api.adorable.io/avatars/110',
      },
      images: [
        'https://i.picsum.photos/id/221/250/450.jpg',
        'https://i.picsum.photos/id/227/250/450.jpg',
      ],
    },
    {
      user: {
        name: 'graindar',
        imageURL: 'https://api.adorable.io/avatars/124',
      },
      images: [
        'https://i.picsum.photos/id/229/250/450.jpg',
        'https://i.picsum.photos/id/230/250/450.jpg',
        'https://i.picsum.photos/id/231/250/450.jpg',
        'https://i.picsum.photos/id/232/250/450.jpg',
        'https://i.picsum.photos/id/234/250/450.jpg',
        'https://i.picsum.photos/id/267/250/450.jpg',
        'https://i.picsum.photos/id/268/250/450.jpg',
        'https://i.picsum.photos/id/269/250/450.jpg',
        'https://i.picsum.photos/id/270/250/450.jpg',
        'https://i.picsum.photos/id/271/250/450.jpg',
        'https://i.picsum.photos/id/272/250/450.jpg',
        'https://i.picsum.photos/id/273/250/450.jpg',
        'https://i.picsum.photos/id/274/250/450.jpg',
      ],
    },
    {
      user: {
        name: 'elegancekat',
        imageURL: 'https://api.adorable.io/avatars/104',
      },
      images: [
        'https://i.picsum.photos/id/235/250/450.jpg',
        'https://i.picsum.photos/id/236/250/450.jpg',
        'https://i.picsum.photos/id/237/250/450.jpg',
        'https://i.picsum.photos/id/238/250/450.jpg',
        'https://i.picsum.photos/id/240/250/450.jpg',
        'https://i.picsum.photos/id/241/250/450.jpg',
      ],
    },
  ];
  
export default function Stories({ history }) {
  const ButtonPrevRef = createRef();
  const ButtonNextRef = createRef();
  const CubRef = createRef();

  let faceIndex = 0;
  let storieIndex = 0;
  let imgIndex = 0;
  let imgInterval = 0;
  let imgProgress = 0;
  let countRotation = 1;
  let crrRotationDeg = 0;

  const createElement = (tagName, props) => {
    const element = document.createElement(tagName);

    Object
      .entries(props)
      .forEach(([ key, value ]) => element.setAttribute(key, value));

    return element;
  };

  const rotateCub = (rotation) => {    
    const $cub      = CubRef.current;

    $cub.style.transform = `rotateY(-${rotation}deg)`;
  };

  const renderInFace = (index, element) => {    
    const $faces    = document.querySelectorAll('.face');

    $faces[index].innerHTML = '';
    $faces[index].append(element);
  };

  const createStorie = (storieData) => {    
    const $faces    = document.querySelectorAll('.face');
    const $cub      = CubRef.current;
    const $btnNext  = ButtonNextRef.current;
    const $btnPrev  = ButtonPrevRef.current;

    imgIndex = 0;
    imgProgress = 0;

    const rootElement = createElement('div', {
      class: 'instagram-stories__storie',
    });

    const renderStorie = () => (
      rootElement.innerHTML = `<header class="instagram-storie__header">
              <div class="instagram-storie__header__user">
                <img
                  alt="Foto do perfil do usuário"
                  class="instagram-storie__header__user-image"
                  src="${storieData.user.imageURL}"
                />
                <h2 class="instagram-storie__header__user-name">
                  ${storieData.user.name}
                </h2>
              </div>
              <div class="instagram-storie__header__options">
                <span class="instagram-storie__header__options-circle"></span>
                <span class="instagram-storie__header__options-circle"></span>
                <span class="instagram-storie__header__options-circle"></span>
              </div>
            </header>
            <div class="instagram-storie__progress">
              ${storieData.images.map((_, index) =>(
                `
                <div class="instagram-storie__progress-item">
                  <div
                    class="instagram-storie__progress-item__bar"
                    style="width: ${index === imgIndex ? `${imgProgress}%` : (
                      index < imgIndex ? '100%' : '0%'
                    )}"
                  >
                  </div>
                </div>
              `
              )).join('')}
            </div>
            <div
              class="instagram-storie__image"
              style="background-image: url('${storieData.images[imgIndex]}')"
            >
            </div>`
      );

    const startImgProgress = () => {
      clearInterval(imgInterval);

      imgInterval = setInterval(() => {
        imgProgress += 10 / 3;

        if (imgIndex === storieData.images.length) {
          nextFace()
          return;
        }

        if (imgProgress > 100) {
          imgIndex++;
          imgProgress = 0;
          return;
        }

        renderStorie();
      }, 100);
    };

    renderStorie();
    startImgProgress();

    return rootElement;
  };

  const nextFace = () => {

    if (stories[storieIndex].images[imgIndex + 1]) {
      imgIndex++;
      imgProgress = 0;
      return;
    } else if (!stories[storieIndex + 1]) {
      return;
    }

    storieIndex++;
    countRotation++;
    crrRotationDeg += 90
    faceIndex = ((countRotation % 4) || 4) - 1;

    if (!stories[storieIndex]) {
      storieIndex = 0;
    }

    renderInFace(faceIndex, createStorie(stories[storieIndex]));
    rotateCub(crrRotationDeg);
  };

  const prevFace = () => {
    if (stories[storieIndex].images[imgIndex - 1]) {
      imgIndex--;
      imgProgress = 0;
      return;
    }

    if (crrRotationDeg <= 0) return;

    storieIndex--;
    countRotation--;
    crrRotationDeg -= 90;
    faceIndex = ((countRotation % 4) || 4) - 1;

    renderInFace(faceIndex, createStorie(stories[storieIndex]));
    rotateCub(crrRotationDeg);
  };

  useEffect(()=> {
    const $faces    = document.querySelectorAll('.face');
    const $cub      = CubRef.current;

    $cub.style.transformOrigin = `center center ${(-$cub.clientWidth / 2)}px`;
    $faces[2].style.transform = `translateZ(-${$faces[2].clientWidth}px) rotateY(180deg) translateX(-100%)`;

    window.addEventListener('resize', (event) => {
      $cub.style.transformOrigin = `center center ${(-$cub.clientWidth / 2)}px`;
      $faces[2].style.transform = `translateZ(-${$faces[2].clientWidth}px) rotateY(180deg) translateX(-100%)`;
    });
    
    renderInFace(0, createStorie(stories[storieIndex]));
  }, []);

  return (
    <Container>
      {/* { stories.map(({ id, ...props }, index) => <Storie key={id} stories={stories.length} index={index} {...props} />)} */}

      <Content>

        <Button ref={ButtonPrevRef}
          onClick={prevFace}
          className="prev"><IconPrev size={20} /></Button>
        <Button ref={ButtonNextRef}
          onClick={nextFace}
          className="next"><IconNext size={20} /></Button>
        
        <Cub ref={CubRef}>
          <div className="face face-up"></div>
          <div className="face face-right"></div>
          <div className="face face-down"></div>
          <div className="face face-left"></div>
        </Cub>

        <GoOut 
          // onClick={()=> history.goBack()}          
          onClick={()=> window.location.assign("http://localhost:3000/")}
          size={30}
        />
      </Content>
    </Container>
  );
}

// const Storie = ({ index, stories, altor, avatar }) => {
//   console.log(stories)
//   const style = {
//     transform: `rotateY(-90deg) translateX(50%) rotateY(90deg)`,
//   }
//   return (
//     <Content style={style}>
//       <Header>
//         <Avatar src={avatar} />
//       </Header>
//     </Content>
//   );
// }