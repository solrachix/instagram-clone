import React from 'react';
import styled from 'styled-components';




export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100vh;

  /* padding-bottom: 20px; */
  background: ${({ theme }) => theme.colors.primary };

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;
  max-width: 300px;
  max-height: 900px;
  height: calc(100% - 50px);
  width: 500px;

  /* border-left: 46px solid ${({ theme }) => theme.colors.secundary };
  border-right: 46px solid ${({ theme }) => theme.colors.secundary }; */

  box-sizing: content-box;
  user-select: none;
  transform-style: preserve-3d;
  margin: 0px 10px;



  .instagram-stories__storie {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    user-select: none;
  }

  .instagram-storie__image {
    width: 100%;
    flex-grow: 1;
    background-color: #000;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .instagram-storie__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px;
    background-color: transparent;
  }

  .instagram-storie__header__user {
    display: flex;
    align-items: center;
  }

  .instagram-storie__header__user-image {
    width: 32px;
    height: 32px;
    margin-right: 8px;
    border-radius: 50%;
  }

  .instagram-storie__header__user-name {
    margin: 0px;
    color: #fff;
    font-size: 14px;
  }

  .instagram-storie__header__options {
    color: #fff;
    display: flex;
    justify-items: center;
    align-items: center;
    cursor: pointer;
  }

  .instagram-storie__header__options-circle {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #fff;
  }

  .instagram-storie__header__options-circle:not(:last-child) {
    margin-right: 4px;
  }

  .instagram-storie__progress {
    display: flex;
    padding: 12px 0px 8px 0px;
    background-color: transparent;
  }

  .instagram-storie__progress-item {
    height: 2px;
    background-color: #727272;
    flex-grow: 1;
    border-radius: 10px;
    overflow: hidden;
  }

  .instagram-storie__progress-item__bar {
    background-color: #fff;
    height: 100%;
    width: 0%;
  }

  .instagram-storie__progress-item:not(:last-child) {
    margin-right: 2px;
  }

  
  @media (max-width: 920px) {
    width: 100%;
    height: 100%;
  }

`;

export const Cub = styled.div`
  position: absolute;
  left: 0px;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform .7s;

  .face {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
      backface-visibility: hidden;
  }

  .face-up {
    transform-origin: left;
  }

  .face-left {
    transform: rotateY(-90deg) translateX(-100%);
    transform-origin: left;
  }

  .face-right {
    transform: rotateY(90deg) translateX(100%);
    transform-origin: right top;
  }

  .face-down {
    transform-origin: bottom left;
  }
`;

export const Button = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #BEBEBE;
  color: #212121;
  border: none;
  padding: 0px;
  border-radius: 5px;
  font-size: 14px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  outline: none;

  &.next {
    top: calc(50% - 15px);
    right: -50px;
    transform: translateZ(600px);
  }

  &.prev {
    top: calc(50% - 15px);
    left: -50px;
    transform: translateZ(600px);
  }
  @media (max-width: 920px) {    
    &.next {
      right: -50px;
      box-shadow: 0px 0px 10px 2px rgba(0,0,0,.5);
    }

    &.prev {
      left: -50px;
      box-shadow: 0px 0px 10px 2px rgba(0,0,0,.5);
    }
  }
`;



export const Header = styled.header`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;


//icons

const { IoIosArrowBack, IoIosArrowForward } = require('react-icons/io');

export const IconPrev = styled(IoIosArrowBack)`
  color: ${({ theme }) => theme.colors.primary };
`;

export const IconNext = styled(IoIosArrowForward)`
  color: ${({ theme }) => theme.colors.primary };
`;